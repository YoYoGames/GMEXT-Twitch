
var _user = twitch_users_get_user();
twitch_subscriptions_get_broadcaster_subscriptions(_user.id, {}, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
