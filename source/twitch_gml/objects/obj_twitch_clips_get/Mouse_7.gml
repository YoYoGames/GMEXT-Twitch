
var _user = twitch_users_get_user();
twitch_clips_create_clip(_user.id, {}, __twitch_debug_callback_success, __twitch_debug_callback_failure);
