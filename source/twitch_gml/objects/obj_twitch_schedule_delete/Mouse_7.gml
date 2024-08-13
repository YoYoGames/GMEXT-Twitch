
var _user = twitch_users_get_user();
twitch_schedule_delete_channel_stream_schedule_segment(_user.id,, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
