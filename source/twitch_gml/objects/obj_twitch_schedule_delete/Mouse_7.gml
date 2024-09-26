
var _user = twitch_users_get_user();
twitch_schedule_delete_channel_stream_schedule_segment(_user.id,, __twitch_debug_callback_success, __twitch_debug_callback_failure);
