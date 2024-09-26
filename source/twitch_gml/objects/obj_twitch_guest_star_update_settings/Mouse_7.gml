
var _user = twitch_users_get_user();
twitch_guest_star_update_channel_guest_star_settings(_user.id, {}, __twitch_debug_callback_success, __twitch_debug_callback_failure);

