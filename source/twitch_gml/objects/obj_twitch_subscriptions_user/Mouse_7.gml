
var _user = twitch_users_get_user();
twitch_subscriptions_check_user_subscription(_user.id, _user.id, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
