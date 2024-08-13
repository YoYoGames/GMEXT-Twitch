
var _user = twitch_users_get_user();
twitch_guest_star_update_channel_guest_star_settings(_user.id, {}, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);

