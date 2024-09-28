
event_inherited();

text = "Live Chat"

twitch_chat_live_connect("jzavala_yyg", "ChatBot", function(_buffer) {
	
	var _messages = buffer_read(_buffer, buffer_string);
	var _message_array = string_split(_messages, "\r\n");
	
	if (array_length(_message_array) == 0) return;
	
	var _parsed_message = twitch_parse_message(_message_array[0]);
	if (is_undefined(_parsed_message)) return;
	
	show_debug_message("Chat Data:")
	show_debug_message(_parsed_message);
		
	var _command = "";
	switch(_parsed_message.command.command)
	{
		case "001"://Welcome
			show_message_async("Connected!")
			break;
			
		case "NOTICE":
			_command = string_replace(_parsed_message.parameters,"\n","")
			_command = string_replace(_command,"\r","")
			_command = string_lower(_command)
			if (_command == "improperly formatted auth")
			{
				show_message_async("Improperly formatted auth!")
				twitch_chat_live_disconnect()
			}
			break;
			
		case "PING":
			if (_parsed_message.command.command == "PING") {
				twitch_chat_live_send_raw($"PONG {_parsed_message.parameters}");
			}
			break;
						
		case "PRIVMSG":
			_command = string_replace(_parsed_message.parameters,"\n","")
			_command = string_replace(_command,"\r","")
			_command = string_lower(_command)
			show_debug_message("Message: " + _command)
			
			switch (_command) {
				case "left": obj_twitch_chat_live_obj.x -= 100; break;
				case "right": obj_twitch_chat_live_obj.x += 100; break;
				case "up": obj_twitch_chat_live_obj.x -= 100; break;
				case "down": obj_twitch_chat_live_obj.x -= 100; break;
				default: twitch_chat_live_send("Invalid Command: " + _command); break;
			}
			break;
	}
})
