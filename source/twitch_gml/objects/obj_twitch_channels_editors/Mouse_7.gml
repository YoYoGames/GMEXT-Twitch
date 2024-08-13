
var _user = twitch_users_get_user();
twitch_channels_get_channel_editors(_user.id, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);

