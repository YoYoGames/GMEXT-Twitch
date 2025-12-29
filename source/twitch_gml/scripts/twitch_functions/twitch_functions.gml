
function twitch_functions() {
	throw $"{_GMFUNCTION_} :: This script file cannot be called.";
};

#region Macros

#macro TWITCH_DEBUG_MAX_RESPONSE_LENGTH 5000

#macro TWITCH_DEBUG false

#macro TWITCH_ENDPOINT "https://api.twitch.tv/"
#macro TWITCH_AUTH_ENDPOINT "https://id.twitch.tv/"

// This macro is used internally to create a cache of your session.
// The auth tokens and refresh tokens will be stored in this file.
#macro TWITCH_SESSION_FILE "twitch_session.dat"

#endregion

#region Internal

/// @param {Any} _data
function __twitch_debug_callback_success(_data) {
	__twitch_debug_callback("SUCCEEDED", _data);
}

/// @param {Any} _data
function __twitch_debug_callback_failure(_data) {
	__twitch_debug_callback("FAILED", _data);
}

/// @param {String} _status
/// @param {Any} _data
/// @ignore
function __twitch_debug_callback(_status, _data) {
	var _str_data = $"{_status} " + string_copy(json_stringify(_data), 0, TWITCH_DEBUG_MAX_RESPONSE_LENGTH);
	show_debug_message(_str_data);
	show_message_async(_str_data);
}

/// @ignore
function __twitch_get_singleton() {
	with (obj_twitch_core) {
		return id;
	}
	return instance_create_depth(0, 0, 0, obj_twitch_core);
}

/// @param {Struct} _base_struct
/// @param {Struct} _to_merge
/// @param {Bool} _overwrite
/// @ignore
function __twitch_struct_merge(_base_struct, _to_merge, _overwrite = false)
{
	if (is_undefined(_base_struct)) _base_struct = {};
	if (is_undefined(_to_merge)) return _base_struct;
	
	var _keys = struct_get_names(_to_merge)
	for (var _i = 0; _i < array_length(_keys); _i++) {
		var _key = _keys[_i];
		if (_overwrite || !struct_exists(_base_struct, _key)) {
			_base_struct[$ _key] = _to_merge[$ _key];
		}
	}
	return _base_struct;
}

/// @param {String} _url_base
/// @param {Struct} _params
/// @param {Struct} _optionals
/// @ignore
function __twitch_url_from_params(_url_base, _params = undefined, _optionals = undefined)
{
	_params = __twitch_struct_merge(_params, _optionals);
	
	var _keys = struct_get_names(_params);
	var _length = array_length(_keys);
	var _result = array_create(_length);
	
	for (var _i = 0; _i < _length; _i++)
	{
		var _key = _keys[_i];
		var _value = struct_get(_params, _keys[_i]);
				
		_result[_i] = is_array(_value) ? __twitch_parameters_build_array(_key, _value) : $"{_key}={_value}";
	}
	
	var _str = string_pos("?", _url_base) == 0 ? "?" : "";
	_str += string_join_ext("&", _result);
	
	return _url_base + _str;
}

/// @param {String} _key
/// @param {Array} _array
/// @ignore
function __twitch_parameters_build_array(_key, _array)
{
	var _length = array_length(_array);
	var _result = array_create(_length);
	for (var _i = 0; _i < _length; ++_i) {
		_result[_i]=$"{_key}={_array[_i]}"; 
	}
	return string_join_ext("&", _result);
}

/// @param {String} _url
/// @param {String} _http_method
/// @param {Id.DsMap} _header_map
/// @param {String|Id.Buffer} _body
/// @param {Function} _callback_success
/// @param {Function} _callback_failed
/// @param {String} _type
/// @ignore
function __twitch_request(_url, _http_method, _header_map, _body, _callback_success, _callback_failed, _type)
{
	var _request_data = {
		type: _type,
		url: _url,
		http_method: _http_method,
		header: json_encode(_header_map),
		body: _body,
		callback_success: _callback_success,
		callback_failed: _callback_failed,
	}
		
	var _request_id = http_request(_url, _http_method, _header_map, _body)

	if (!is_string(_body)) {
		buffer_delete(_body); 
		_body = undefined;
	}

	ds_map_destroy(_header_map);
	__twitch_get_singleton().requests[? _request_id] = _request_data;
	
	return _request_id;
}


#endregion

// ## MANAGEMENT ###############################################

function twitch_init()
{
	__twitch_get_singleton();
};

// ## UTILITIES ################################################

/// @returns {String}
function twitch_get_client_id()
{
	static client_id = extension_get_option_value("Twitch", "twitchClientId");
	return client_id;
};

/// @returns {String}
function twitch_get_client_secret()
{
	static client_secret = extension_get_option_value("Twitch", "twitchClientSecret");
	return client_secret;
};

/// @returns {String}
function twitch_get_redirect_url()
{
	static redirect_url = extension_get_option_value("Twitch", "twitchRedirectUrl");
	return redirect_url;
};

/// @returns {Real}
function twitch_get_redirect_port()
{
	static redirect_port = floor(real(extension_get_option_value("Twitch", "twitchRedirectPort")));
	return redirect_port;
};

/// @returns {Real}
function twitch_get_token_refresh_rate() {
	static refresh_rate = extension_get_option_value("Twitch", "twitchTokenRefreshRate");
	return clamp(refresh_rate, 10, refresh_rate);
}

/// @returns {String}
function twitch_get_access_token()
{
	with (__twitch_get_singleton()) {
		return twitch_access_token;
	}
}

/// @returns {String}
function twitch_get_app_access_token()
{
	with (__twitch_get_singleton()) {
		return twitch_app_access_token;
	}
}

/// @returns {String}
function twitch_get_refresh_token()
{
	with (__twitch_get_singleton()) {
		return twitch_refresh_token;
	}
}


// ## AUTH #####################################################

/// @param {Struct} _data The auth session data.
/// @returns {Bool}
/// @ignore
function __twitch_auth_session_data_is_valid(_data) {
	return is_struct(_data) && struct_exists(_data, "access_token") && struct_exists(_data, "refresh_token");
}

