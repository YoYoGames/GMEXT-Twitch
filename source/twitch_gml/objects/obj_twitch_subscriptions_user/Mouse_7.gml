
var _user = twitch_users_get_user();
twitch_subscriptions_check_user_subscription(_user.id, _user.id, __twitch_debug_callback_success, __twitch_debug_callback_failure);
