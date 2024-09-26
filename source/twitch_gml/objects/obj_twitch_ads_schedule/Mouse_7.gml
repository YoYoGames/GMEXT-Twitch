
var _user = twitch_users_get_user();
twitch_ads_get_ad_schedule(_user.id,__twitch_debug_callback_success, __twitch_debug_callback_failure)
