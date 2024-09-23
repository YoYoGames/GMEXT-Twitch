
var _user = twitch_users_get_user();
twitch_streams_create_stream_marker(_user.id, {}, __twitch_debug_callback_success, __twitch_debug_callback_failure);
