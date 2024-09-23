
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

