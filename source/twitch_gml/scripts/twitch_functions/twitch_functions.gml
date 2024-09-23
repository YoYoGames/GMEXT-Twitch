
function twitch_functions() {
	throw $"{_GMFUNCTION_} :: This script file cannot be called.";
};

#region Twitch Global Variables

#endregion

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

/// @param {Function} _callback_success
/// @param {Function} _callback_failed
/// @ignore
function __twitch_auth_defer_callback(_callback_success, _callback_failed) {

	return method({ callback_success: _callback_success, callback_failed: _callback_failed }, function(_data) {

		var _deferred_context = { callback_success, data: _data };

		// Store the session data in disk
		__twitch_auth_session_save(_data);
			
		// The context of the callback method includes the deferred values from the authentication
		// call this allows us to silently handle chained actions to store important information
		twitch_users_get_users(undefined, method(_deferred_context, function(_data) {
			var _manager = __twitch_get_singleton();
				
			_manager.user_struct = _data.data[0];
				
			/// feather ignore once GM1011
			/// feather ignore once GM1013

			_manager.refresher = call_later(600, time_source_units_seconds, twitch_auth_refresh_token, true);
				
			if (is_callable(callback_success)) {
				/// feather ignore once GM1013
				callback_success(data);
			}
		}), 
		callback_failed);
	});
};

