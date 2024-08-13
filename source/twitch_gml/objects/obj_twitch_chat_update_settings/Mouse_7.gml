
var _user = twitch_users_get_user();
twitch_chat_update_chat_settings(_user.id, _user.id, undefined, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
