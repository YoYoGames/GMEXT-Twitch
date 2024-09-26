

var _user = twitch_users_get_user();
var _condition = {broadcaster_user_id: _user.id,moderator_user_id: _user.id}
var _transport = {method: "websocket", session_id: obj_twitch_eventsub.session_id}
twitch_eventsub_create_eventsub_subscription("channel.follow",2,_condition,_transport, {},
	__twitch_debug_callback_success,
	__twitch_debug_callback_failure)

//twitch_eventsub_delete_eventsub_subscription(, __twitch_debug_callback_success, __twitch_debug_callback_failure);


