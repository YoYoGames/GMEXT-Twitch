
var _user = twitch_users_get_user();
twitch_hype_train_get_hype_train_events(_user.id, {}, __twitch_debug_callback_success, __twitch_debug_callback_failure);

