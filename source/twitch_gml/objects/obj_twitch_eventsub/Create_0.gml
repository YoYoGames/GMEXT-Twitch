
session_id = ""

twitch_eventsub_live_connect(function(_buffer)
	{
		var _eventsub_str = buffer_read(_buffer, buffer_string);
		var _data = json_parse(_eventsub_str);
		
		show_debug_message("twitch_eventsub_live_connect CALLBACK")
		show_debug_message(_data)
		
		switch(_data.metadata.message_type)
		{
			case "session_welcome":
				session_id = _data.payload.session.id
			break
				
			case "session_keepalive":
			break
				
			case "notification":
				
				switch(_data.metadata.subscription_type)
				{
					case "channel.chat.message":
						show_message_async(_data.payload.event.message.text)
					break
					
					case "channel.follow":
						show_message_async("")
					break
					
					case "channel.chat.clear":
						show_message_async("Chat Cleared")
					break
				}
			
			break
		}
	})
