
var _user = twitch_users_get_user();
twitch_goals_get_creator_goals(_user.id, __twitch_debug_callback_success, __twitch_debug_callback_failure);
