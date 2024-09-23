
var _user = twitch_users_get_user();
twitch_raids_start_a_raid(_user.id,"other_raid", __twitch_debug_callback_success, __twitch_debug_callback_failure);
