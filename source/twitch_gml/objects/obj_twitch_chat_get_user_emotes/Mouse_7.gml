
var _user = twitch_users_get_user();
twitch_chat_get_user_emotes(_user.id, {}, __twitch_debug_callback_success, __twitch_debug_callback_failure);
