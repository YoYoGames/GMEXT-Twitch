
var _user = twitch_users_get_user();
twitch_tags_get_stream_tags(_user.id, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
