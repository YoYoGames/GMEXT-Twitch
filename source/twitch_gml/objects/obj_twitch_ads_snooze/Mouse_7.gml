
var _user = twitch_users_get_user();
twitch_ads_snooze_next_ad(_user.id, __twitch_debug_callback_success, __twitch_debug_callback_failure);