/// @param {Function} _callback_success
/// @param {Function} _callback_failed
/// @ignore
function __twitch_auth_defer_callback(_callback_success, _callback_failed) {

	return method({ callback_success: _callback_success, callback_failed: _callback_failed }, function(_data) {

		var _deferred_context = { callback_success, data: _data };

		// Validate session data (this can be invalid if there is no internet connection)
		if (!__twitch_auth_session_data_is_valid(_data)) {
			return callback_failed("[ERROR] Could not reach the server (invalid session data).");
		}
			
		// Store the session data in disk
		__twitch_auth_session_save(_data);
			
		// The context of the callback method includes the deferred values from the authentication
		// call this allows us to silently handle chained actions to store important information
		twitch_users_get_users(undefined, method(_deferred_context, function(_data) {
			
			with (__twitch_get_singleton()) {
				user_struct = _data.data[0];
				
				// Do this to avoid a memory leak when spamming authentication calls
				if (is_undefined(refresher)) {
					var _refresh_rate = twitch_get_token_refresh_rate();
					refresher = call_later(_refresh_rate, time_source_units_seconds, twitch_auth_refresh_token, true);
				}
			}
				
			if (is_callable(callback_success)) {
				/// feather ignore once GM1013
				callback_success(data);
			}
			
		}), 
		callback_failed);
	});
};

/// @param {Struct} _session_data
/// @ignore
function __twitch_auth_session_load() {
	if (!file_exists(TWITCH_SESSION_FILE))
		return false;

	var _map = ds_map_secure_load(TWITCH_SESSION_FILE);
	with (__twitch_get_singleton()) {
		twitch_access_token = _map[?"access_token"];
		twitch_refresh_token = _map[?"refresh_token"];
	}
	ds_map_destroy(_map);
	
	return true;
}

/// @param {Struct} _session_data
/// @ignore
function __twitch_auth_session_save(_session_data) {
	// Store the session data in disk
	var _map = json_decode(json_stringify(_session_data));
	ds_map_secure_save(_map, TWITCH_SESSION_FILE);
	ds_map_destroy(_map)
				
	with (__twitch_get_singleton()) {
		// Cache the session tokens
		twitch_access_token = _session_data.access_token
		twitch_refresh_token = _session_data.refresh_token
	}
}

function twitch_auth(_scopes, _force_verify = false, _state = undefined, _callback_success = undefined, _callback_failed = undefined)
{	
	var _url = $"{TWITCH_AUTH_ENDPOINT}oauth2/authorize";
	
	var _port = twitch_get_redirect_port();
	var _redirect_uri = twitch_get_redirect_url();
	
	var _scopes_str = is_array(_scopes) ? string_join_ext(" ", _scopes) : _scopes;

	var _parameters = { client_id: twitch_get_client_id(), force_verify: _force_verify, response_type: "code", redirect_uri: _redirect_uri, scope: _scopes_str, /* state */ };

	_url = __twitch_url_from_params(_url, _parameters);	
	if (os_type == os_android or os_type == os_ios) {
		WebView_Create(_url);
	}
	else {
		url_open(_url);
	}	
	
	var _deferred_callback = __twitch_auth_defer_callback(_callback_success, _callback_failed);
	
	with (__twitch_get_singleton()) {
		server = network_create_server_raw(network_socket_tcp, _port, 1);
		twitch_auth_callback_success = _deferred_callback;
		twitch_auth_callback_failed = _callback_failed;
	}
	
};

function twitch_auth_exchange_code(_code, _callback_success = undefined, _callback_failed = undefined)
{
	var _redirect_uri = twitch_get_redirect_url();
	
	var _url = $"{TWITCH_AUTH_ENDPOINT}oauth2/token";

	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";

	var _client_id = twitch_get_client_id();
	var _client_secret = twitch_get_client_secret();

	var _body = $"client_id={_client_id}&client_secret={_client_secret}&code={_code}&grant_type=authorization_code&redirect_uri={_redirect_uri}";
	var _request = __twitch_request(_url, "POST", _header_map, _body, _callback_success, _callback_failed, "twitch_auth_exchange_code");

	return _request;
};

function twitch_auth_app_token(_callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_AUTH_ENDPOINT}oauth2/token";

	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";

	var _client_id = twitch_get_client_id();
	var _client_secret = twitch_get_client_secret();

	var _deferred_callback = method({ callback_success: _callback_success }, function(_data) {
		with (__twitch_get_singleton()) {
			twitch_app_access_token = _data.access_token
		}

		if (is_callable(callback_success)) {
			callback_success(_data);
		}
	});

	var _body = $"client_id={_client_id}&client_secret={_client_secret}&refresh_token={twitch_get_refresh_token()}&grant_type=client_credentials";
	var _request = __twitch_request(_url, "POST", _header_map, _body, _deferred_callback, _callback_failed, "twitch_auth_app_token");

	return _request;
};

function twitch_auth_refresh_token(_callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_AUTH_ENDPOINT}oauth2/token";

	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";

	var _client_id = twitch_get_client_id();
	var _client_secret = twitch_get_client_secret();

	var _deferred_callback = method({ callback_success: _callback_success, callback_failed: _callback_failed  }, function(_data) {
		
		// Validate session data (this can be invalid if there is no internet connection)
		if (!__twitch_auth_session_data_is_valid(_data)) {
			return callback_failed("[ERROR] Could not reach the server (invalid session data)");
		}
		
		// Store the session data in disk
		__twitch_auth_session_save(_data);

			
		if (is_callable(callback_success)) {
			callback_success(_data);
		}
	});

	var _body = $"client_id={_client_id}&client_secret={_client_secret}&refresh_token={twitch_get_refresh_token()}&grant_type=refresh_token";
	return __twitch_request(_url, "POST", _header_map, _body, _deferred_callback, _callback_failed, "twitch_auth_refresh_token");	
};

function twitch_auth_from_cache(_callback_success = undefined, _callback_failed = undefined)
{	
	if (!__twitch_auth_session_load()) return 1;
	
	var _deferred_callback = __twitch_auth_defer_callback(_callback_success, _callback_failed);
	
	return twitch_auth_refresh_token(_deferred_callback, _callback_failed);
};

function twitch_auth_signout()
{
	file_delete(TWITCH_SESSION_FILE);
	with (__twitch_get_singleton()) {
		if (!is_undefined(refresher)) {
			call_cancel(refresher);
			refresher = undefined;
		}
		twitch_access_token = "";
		twitch_refresh_token = "";
	}
};

