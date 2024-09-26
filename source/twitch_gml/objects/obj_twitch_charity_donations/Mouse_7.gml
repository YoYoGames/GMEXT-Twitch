
var _user = twitch_users_get_user();
twitch_charity_get_charity_campaign_donations(_user.id, {}, __twitch_debug_callback_success, __twitch_debug_callback_failure);
