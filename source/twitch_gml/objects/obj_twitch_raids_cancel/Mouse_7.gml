
var _user = twitch_users_get_user();
twitch_raids_cancel_a_raid(_user.id, __twitch_debug_callback_success, __twitch_debug_callback_failure);