// ## ADS ######################################################

function twitch_ads_start_commercial(_broadcaster_id, _length, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channels/commercial";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { broadcaster_id: _broadcaster_id, length: _length };
	
	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_ads_get_ad_schedule(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channels/ads";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_ads_snooze_next_ad(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channels/ads/schedule/snooze";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "POST", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## ANALYTICS ################################################

function twitch_analytics_get_extension_analytics(_optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/analytics/extensions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_analytics_get_game_analytics(_optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/analytics/games";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## BITS #####################################################

function twitch_bits_get_bits_leaderboard(_optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/bits/leaderboard";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	
	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_bits_get_cheermotes(_optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/bits/cheermotes";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_bits_get_extension_transactions(_extension_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/extensions/transactions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_app_access_token()}";
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { extension_id: _extension_id };
	
	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## CHANNELS #################################################

function twitch_channels_get_channel_information(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channels";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_channels_modify_channel_information(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channels";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _parameters = { broadcaster_id: _broadcaster_id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "PATCH", _header_map, json_stringify(_optionals), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_channels_get_channel_editors(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channels/editors";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_channels_get_followed_channels(_user_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channels/followed";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { user_id: _user_id };
	
	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_channels_get_channel_followers(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channels/followers";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _parameters = { broadcaster_id: _broadcaster_id };
	
	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## CHANNEL POINTS ###########################################

function twitch_channel_points_create_custom_rewards(_broadcaster_id, _title, _cost, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channel_points/custom_rewards";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { title: _title, cost: _cost };
	_body = __twitch_struct_merge(_body, _optionals);

	var _parameters = { broadcaster_id: _broadcaster_id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_channel_points_delete_custom_reward(_broadcaster_id, _id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channel_points/custom_rewards";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _parameters = { broadcaster_id: _broadcaster_id, id: _id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_channel_points_get_custom_reward(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channel_points/custom_rewards";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };
	
	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_channel_points_get_custom_reward_redemption(_broadcaster_id, _reward_id, _status, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channel_points/custom_rewards/redemptions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = _optionals ?? {};

	var _parameters = { broadcaster_id: _broadcaster_id, reward_id: _reward_id, status: _status };
	_url = __twitch_url_from_params(_url, _parameters);

	var _request = __twitch_request(_url, "PATCH", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_channel_points_update_custom_reward(_broadcaster_id, _id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channel_points/custom_rewards";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = _optionals ?? {};

	var _parameters = { broadcaster_id: _broadcaster_id, id: _id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "PATCH", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_channel_points_update_redemption_status(_id, _broadcaster_id, _reward_id, _status, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channel_points/custom_rewards/redemptions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { status: _status };

	var _parameters = { broadcaster_id: _broadcaster_id, id: _id, reward_id: _reward_id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "PATCH", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## CHARITY ##################################################

function twitch_charity_get_charity_campaign(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/charity/campaigns";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_charity_get_charity_campaign_donations(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/charity/donations";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };
	
	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_charity_get_chatters(_broadcaster_id, _moderator_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/chatters";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id };
	
	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## CHAT #####################################################

function twitch_chat_get_chatters(_broadcaster_id, _moderator_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/chatters";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id };
	
	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_chat_get_channel_emotes(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/emotes";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_chat_get_global_emotes(_callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/emotes/global";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_chat_get_emote_sets(_emote_set_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/emotes/set";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { emote_set_id: _emote_set_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_chat_get_channel_chat_badges(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/badges";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_chat_get_global_chat_badges(_callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/badges/global";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_chat_get_chat_settings(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/settings";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_chat_get_user_emotes(_user_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/emotes/user";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { user_id: _user_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_chat_update_chat_settings(_broadcaster_id, _moderator_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/settings";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = _optionals ?? {};

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "PATCH", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_chat_send_chat_announcement(_broadcaster_id, _moderator_id, _message, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/announcements";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { message: _message };
	_body = __twitch_struct_merge(_body, _optionals);

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_chat_send_a_shoutout(_from_broadcaster_id, _to_broadcaster_id, _moderator_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/shoutouts";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { message: _message };

	var _parameters = { from_broadcaster_id: _from_broadcaster_id, to_broadcaster_id: _to_broadcaster_id, moderator_id: _moderator_id };

	_url = __twitch_url_from_params(_url, _parameters);

	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_chat_send_chat_message(_broadcaster_id, _sender_id, _message, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/messages";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { broadcaster_id: _broadcaster_id, sender_id: _sender_id, message: _message };
	_body = __twitch_struct_merge(_body, _optionals);

	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_chat_get_user_chat_color(_user_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/color";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { user_id: _user_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_chat_update_user_chat_color(_user_id, _color, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/color";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { user_id: _user_id, color: _color };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "PUT", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_chat_live_connect(_channel_id, _nickname, _callback)
{
	with (__twitch_get_singleton()) {
		twitch_chat_callback = _callback
	
		twitch_irc_channel = $"#{_channel_id}";
		twitch_irc_name    = _nickname;
		twitch_irc_oauth   = extension_get_option_value("Twitch","twitchChatOAuth");

		if (is_undefined(twitch_client_chat_socket)) {
		    twitch_client_chat_socket = network_create_socket(network_socket_tcp);
		}
		else {
		    show_debug_message("Failed to create new socket, socket already exists!");
		    return -1;
		}

		// make sure the socket was successfully created
		if (twitch_client_chat_socket == -1) {
		    network_destroy(twitch_client_chat_socket);
		    twitch_client_chat_socket = undefined;
		    show_debug_message("Failed to create TCP socket");
		    return -1;
		}
		else {
		    show_debug_message("TCP Socket created, attempting to connect...");
		}

		return network_connect_raw_async(twitch_client_chat_socket, "irc.chat.twitch.tv", 6667)
	}
}

function twitch_chat_live_send(_text)
{
	with (__twitch_get_singleton()) {
		twitch_chat_live_send_raw($"PRIVMSG #{user_struct.login} :{_text}\r\n");
	}
}

function twitch_chat_live_send_raw(_text)
{
	static _buff_temp = buffer_create(1, buffer_grow, 1);
	
	with (__twitch_get_singleton()) {
		buffer_seek(_buff_temp, buffer_seek_start, 0);
		buffer_write(_buff_temp, buffer_string, _text);
		network_send_raw(twitch_client_chat_socket, _buff_temp, buffer_tell(_buff_temp));
	}
}

function twitch_chat_live_disconnect()
{
	with (__twitch_get_singleton()) {
		if (!is_undefined(twitch_client_chat_socket))
		{
			network_destroy(twitch_client_chat_socket)
			twitch_client_chat_socket = undefined
		}
	}
}

// ## CLIPS ####################################################

function twitch_clips_create_clip(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/clips";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "POST", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_clips_get_clips(_broadcaster_id, _game_id, _id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/clips";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, game_id: _game_id, id: _id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## CONDUITS #################################################

function twitch_conduits_get_conduits(_callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/eventsub/conduits";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_app_access_token()}";
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_conduits_create_conduits(_shard_count, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/eventsub/conduits";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_app_access_token()}";
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { shard_count: _shard_count };
	
	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_conduits_update_conduits(_id, _shard_count, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/eventsub/conduits";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_app_access_token()}";
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _body = { id: _id, shard_count: _shard_count };

	var _request = __twitch_request(_url, "PATCH", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_conduits_delete_conduit(_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/eventsub/conduits";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_app_access_token()}";
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { id: _id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_conduits_get_conduit_shards(_conduit_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/eventsub/conduits/shards";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_app_access_token()}";
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { conduit_id: _conduit_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_conduits_update_conduit_shards(_conduit_id, _shards, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/eventsub/conduits/shards";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_app_access_token()}";
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { conduit_id: _conduit_id, shards: _shards };
	_body = __twitch_struct_merge(_body, _optionals);

	var _request = __twitch_request(_url, "PATCH", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## CCLS #####################################################

function twitch_ccls_get_content_classification_labels(_optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/content_classification_labels";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## ENTITLEMENTS #############################################

function twitch_entitlements_get_drops_entitlements(_optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/entitlements/drops";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_entitlements_update_drops_entitlements(_optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/entitlements/drops";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = _optionals ?? {};

	var _request = __twitch_request(_url, "PATCH", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## EXTENSIONS ###############################################

function twitch_extensions_create_jwt_token(_secret, _payload = {}) {
	
	// ## CRYPTOGRAPHY #############################################
	// 
	// The functions in this section are derived from the work of community contributor Juju Adams.
	// The original implementations are provided under the MIT license, as referenced below:
	// 
	// MIT License
	// 
	// Copyright (c) 2021 Juju Adams
	// 
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the "Software"), to deal
	// in the Software without restriction, including without limitation the rights
	// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	// copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	// 
	// The above copyright notice and this permission notice shall be included in all
	// copies or substantial portions of the Software.
	// 
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	// SOFTWARE. 

	/// @desc Computes the SHA-256 hash of a given buffer using the SHA-256 algorithm.
	/// This function implements the full SHA-256 algorithm, processes the input buffer, and returns the hash value either
	/// as a hexadecimal string or as an array of 8 words (32-bit integers) depending on the `_return_string` parameter.
	/// @param {Id.Buffer} _out_buffer The output buffer where the binary SHA-256 hash (32 bytes) will be written.
	/// @param {Id.Buffer} _in_buffer The input buffer to be hashed.
	/// @param {Real} _in_offset The offset in the buffer where the hash should begin (default is 0).
	/// @param {Real} _size The number of bytes to read from the buffer (default is the remaining buffer size).
	/// @ignore
	static __twitch_buffer_sha256 = function(_out_buffer, _in_buffer, _in_offset = 0, _size = (buffer_get_size(_in_buffer) - _in_offset))
	{
		// Constants
		static __sha256_block_size = 64;
		static __sha256_word_datatype = buffer_u32;
		static __sha256_word_size = buffer_sizeof(__sha256_word_datatype);
		static __sha256_block_words = (__sha256_block_size / __sha256_word_size);
		static __sha256_round_count = 64;

		// Reusable arrays
		static __sha256_message_schedule = array_create(__sha256_round_count, 0x00);

		static __sha256_round_constants = [ 0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
	                                    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
	                                    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
	                                    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
	                                    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
	                                    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
	                                    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
	                                    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2 ];	
	
		var _state_array_0 = 0x6a09e667;
		var _state_array_1 = 0xbb67ae85;
		var _state_array_2 = 0x3c6ef372;
		var _state_array_3 = 0xa54ff53a;
		var _state_array_4 = 0x510e527f;
		var _state_array_5 = 0x9b05688c;
		var _state_array_6 = 0x1f83d9ab;
		var _state_array_7 = 0x5be0cd19;

	    var _block_count = ceil(_size / __sha256_block_size);
    
	    //If we don't have space after the final block to store the bit size of the input buffer, add on an extra block
	    var _last_block_remaining = __sha256_block_size*_block_count - _size;
	    if (_last_block_remaining < 9) _block_count++; //Ensure we have enough room to append a 0x80 byte and a 64-bit integer at the end
    
		var _buffer = _in_buffer, _offset = _in_offset;
	    buffer_resize(_buffer, _offset + __sha256_block_size*_block_count);
    
	    buffer_poke(_buffer, _offset + _size, buffer_u8, 0x80);
    
	    //Store the number of bits right at the end of the buffer
	    //This is stored as a big endian number
	    var _bits = 8*_size;
	    buffer_seek(_buffer, buffer_seek_start, _offset + __sha256_block_size*_block_count - 8);
	    buffer_write(_buffer, buffer_u8, _bits >> 56);
	    buffer_write(_buffer, buffer_u8, _bits >> 48);
	    buffer_write(_buffer, buffer_u8, _bits >> 40);
	    buffer_write(_buffer, buffer_u8, _bits >> 32);
	    buffer_write(_buffer, buffer_u8, _bits >> 24);
	    buffer_write(_buffer, buffer_u8, _bits >> 16);
	    buffer_write(_buffer, buffer_u8, _bits >>  8);
	    buffer_write(_buffer, buffer_u8, _bits      );
    
	    //Jump back to where the data begins
	    buffer_seek(_buffer, buffer_seek_start, _offset);
    
	    //Perform round for each block
	    repeat(_block_count)
	    {
	        var _message_schedule = __sha256_message_schedule;
        
	        var _i = 0;
	        repeat(__sha256_block_words)
	        {
	            var _value = buffer_read(_buffer, __sha256_word_datatype);
	            //Reverse endianness
	            _message_schedule[@ _i] = ((_value & 0x000000ff) << 24)
	                                    | ((_value & 0x0000ff00) <<  8)
	                                    | ((_value & 0x00ff0000) >>  8)
	                                    | ((_value & 0xff000000) >> 24);
	            ++_i;
	        }
        
	        _i = __sha256_block_words;
	        repeat(__sha256_round_count - __sha256_block_words)
	        {
	            var _p = _message_schedule[_i - 15];
	            var _q = _message_schedule[_i -  2];
            
	            _message_schedule[@ _i] = ((((_q >> 17) | (_q << 15)) ^ ((_q >> 19) | (_q << 13)) ^ (_q >> 10)) //sigma 1
	                                    +  _message_schedule[_i - 7]
	                                    + (((_p >> 7) | (_p << 25)) ^ ((_p >> 18) | (_p << 14)) ^ (_p >> 3)) //sigma 0
	                                    +  _message_schedule[_i - 16])
	                                    & 0xffffffff;
            
	            _i++;
	        }
        
	        var _a = _state_array_0;
	        var _b = _state_array_1;
	        var _c = _state_array_2;
	        var _d = _state_array_3;
	        var _e = _state_array_4;
	        var _f = _state_array_5;
	        var _g = _state_array_6;
	        var _h = _state_array_7;
        
	        _i = 0;
	        repeat(__sha256_round_count)
	        {
	            var _t1 = _h
	                   + ((((_e >> 6) | (_e << 26))   ^   ((_e >> 11) | (_e << 21))   ^   ((_e >> 25) | (_e << 7))) & 0xffffffff) //sum 1
	                   + ((_e & _f) ^ (~_e & _g))
	                   + __sha256_round_constants[_i]
	                   + _message_schedule[_i];
               
	            var _t2 = ((((_a >> 2) | (_a << 30))   ^   ((_a >> 13) | (_a << 19))   ^   ((_a >> 22) | (_a << 10))) & 0xffffffff) //sum 0
	                   + ((_a & _b) ^ (_a & _c) ^ (_b & _c));
        
	            _h = _g;
	            _g = _f;
	            _f = _e;
	            _e = (_d + _t1) & 0xffffffff;
	            _d = _c;
	            _c = _b;
	            _b = _a;
	            _a = (_t1 + _t2) & 0xffffffff;
        
	            ++_i;
	        }
	
	        _state_array_0 = (_state_array_0 + _a) & 0xffffffff;
	        _state_array_1 = (_state_array_1 + _b) & 0xffffffff;
	        _state_array_2 = (_state_array_2 + _c) & 0xffffffff;
	        _state_array_3 = (_state_array_3 + _d) & 0xffffffff;
	        _state_array_4 = (_state_array_4 + _e) & 0xffffffff;
	        _state_array_5 = (_state_array_5 + _f) & 0xffffffff;
	        _state_array_6 = (_state_array_6 + _g) & 0xffffffff;
	        _state_array_7 = (_state_array_7 + _h) & 0xffffffff;
	    }
	
	
		// Seek to the begining of the output buffer
		buffer_seek(_out_buffer, buffer_seek_start, 0);
	
		var _state_array = [
			_state_array_0,
			_state_array_1,
			_state_array_2,
			_state_array_3,
			_state_array_4,
			_state_array_5,
			_state_array_6,
			_state_array_7,
		];
	
		// Write each word into the buffer as 4 bytes (big-endian order)
		var _len = array_length(_state_array);
		for (var _i = 0; _i < _len; _i++) {
			var _word = _state_array[_i];
			_word = ((_word & 0x000000ff) << 24)
					| ((_word & 0x0000ff00) <<  8)
					| ((_word & 0x00ff0000) >>  8)
					| ((_word & 0xff000000) >> 24);
			buffer_write(_out_buffer, buffer_u32, _word);
		}

		// Seek to the begining of the output buffer
		buffer_seek(_out_buffer, buffer_seek_start, 0);	
	}

	/// @desc Computes HMAC-SHA256 using a given key and message.
	/// The function pads the key to the appropriate length and performs two rounds of SHA-256: the inner and outer rounds, 
	/// using the padded key and the message. The output is returned as a SHA-256 word array.
	/// @param {Id.Buffer} _out_buffer - The output buffer where the binary HMAC-SHA256 hash (32 bytes) will be written.
	/// @param {Id.Buffer} _key_buffer - The input buffer containing the key for HMAC.
	/// @param {String} _message - The message to be hashed using HMAC-SHA256.
	/// @ignore
	static __twitch_hmac_sha256 = function(_out_buffer, _key_buffer, _message)
	{
		static __twitch_buffer_sha256 = twitch_extensions_create_jwt_token.__twitch_buffer_sha256;
		
	    var _block_size  = 64; //bytes
	    var _return_size = 32; //bytes
    
	    var _inner_pad_buffer = buffer_create(_block_size + string_byte_length(_message), buffer_fixed, 1);
	    var _outer_pad_buffer = buffer_create(_block_size + _return_size, buffer_fixed, 1);
    
	    var _key_length = buffer_get_size(_key_buffer);
	    if (_key_length > _block_size)
	    {
	        //If the key is longer than the block size, we hash the key and use that instead
	        __twitch_buffer_sha256(_out_buffer, _key_buffer, undefined, undefined);
        
	        //Add the (hashed) key to the inner and outer pad buffers, XOR'd as necessary
	        repeat(8)
	        {
	            var _value = buffer_read(_out_buffer, buffer_u32);            
	            buffer_write(_inner_pad_buffer, buffer_u32, 0x36363636 ^ _value);
	            buffer_write(_outer_pad_buffer, buffer_u32, 0x5c5c5c5c ^ _value);
	        }
        
	        //Set the key length to the return size for the benefit of figuring out how much padding to add
	        _key_length = _return_size;
	    }
	    else
	    {
	        //If the key is smaller than the block size, just use the key
	        buffer_seek(_key_buffer, buffer_seek_start, 0);
	        repeat(_key_length)
	        {
	            var _value = buffer_read(_key_buffer, buffer_u8);
	            buffer_write(_inner_pad_buffer, buffer_u8, 0x36 ^ _value);
	            buffer_write(_outer_pad_buffer, buffer_u8, 0x5c ^ _value);
	        }
	    }
    
	    //Pad out the rest too!
	    buffer_fill(_inner_pad_buffer, _key_length, buffer_u8, 0x36, _block_size - _key_length);
	    buffer_fill(_outer_pad_buffer, _key_length, buffer_u8, 0x5c, _block_size - _key_length);
	    buffer_seek(_inner_pad_buffer, buffer_seek_start, _block_size);
	    buffer_seek(_outer_pad_buffer, buffer_seek_start, _block_size);
    
	    //Append the message to the inner padding, and hash the whole lot
	    buffer_write(_inner_pad_buffer, buffer_text, _message);
	    __twitch_buffer_sha256(_out_buffer, _inner_pad_buffer, 0, buffer_tell(_inner_pad_buffer));
	
		buffer_copy(_out_buffer, 0, buffer_get_size(_out_buffer), _outer_pad_buffer, buffer_tell(_outer_pad_buffer));
    
	    //And finally hash the outer padding too
	    return __twitch_buffer_sha256(_out_buffer, _outer_pad_buffer, undefined, undefined);
	}

	// ## ENCODE UTILS #############################################

	/// @desc Encodes a given buffer into a Base64Url string.
	/// This function converts a binary buffer into a standard Base64 string, and then converts it into Base64Url format
	/// by replacing characters according to Base64Url rules.
	/// @param {Id.Buffer} _buffer - The buffer to be encoded.
	/// @returns {String} The Base64Url encoded string.
	/// @ignore
	static __twitch_buffer_base64_url_encode = function(_buffer, _offset = 0, _size = -1) {
		var _base64_url = buffer_base64_encode(_buffer, _offset, _size);
		_base64_url = string_replace_all(_base64_url, "+", "-");
		_base64_url = string_replace_all(_base64_url, "/", "_");
		_base64_url = string_trim_end(_base64_url, ["="]);
		return _base64_url;
	}

	/// @desc Encodes a given string into a Base64Url string.
	/// Converts the input string into Base64 format and then adjusts it to be Base64Url compliant by replacing
	/// `+` with `-` and `/` with `_`, and removing any trailing `=` characters.
	/// @param {String} _str - The input string to be encoded.
	/// @returns {String} The Base64Url encoded string.
	/// @ignore
	static __twitch_base64_url_encode = function(_str) {
		var _base64_url = base64_encode(_str);
		_base64_url = string_replace_all(_base64_url, "+", "-");
		_base64_url = string_replace_all(_base64_url, "/", "_");
		_base64_url = string_trim_end(_base64_url, ["="]);
		return _base64_url;
	}
	
	// ## IMPLEMENTATION ###########################################
	
	// Create and encode a static JWT header (base64 url)
	static _encoded_header = __twitch_base64_url_encode(json_stringify({alg: "HS256", typ: "JWT"}));

	// Encode the JWT payload (base64 url)
	var _encoded_payload = __twitch_base64_url_encode(json_stringify(_payload));

	// Create the string to sign ("header.payload")
	var _data = $"{_encoded_header}.{_encoded_payload}";

	// Decode the shared secret (twitch secrets are always base64 encoded)
	var _secret_buffer = buffer_base64_decode(_secret);

	// Create a buffer for the binary signature (it's static to reduce memory fragmentation)	
	static _signature_binary_buffer = buffer_create(32, buffer_fixed, 1);
	
	// 5. Use the __twitch_hmac_sha256 function to create the signature (returns a word array)
	__twitch_hmac_sha256(_signature_binary_buffer, _secret_buffer, _data);
	
	// 6. Convert word array to binary buffer and encode it (base64 url)
	var _signature_base64_url = __twitch_buffer_base64_url_encode(_signature_binary_buffer);

	// 7. Clear resources
	buffer_delete(_secret_buffer);

	// 8. Return the full JWT as "header.payload.signature"
	return $"{_encoded_header}.{_encoded_payload}.{_signature_base64_url}";
}

function twitch_extensions_get_extension_configuration_segment(_jwt_token, _extension_id, _segment, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{	
	var _url = $"{TWITCH_ENDPOINT}helix/extensions/configurations";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {_jwt_token}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { extension_id: _extension_id, segment: _segment };
	
	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
}

function twitch_extensions_set_extension_configuration_segment(_jwt_token, _extension_id, _segment, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/extensions/configurations";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {_jwt_token}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { extension_id: _extension_id, segment: _segment };
	
	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "PUT", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
}

function twitch_extensions_set_extension_required_configuration(_jwt_token, _broadcaster_id, _extension_id, _extension_version, _required_configuration, _callback_success = undefined, _callback_failed = undefined) 
{
	var _url = $"{TWITCH_ENDPOINT}helix/extensions/required_configuration";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {_jwt_token}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };
	var _body = { extension_id: _extension_id, extension_version : _extension_version, required_configuration: _required_configuration };
	
	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "PUT", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
}

function twitch_extensions_send_extension_pubsub_message(_jwt_token, _target, _broadcaster_id, _message, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined) 
{
	var _url = $"{TWITCH_ENDPOINT}helix/extensions/pubsub";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {_jwt_token}";
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _body = { target: _target, broadcaster_id: _broadcaster_id, message: _message };
	_body = __twitch_struct_merge(_body, _optionals);

	_url = __twitch_url_from_params(_url, undefined, undefined);
	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
}

function twitch_extensions_get_extension_live_channels(_extension_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/extensions/live";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { extension_id: _extension_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
}

function twitch_extensions_get_extension_secrets(_jwt_token, _extension_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/extensions/jwt/secrets";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {_jwt_token}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { extension_id: _extension_id };

	_url = __twitch_url_from_params(_url, _parameters, undefined);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
}

function twitch_extensions_create_extension_secret(_jwt_token, _extension_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/extensions/jwt/secrets";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {_jwt_token}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { extension_id: _extension_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "POST", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request
}

function twitch_extensions_send_extension_chat_message(_jwt_token, _broadcaster_id, _text, _extension_id, _extension_version, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/extensions/chat";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {_jwt_token}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };
	var _body = { text: _text, extension_id: _extension_id, extension_version: _extension_version }

	_url = __twitch_url_from_params(_url, _parameters, undefined);
	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request
}

function twitch_extensions_get_extensions(_jwt_token, _extension_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/extensions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {_jwt_token}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { extension_id: _extension_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request
}

function twitch_extensions_get_released_extensions(_extension_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/extensions/released";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { extension_id: _extension_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request
}

function twitch_extensions_get_extension_bits_products(_optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/bits/extensions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_app_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request
}

function twitch_extensions_update_extension_bits_product(_sku, _cost, _display_name, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/bits/extensions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_app_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _body = { sku: _sku, cost: _cost, display_name: _display_name };
	_body = __twitch_struct_merge(_body, _optionals);
	
	var _request = __twitch_request(_url, "PUT", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request
}

// ## EVENTSUB #################################################

function twitch_eventsub_create_eventsub_subscription(_type, _version, _condition, _transport, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/eventsub/subscriptions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { 
		type: _type,
		version: _version,
		condition: _condition,
		transport: _transport
	}

	_body = __twitch_struct_merge(_body, _optionals);
	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_eventsub_delete_eventsub_subscription(_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/eventsub/subscriptions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { id: _id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_eventsub_get_eventsub_subscriptions(_optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/eventsub/subscriptions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	
	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_eventsub_live_connect(_callback)
{
	with (__twitch_get_singleton()) {
		twitch_eventsub_callback = _callback
	
		if (is_undefined(twitch_client_eventsub_socket)) {
			twitch_client_eventsub_socket = network_create_socket(network_socket_wss)
		}
		else {
		    show_debug_message("Failed to create new socket, socket already exists!");
		    return -1;
		}

		// make sure the socket was successfully created
		if (twitch_client_eventsub_socket == -1) {
		    network_destroy(twitch_client_eventsub_socket);
		    twitch_client_eventsub_socket = undefined;
		    show_debug_message("Failed to create WS socket");
		    return -1;
		}
		else {
		    show_debug_message("WS Socket created, attempting to connect...");
		}
	
		return network_connect_raw_async(twitch_client_eventsub_socket, "wss://eventsub.wss.twitch.tv/ws?keepalive_timeout_seconds=100", 443)
	}
}

function twitch_eventsub_live_disconnect()
{
	with (__twitch_get_singleton()) {
		if (!is_undefined(twitch_client_eventsub_socket)) {
			network_destroy(twitch_client_eventsub_socket)
			twitch_client_eventsub_socket= undefined
		}
	}
}

// ## GAMES ####################################################

function twitch_games_get_top_games(_optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/games/top";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_games_get_games(_id, _name, _igdb_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/games";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { id: _id, name: _name, igdb_id: _igdb_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## GOALS ####################################################

function twitch_goals_get_creator_goals(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/goals";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## GUEST ####################################################

function twitch_guest_star_get_channel_guest_star_settings(_broadcaster_id, _moderator_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/guest_star/channel_settings";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_guest_star_update_channel_guest_star_settings(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/guest_star/channel_settings";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = _optionals ?? {};
	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "PUT", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_guest_star_get_guest_star_session(_broadcaster_id, _moderator_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/guest_star/session";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_guest_star_create_guest_star_session(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/guest_star/session";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "POST", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_guest_star_end_guest_star_session(_broadcaster_id, _session_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/guest_star/session";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, session_id: _session_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_guest_star_get_guest_star_invites(_broadcaster_id, _moderator_id, _session_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/guest_star/invites";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id, session_id: _session_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_guest_star_send_guest_star_invite(_broadcaster_id, _moderator_id, _session_id, _guest_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/guest_star/invites";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id, session_id: _session_id, guest_id: _guest_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "POST", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_guest_star_delete_guest_star_invite(_broadcaster_id, _moderator_id, _session_id, _guest_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/guest_star/invites";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id, session_id: _session_id, guest_id:_guest_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_guest_star_assign_guest_star_slot(_broadcaster_id, _moderator_id, _session_id, _guest_id, _slot_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/guest_star/slot";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id, session_id: _session_id, guest_id: _guest_id, slot_id: _slot_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "POST", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_guest_star_update_guest_star_slot(_broadcaster_id, _moderator_id, _session_id, _source_slot_id, _destination_slot_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/guest_star/slot";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id, session_id: _session_id, source_slot_id: _source_slot_id, destination_slot_id: _destination_slot_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "PATCH", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_guest_star_delete_guest_star_slot(_broadcaster_id, _moderator_id, _session_id, _guest_id, _slot_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/guest_star/slot";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id, session_id: _session_id, guest_id: _guest_id, slot_id: _slot_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_guest_star_update_guest_star_slot_settings(_broadcaster_id, _moderator_id, _session_id, _guest_id, _slot_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/guest_star/slot_settings";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id, session_id: _session_id, guest_id: _guest_id, slot_id: _slot_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## HYPE TRAIN ###############################################

function twitch_hype_train_get_hype_train_events(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/hypetrain/events";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## MODERATION ###############################################

function twitch_moderation_check_automod_status(_broadcaster_id, _data, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/enforcements/status";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = _data;
	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_manage_held_automod_messages(_user_id, _msg_id, _action, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/automod/message";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { user_id, _user_id, msg_id: _msg_id, action: _action };

	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_get_automod_settings(_broadcaster_id, _moderator_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/automod/settings";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, _body, _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_update_automod_settings(_broadcaster_id, _moderator_id, _settings, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/automod/settings";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = _settings;

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "PUT", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_get_banned_users(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/banned";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_ban_user(_broadcaster_id, _moderator_id, _data, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/bans";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_data), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_unban_user(_broadcaster_id, _moderator_id, _user_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/bans";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id, user_id: _user_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_get_unban_requests(_broadcaster_id, _moderator_id, _status, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/unban_requests";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id, status: _status };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_resolve_unban_requests(_broadcaster_id, _moderator_id, _unban_request_id, _status, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/unban_requests";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id, unban_request_id: _unban_request_id, status: _status };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "PATCH", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_get_blocked_terms(_broadcaster_id, _moderator_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/blocked_terms";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_add_blocked_term(_broadcaster_id, _moderator_id, _text, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/blocked_terms";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { text: _text };
	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_remove_blocked_term(_broadcaster_id, _moderator_id, _id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/blocked_terms";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id, id: _id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_delete_chat_messages(_broadcaster_id, _moderator_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/chat";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id, id: _id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_get_moderated_channels(_user_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/channels";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { user_id: _user_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_get_moderators(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/moderators";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_add_channel_moderator(_broadcaster_id, _user_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/moderators";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, user_id: _user_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "POST", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_remove_channel_moderator(_broadcaster_id, _user_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/moderators";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, user_id: _user_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_get_vips(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channels/vips";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_add_channel_vip(_user_id, _broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channels/vips";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { user_id: _user_id, broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "POST", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_remove_channel_vip(_user_id, _broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channels/vips";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { user_id: _user_id, broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_update_shield_mode_status(_broadcaster_id, _moderator_id, _is_active, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/shield_mode";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { is_active: _is_active };
	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "PUT", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_get_shield_mode_status(_broadcaster_id, _moderator_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/shield_mode";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_moderation_warn_chat_user(_broadcaster_id, _moderator_id, _data, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/moderation/warnings";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = _data;
	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## POLLS ####################################################

function twitch_polls_get_polls(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/polls";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_polls_create_poll(_broadcaster_id, _title, _choices, _duration, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/polls";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { broadcaster_id: _broadcaster_id, title: _title, choices: _choices, duration: _duration };
	_body = __twitch_struct_merge(_body, _optionals);

	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_polls_end_poll(_broadcaster_id, _id, _status, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/polls";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { broadcaster_id: _broadcaster_id, id: _id, status: _status };

	var _request = __twitch_request(_url, "PATCH", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## PREDICTIONS ##############################################

function twitch_predictions_get_predictions(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/predictions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_predictions_create_prediction(_broadcaster_id, _title, _outcomes, _prediction_window, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/predictions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { broadcaster_id: _broadcaster_id, title: _title, outcomes: _outcomes, prediction_window: _prediction_window };

	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_predictions_end_prediction(_broadcaster_id, _id, _status, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/predictions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { broadcaster_id: _broadcaster_id, id: _id, status: _status };
	_body = __twitch_struct_merge(_body, _optionals);

	var _request = __twitch_request(_url, "PATCH", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## RAIDS ####################################################

function twitch_raids_start_a_raid(_from_broadcaster_id, _to_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/raids";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"

	var _parameters = { from_broadcaster_id: _from_broadcaster_id, to_broadcaster_id: _to_broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "POST", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_raids_cancel_a_raid(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/raids";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## SCHEDULE #################################################

function twitch_schedule_get_channel_stream_schedule(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/schedule";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_schedule_get_channel_icalendar(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/schedule/icalendar";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_schedule_update_channel_stream_schedule(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/schedule/settings";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "PATCH", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_schedule_create_channel_stream_schedule_segment(_broadcaster_id, _start_time, _timezone, _duration, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/schedule/segment";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { start_time: _start_time, timezone: _timezone, duration: _duration };
	var _parameters = { broadcaster_id: _broadcaster_id };

	_body = __twitch_struct_merge(_body, _optionals);
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_schedule_update_channel_stream_schedule_segment(_broadcaster_id, _id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/schedule/segment";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = _optionals ?? {};
	var _parameters = { broadcaster_id: _broadcaster_id, id: _id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "PATCH", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_schedule_delete_channel_stream_schedule_segment(_broadcaster_id, _id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/schedule/segment";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, id: _id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## SEARCH ###################################################

function twitch_search_categories(_query, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/search/categories";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { query: _query };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_search_channels(_query, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/search/channels";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { query: _query };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## STREAMS ##################################################

function twitch_streams_get_stream_key(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/streams/key";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_streams_get_streams(_optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/streams";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_streams_get_followed_streams(_user_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/streams/followed";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { user_id: _user_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_streams_create_stream_marker(_user_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/streams/markers";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { user_id: _user_id };
	_body = __twitch_struct_merge(_body, _optionals);

	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_streams_get_stream_markers(_user_id, _video_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/streams/markers";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { user_id: _user_id, video_id: _video_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## SUBSCRIPTIONS ############################################

function twitch_subscriptions_get_broadcaster_subscriptions(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/subscriptions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_subscriptions_check_user_subscription(_broadcaster_id, _user_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/subscriptions/user";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id, user_id: _user_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## TEAMS ####################################################

function twitch_teams_get_channel_teams(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/teams/channel";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_teams_get_teams(_name, _id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/teams";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { name: _name, id: _id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## USERS ####################################################

function twitch_users_get_user()
{
	with (__twitch_get_singleton()) {
		return user_struct;
	}
};

function twitch_users_get_users(_optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/users";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, "twitch_users_get_users");

	return _request;
};

function twitch_users_update_user(_optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/users";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _deferred_callback = method({ callback_success: _callback_success }, function(_data) {
		with (__twitch_get_singleton()) {
			var _user = _data.data[0];
			user_struct = _user;
		}
		
		if (is_callable(callback_success)) {
			callback_success(_data);
		}
	});

	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "PUT", _header_map, "", _deferred_callback, _callback_failed, "twitch_users_update_user");

	return _request;
};

function twitch_users_get_user_block_list(_broadcaster_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/users/blocks";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_users_block_user(_target_user_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/users/blocks";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { target_user_id: _target_user_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "PUT", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_users_unblock_user(_target_user_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/users/blocks";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { target_user_id: _target_user_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_users_get_user_extensions(_callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/users/extensions/list";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_users_get_user_active_extensions(_optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/users/extensions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_users_update_user_extensions(_data, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/users/extensions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = json_stringify(_data);
	var _request = __twitch_request(_url, "PUT", _header_map, _body, _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## VIDEOS ###################################################

function twitch_videos_get_videos(_id, _user_id, _game_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/videos";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { id: _id, user_id: _user_id, game_id: _game_id };

	_url = __twitch_url_from_params(_url, _parameters, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_videos_delete_videos(_id, _optionals = undefined, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/videos";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { id: _id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "DELETE", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## WHISPERS #################################################

function twitch_whispers_send_whisper(_from_user_id, _to_user_id, _message, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/whispers";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { message: _message };
	var _parameters = { from_user_id: _from_user_id, to_user_id: _to_user_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "POST", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};