/// @param {Struct} _session_data
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
	
	var _scopes_str = string_join_ext(" ", _scopes);

	var _parameters = { client_id: twitch_get_client_id(), force_verify: _force_verify, response_type: "code", redirect_uri: _redirect_uri, scope: _scopes_str, /* state */ };

	_url = __twitch_url_from_params(_url, _parameters);
	show_debug_message(_url);
	
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
			
			if (is_callable(callback_success)) {
				callback_success(_data);
			}
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

	var _deferred_callback = method({ callback_success: _callback_success }, function(_data) {
	
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

function twitch_analytics_get_extension_analytics(_optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/analytics/extensions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_analytics_get_game_analytics(_optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_bits_get_bits_leaderboard(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/bits/cheermotes";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_bits_get_cheermotes(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/bits/cheermotes";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	var _parameters = { broadcaster_id: _broadcaster_id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_bits_get_extension_transactions(_extension_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_channels_modify_channel_information(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_channels_get_followed_channels(_user_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_channels_get_channel_followers(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channels/followers";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = _optionals;

	var _parameters = { broadcaster_id: _broadcaster_id };
	
	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## CHANNEL POINTS ###########################################

function twitch_channel_points_create_custom_rewards(_broadcaster_id, _title, _cost, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_channel_points_get_custom_reward(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_channel_points_get_custom_reward_redemption(_broadcaster_id, _reward_id, _status, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channel_points/custom_rewards/redemptions";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = _optionals;

	var _parameters = { broadcaster_id: _broadcaster_id, reward_id: _reward_id, status: _status };
	_url = __twitch_url_from_params(_url, _parameters);

	var _request = __twitch_request(_url, "PATCH", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_channel_points_update_custom_reward(_broadcaster_id, _id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/channel_points/custom_rewards";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = _optionals;

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

function twitch_charity_get_charity_campaign_donations(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_charity_get_chatters(_broadcaster_id, _moderator_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_chat_get_chat_settings(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_chat_get_user_emotes(_user_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_chat_update_chat_settings(_broadcaster_id, _moderator_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/chat/settings";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _parameters = { broadcaster_id: _broadcaster_id, moderator_id: _moderator_id };

	_url = __twitch_url_from_params(_url, _parameters);
	var _request = __twitch_request(_url, "PATCH", _header_map, json_stringify(_optionals), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_chat_send_chat_announcement(_broadcaster_id, _moderator_id, _message, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_chat_send_chat_message(_broadcaster_id, _sender_id, _message, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_clips_create_clip(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_clips_get_clips(_broadcaster_id, _game_id, _id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_conduits_get_conduit_shards(_conduit_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_conduits_update_conduit_shards(_conduit_id, _shards, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/eventsub/conduits/shards";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_app_access_token()}";
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = { conduit_id: _conduit_id, shards: _shards };

	var _request = __twitch_request(_url, "PATCH", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## CCLS #####################################################

function twitch_ccls_get_content_classification_labels(_optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_entitlements_get_drops_entitlements(_optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/entitlements/drops";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_entitlements_update_drops_entitlements(_optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/entitlements/drops";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = _optionals;

	var _request = __twitch_request(_url, "PATCH", _header_map, json_stringify(_body), _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

// ## EXTENSIONS ###############################################

//TODO: Requires JSON Web Token..........;
//function twitch_extensions_get_extension_configuration_segment(_callback_success = undefined, _callback_failed = undefined){}
//function twitch_extensions_set_extension_configuration_segment(_callback_success = undefined, _callback_failed = undefined){}
//function twitch_extensions_set_extension_required_configuration(_callback_success = undefined, _callback_failed = undefined){}
//function twitch_extensions_send_extension_pubsub_message(_callback_success = undefined, _callback_failed = undefined){}
//function twitch_extensions_get_extension_live_channels(_callback_success = undefined, _callback_failed = undefined){}
//function twitch_extensions_get_extension_secrets(_callback_success = undefined, _callback_failed = undefined){}
//function twitch_extensions_create_extension_secret(_callback_success = undefined, _callback_failed = undefined){}
//function twitch_extensions_send_extension_chat_message(_callback_success = undefined, _callback_failed = undefined){}
//function twitch_extensions_get_extensions(_callback_success = undefined, _callback_failed = undefined){}
//function twitch_extensions_get_released_extensions(_callback_success = undefined, _callback_failed = undefined){}
//function twitch_extensions_get_extension_bits_products(_callback_success = undefined, _callback_failed = undefined){}
//function twitch_extensions_update_extension_bits_product(_callback_success = undefined, _callback_failed = undefined){}

// ## EVENTSUB #################################################

function twitch_eventsub_create_eventsub_subscription(_type, _version, _condition, _transport, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_eventsub_get_eventsub_subscriptions(_optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_games_get_top_games(_optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_guest_star_update_channel_guest_star_settings(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/guest_star/channel_settings";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = _optionals;
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

function twitch_guest_create_guest_star_session(_broadcaster_id, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_guest_end_guest_star_session(_broadcaster_id, _session_id, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_guest_get_guest_star_invites(_broadcaster_id, _moderator_id, _session_id, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_guest_send_guest_star_invite(_broadcaster_id, _moderator_id, _session_id, _guest_id, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_guest_delete_guest_star_invite(_broadcaster_id, _moderator_id, _session_id, _guest_id, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_guest_assign_guest_star_slot(_broadcaster_id, _moderator_id, _session_id, _guest_id, _slot_id, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_guest_update_guest_star_slot(_broadcaster_id, _moderator_id, _session_id, _source_slot_id, _destination_slot_id, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_guest_delete_guest_star_slot(_broadcaster_id, _moderator_id, _session_id, _guest_id, _slot_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_guest_update_guest_star_slot_settings(_broadcaster_id, _moderator_id, _session_id, _guest_id, _slot_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_hype_train_get_hype_train_events(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_moderation_get_banned_users(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_moderation_get_unban_requests(_broadcaster_id, _moderator_id, _status, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_moderation_resolve_unban_requests(_broadcaster_id, _moderator_id, _unban_request_id, _status, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_moderation_get_blocked_terms(_broadcaster_id, _moderator_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_moderation_delete_chat_messages(_broadcaster_id, _moderator_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_moderation_get_moderated_channels(_user_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_moderation_get_moderators(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_moderation_get_vips(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_polls_get_polls(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_polls_create_poll(_broadcaster_id, _title, _choices, _duration, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_predictions_get_predictions(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_predictions_end_prediction(_broadcaster_id, _id, _status, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_schedule_get_channel_stream_schedule(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_schedule_create_channel_stream_schedule_segment(_broadcaster_id, _start_time, _timezone, _duration, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_schedule_update_channel_stream_schedule_segment(_broadcaster_id, _id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/schedule/segment";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();
	_header_map[? "Content-Type"] = "application/json";

	var _body = _optionals;
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

function twitch_search_categories(_query, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_search_channels(_query, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_streams_get_streams(_optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/streams";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, _GMFUNCTION_);

	return _request;
};

function twitch_streams_get_followed_streams(_user_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_streams_create_stream_marker(_user_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_streams_get_stream_markers(_user_id, _video_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_subscriptions_get_broadcaster_subscriptions(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_users_get_users(_optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	var _url = $"{TWITCH_ENDPOINT}helix/users";

	var _header_map = ds_map_create();
	_header_map[? "Authorization"] = $"Bearer {twitch_get_access_token()}"
	_header_map[? "Client-Id"] = twitch_get_client_id();

	_url = __twitch_url_from_params(_url, undefined, _optionals);
	var _request = __twitch_request(_url, "GET", _header_map, "", _callback_success, _callback_failed, "twitch_users_get_users");

	return _request;
};

function twitch_users_update_user(_optionals, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_users_get_user_block_list(_broadcaster_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_users_block_user(_target_user_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_users_get_user_active_extensions(_optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_videos_get_videos(_id, _user_id, _game_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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

function twitch_videos_delete_videos(_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
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


