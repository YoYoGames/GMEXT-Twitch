
var _user = twitch_users_get_user();
twitch_hype_train_get_hype_train_events(_user.id, {}, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);

