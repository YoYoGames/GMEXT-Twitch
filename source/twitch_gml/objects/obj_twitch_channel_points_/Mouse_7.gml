
var _user = twitch_users_get_user();
twitch_channel_points_create_custom_rewards(_user.id, "Title", 10, undefined, __twitch_debug_callback_success, __twitch_debug_callback_failure);
//twitch_channel_points_delete_custom_reward(_user.id, __twitch_debug_callback_success, __twitch_debug_callback_failure);
//twitch_channel_points_get_custom_reward(_user.id, undefined, __twitch_debug_callback_success, __twitch_debug_callback_failure);
//twitch_channel_points_get_custom_reward_redemption(_user.id, __twitch_debug_callback_success, __twitch_debug_callback_failure);
//twitch_channel_points_update_custom_reward(_user.id, __twitch_debug_callback_success, __twitch_debug_callback_failure);
//twitch_channel_points_update_redemption_status(_user.id, __twitch_debug_callback_success, __twitch_debug_callback_failure);