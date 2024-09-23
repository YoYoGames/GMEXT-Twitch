
var _user = twitch_users_get_user();
twitch_users_get_user_block_list(_user.id, {}, __twitch_debug_callback_success, __twitch_debug_callback_failure);
