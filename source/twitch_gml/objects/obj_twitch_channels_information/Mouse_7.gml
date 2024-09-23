
var _user = twitch_users_get_user();
twitch_channels_get_channel_information(_user.id, __twitch_debug_callback_success, __twitch_debug_callback_failure);
