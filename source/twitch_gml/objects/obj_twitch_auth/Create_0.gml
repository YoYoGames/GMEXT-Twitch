
event_inherited();

text = "Sign In"

twitch_auth_from_cache(
	function()
	{
		room_goto(rm_twitch_menu_1)
	},
	function()
	{
		show_message_async("[Twitch] Sign In From Cache Failed")
		show_debug_message("[Twitch] Sign In From Cache Failed")
	}
)
