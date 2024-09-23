
var _user = twitch_users_get_user();
twitch_polls_get_polls(_user.id, {}, __twitch_debug_callback_success, __twitch_debug_callback_failure)
