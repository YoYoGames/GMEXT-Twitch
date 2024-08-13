
var _user = twitch_users_get_user();
twitch_channel_points_create_custom_rewards(_user.id, "Title", 10, undefined, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
//twitch_channel_points_delete_custom_reward(_user.id, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
//twitch_channel_points_get_custom_reward(_user.id, undefined, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
//twitch_channel_points_get_custom_reward_redemption(_user.id, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
//twitch_channel_points_update_custom_reward(_user.id, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
//twitch_channel_points_update_redemption_status(_user.id, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);