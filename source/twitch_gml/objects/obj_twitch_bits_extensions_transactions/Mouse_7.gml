
var _user = twitch_users_get_user();
twitch_bits_get_extension_transactions(_user.id, {}, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);

