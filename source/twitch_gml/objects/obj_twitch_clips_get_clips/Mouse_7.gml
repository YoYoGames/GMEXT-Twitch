
var _user = twitch_users_get_user();
twitch_clips_get_clips(_user.id,"","", {}, __twitch_debug_callback_success, __twitch_debug_callback_failure);



