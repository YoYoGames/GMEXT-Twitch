
// Make sure we only have one instance of this object
if (instance_number(object_index) > 1) {
	if (id != instance_find(object_index, 0)) {
		instance_destroy();
		return;
	}
}

if (os_type == os_android || os_type == os_ios) {
	if (!extension_exists("WebView")) {
		show_debug_message("## ERROR ###################################################################");
		show_debug_message("# On Android and iOS platforms the Twitch extension requires the use of"); 
		show_debug_message("# the GMEXT-WebView extension, available from the marketplace.");
		show_debug_message("############################################################################");
		throw "";
		return;
	}
}

server = undefined
requests = ds_map_create();
refresher = undefined;

// ## AUTH CALLBACKS ###########################################

twitch_auth_callback_success = undefined
twitch_auth_callback_failed = undefined

// ## SOCKETS ##################################################

twitch_client_auth_socket = undefined
twitch_client_chat_socket = undefined
twitch_client_eventsub_socket = undefined

// ## CALLBACKS ################################################

twitch_eventsub_callback = undefined
twitch_chat_callback = undefined

// ## TOKENS ###################################################

twitch_app_access_token = ""
twitch_oauth_token = ""
twitch_access_token = ""
twitch_refresh_token = ""

// ## IRC ######################################################

twitch_irc_channel = ""
twitch_irc_name = ""
twitch_irc_oauth = extension_get_option_value("Twitch", "twitchChatOAuth");

user_struct = {
	login : "", 
	display_name : "", 
	broadcaster_type : "", 
	profile_image_url : "", 
	offline_image_url : "", 
	view_count : 0, 
	email : "", 
	type : "", 
	created_at : "", 
	id : "", 
	description : "" 
}

function twitch_http_success(_request, _data)
{	
	var _deferred_context = { trigger_alarm: false, callback_success: _request.callback_success, data: _data };
	switch(_request.type)
	{
		// If we are handling one of the following request types:
		// * twitch_auth_exchange_code
		// * twitch_auth_from_cache
		// * twitch_auth_refresh_token
		// Just defer the callback to after the 'twitch_users_get_users()' call
		
		case "twitch_auth_exchange_code":
			// If this is a 'twitch_auth_exchange_code' event we want it to trigger the alarm
			_deferred_context.trigger_alarm = true;
		case "twitch_auth_from_cache":
		case "twitch_auth_refresh_token":
		
			// Store the session data in disk
			var _map = json_decode(json_stringify(_data));
			ds_map_secure_save(_map, TWITCH_SESSION_FILE)
			ds_map_destroy(_map)
			
			// Cache the session tokens
			twitch_access_token = _data.access_token
			twitch_refresh_token = _data.refresh_token
			
			// The context of the callback method includes the deferred values from the authentication
			// call this allows us to silently handle chained actions to store important information
			twitch_users_get_users(undefined, method(_deferred_context, function(_data) {
				var _manager = __twitch_get_singleton();
				
				_manager.user_struct = _data.data[0];
				
				/// feather ignore once GM1011
				/// feather ignore once GM1013
				if (trigger_alarm) {
					_manager.refresher = call_later(600, time_source_units_seconds, twitch_auth_refresh_token, true);
				}
					
				if (is_callable(callback_success)) {
					/// feather ignore once GM1013
					callback_success(data);
				}
			}), 
			_request.callback_failed);
			
			// We are using a chained action don't trigger the callback just yet it will be deferred
			return false;
		
		case "twitch_auth_app_token":
			twitch_app_access_token = _data.access_token
			return true;
		
		case "twitch_users_update_user":
			var _user = _data.data[0];
			user_struct = _user;
			return true;
			
		default:
			return true;
	}
}
