
var _user = twitch_users_get_user();
twitch_goals_get_creator_goals(_user.id, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
