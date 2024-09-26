
session_id = ""

subscribe_to_events = function(_session_id) {

	// Subscribe to the events you have 10 seconds to your first subscription.
	
}

eventsub_callback = function(_buffer) {
	var _eventsub_str = buffer_read(_buffer, buffer_string);
	var _data = json_parse(_eventsub_str);
		
	show_debug_message("twitch_eventsub_live_connect CALLBACK")
	show_debug_message(_data)
		
	switch(_data.metadata.message_type)
	{
		case "session_welcome":
			session_id = _data.payload.session.id
			keepalive_timeout_seconds = _data.payload.session.keepalive_timeout_seconds
			subscribe_to_events(session_id);
			alarm[0] = keepalive_timeout_seconds*60;
		break
				
		case "session_keepalive":
			alarm[0] = keepalive_timeout_seconds*60;
		break
				
		case "notification":
				
			switch(_data.metadata.subscription_type)
			{
				case "channel.chat.message":
					show_message_async(_data.payload.event.message.text)
				break
					
				case "channel.follow":
					show_message_async("Someone followed you!")
				break
					
				case "channel.chat.clear":
					show_message_async("Chat was cleared!")
				break
			}
			
		break
	}
}

twitch_eventsub_live_connect(eventsub_callback);

