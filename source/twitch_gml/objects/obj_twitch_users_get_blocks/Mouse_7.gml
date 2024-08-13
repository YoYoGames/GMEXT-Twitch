
var _user = twitch_users_get_user();
twitch_users_get_user_block_list(_user.id, {}, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
