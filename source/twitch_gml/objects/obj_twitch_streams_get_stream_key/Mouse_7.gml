
var _user = twitch_users_get_user();
twitch_streams_get_stream_key(_user.id, __twitch_debug_callback_success, __twitch_debug_callback_failure);
