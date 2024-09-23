
var _user = twitch_users_get_user();
twitch_ads_start_commercial(_user.id,180, __twitch_debug_callback_success, __twitch_debug_callback_failure);

