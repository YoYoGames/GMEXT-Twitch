
var _user = twitch_users_get_user();
twitch_chat_update_user_chat_color(_user.id,choose("blue","blue_violet","cadet_blue","chocolate","coral","dodger_blue","firebrick","golden_rod","green","hot_pink","orange_red","red","sea_green","spring_green","yellow_green"), __twitch_debug_callback_success, __twitch_debug_callback_failure);

