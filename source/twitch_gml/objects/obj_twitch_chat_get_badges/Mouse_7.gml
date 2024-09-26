
var _user = twitch_users_get_user();
twitch_chat_get_channel_chat_badges(_user.id, __twitch_debug_callback_success, __twitch_debug_callback_failure);
