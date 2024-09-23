
//TODO: ERROR.......
//https://blog.twitch.tv/en/2023/06/20/introducing-content-classification-labels/
var _user = twitch_users_get_user();
twitch_channels_modify_channel_information(_user.id,
	{
		game_id: "SomeGameID",
		title: "Title...",
		//content_classification_labels:
		//[
	    //   {id: "Gambling", is_enabled: true},
	    //   {id: "DrugsIntoxication", is_enabled: false}
		//]
	}, __twitch_debug_callback_success,__twitch_debug_callback_failure)

