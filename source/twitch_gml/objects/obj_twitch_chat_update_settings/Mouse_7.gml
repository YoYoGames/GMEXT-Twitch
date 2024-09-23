
var _user = twitch_users_get_user();
twitch_chat_update_chat_settings(_user.id, _user.id, undefined, __twitch_debug_callback_success, __twitch_debug_callback_failure);
