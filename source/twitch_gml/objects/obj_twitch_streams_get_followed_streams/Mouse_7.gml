
var _user = twitch_users_get_user();
twitch_streams_get_followed_streams(_user.id, {}, __twitch_debug_callback_success, __twitch_debug_callback_failure);
