
var _user = twitch_users_get_user();
twitch_predictions_get_predictions(_user.id, {}, __twitch_debug_callback_success, __twitch_debug_callback_failure);
