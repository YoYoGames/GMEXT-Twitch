
var _user = twitch_users_get_user();
twitch_clips_get_clips(_user.id,"","", {}, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);



