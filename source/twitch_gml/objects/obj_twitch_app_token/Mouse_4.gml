
twitch_auth_app_token(function(_data){
	show_debug_message(_data)
	
	show_message_async("App Access Success")
	show_debug_message(_data)
},function(_err){
	show_debug_message(_err)
	show_message_async("App Access Failed")
})
