
var _user = twitch_users_get_user();
twitch_schedule_get_channel_icalendar(_user.id, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
