
var _user = twitch_users_get_user();
twitch_subscriptions_get_broadcaster_subscriptions(_user.id, {}, __twitch_debug_callback_success, __twitch_debug_callback_failure);
