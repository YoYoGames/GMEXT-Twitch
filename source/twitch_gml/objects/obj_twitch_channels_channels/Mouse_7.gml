
var _user = twitch_users_get_user();
twitch_channels_get_followed_channels(_user.id, {}, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
