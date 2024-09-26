
var _poll_id = ""
var _user = twitch_users_get_user();
twitch_polls_end_poll(_user.id, _poll_id, "TERMINATED", __twitch_debug_callback_success, __twitch_debug_callback_failure)
