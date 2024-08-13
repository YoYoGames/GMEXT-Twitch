
event_inherited();

text = "Sign In"

twitch_auth_from_cache(
	function()
	{
		room_goto(rm_twitch_menu_1)
	},
	function()
	{
		
	}
)
