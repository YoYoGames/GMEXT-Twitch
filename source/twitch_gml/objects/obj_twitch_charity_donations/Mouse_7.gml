
var _user = twitch_users_get_user();
twitch_charity_get_charity_campaign_donations(_user.id, {}, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
