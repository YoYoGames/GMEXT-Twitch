
var _user = twitch_users_get_user();
twitch_streams_get_stream_markers(_user.id,"video_id...", {}, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
