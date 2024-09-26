
var _user = twitch_users_get_user();
twitch_schedule_get_channel_icalendar(_user.id, __twitch_debug_callback_success, __twitch_debug_callback_failure);
