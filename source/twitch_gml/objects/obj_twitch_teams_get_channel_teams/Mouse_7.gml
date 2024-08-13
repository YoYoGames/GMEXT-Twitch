
var _user = twitch_users_get_user();
twitch_teams_get_channel_teams(_user.id, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
