
var _user = twitch_users_get_user();
twitch_streams_create_stream_marker(_user.id, {}, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
