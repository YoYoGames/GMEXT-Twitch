
var _user = twitch_users_get_user();
twitch_channels_get_followed_channels(_user.id, {}, __twitch_debug_callback_success, __twitch_debug_callback_failure);
