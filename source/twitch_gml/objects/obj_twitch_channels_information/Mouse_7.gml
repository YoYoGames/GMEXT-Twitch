
var _user = twitch_users_get_user();
twitch_channels_get_channel_information(_user.id, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
