
var _user = twitch_users_get_user();
twitch_ads_snooze_next_ad(_user.id, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
