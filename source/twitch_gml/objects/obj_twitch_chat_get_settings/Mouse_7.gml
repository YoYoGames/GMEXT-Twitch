
var _user = twitch_users_get_user();
twitch_chat_get_chat_settings(_user.id, {}, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
