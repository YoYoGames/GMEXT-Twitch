
var _user = twitch_users_get_user();
twitch_streams_get_followed_streams(_user.id, {}, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
