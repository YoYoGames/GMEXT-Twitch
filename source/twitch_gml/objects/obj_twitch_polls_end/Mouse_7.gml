
var _poll_id = ""
var _user = twitch_users_get_user();
twitch_polls_end_poll(_user.id, _poll_id, "TERMINATED", ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED)
