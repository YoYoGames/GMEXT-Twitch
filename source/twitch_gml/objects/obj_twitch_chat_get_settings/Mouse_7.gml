
var _user = twitch_users_get_user();
twitch_chat_get_chat_settings(_user.id, {}, __twitch_debug_callback_success, __twitch_debug_callback_failure);
