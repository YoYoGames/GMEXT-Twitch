
var _user = twitch_users_get_user();
twitch_chat_get_channel_emotes(_user.id, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
