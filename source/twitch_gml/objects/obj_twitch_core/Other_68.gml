
if (TWITCH_DEBUG) {
	var _encoded_async_load = json_encode(async_load);
	show_debug_message("WS: " + _encoded_async_load)
}

switch(async_load[? "type"])
{
	case network_type_connect:
	
		show_debug_message("network_type_connect");
	
		if (is_undefined(server))
			return;	
		
		if (async_load[? "id"] == server) {
			twitch_client_auth_socket ??= async_load[? "socket"];
		}
		break;

	case network_type_data:
	
		show_debug_message("network_type_data")
		
		if (async_load[? "id"] == twitch_client_auth_socket)
		{		
			var _data = buffer_read(async_load[? "buffer"], buffer_string);

			var _needle = "?code=";
			var _start = string_pos(_needle,_data) + string_length(_needle);
			var _end = string_pos_ext("&", _data, _start);
			
			var _count = _end == -1 ? string_length(_data) : _end - _start;
			
			var _code = string_copy(_data, _start, _count);
		
			twitch_oauth_token = _code

			// This is a special response which only purpose is to kill the tab opened by the authentication mechanism
			var _close_tab_script = 
				"HTTP/1.1 200 OK" + "\r\n" +		// This represents a successful result from the server
				"Content-Type:text/html" + "\r\n" + // This specifies the type of content (HTML)
				"Content-Length:237" + "\r\n\r\n" + // For security reasons we add the content length so we know that it isn't easily tempered with
				"<html>" +
					"<head>" +
						// This is optional (just informative)
						"<title>Authentication Complete</title>" +
						// This JS script wil attempt to close the window and fallback to a message if it fails to
						"<script>try{window.open('','_self').close();}catch(e){document.body.innerHTML='<p>Authentication successful. Please close this window manually.</p>';}</script>" +
					"</head>" +
					// This will be used later by the JS script as fallback mechanism
					"<body></body>" +
				"</html>";
				
			var _buff = buffer_create(1, buffer_grow, 1);
			buffer_write(_buff, buffer_string, _close_tab_script);
			network_send_raw(twitch_client_auth_socket, _buff, buffer_tell(_buff));
			buffer_delete(_buff);
			
			if (os_type == os_android || os_type == os_ios) {
				WebView_Destroy()
			}
		
			twitch_auth_exchange_code(twitch_oauth_token, twitch_auth_callback_success, twitch_auth_callback_failed);
			
			// We can safely destroy the server (the client is handle automatically)
			network_destroy(server);
			server = undefined;
			twitch_client_auth_socket = undefined;
			
		}
		else if (async_load[? "id"] == twitch_client_chat_socket)
		{
			if (is_callable(twitch_chat_callback)) {
				twitch_chat_callback(async_load[? "buffer"]);
			} else {
				var _object_name = object_get_name(object_index);
				show_debug_message($"{_object_name} :: No chat callback method was provided, dropping data");
			}
		}
		else if (async_load[? "id"] == twitch_client_eventsub_socket)
		{			
			if (is_callable(twitch_eventsub_callback)) {
				twitch_eventsub_callback(async_load[? "buffer"])
			}
			else {
				var _object_name = object_get_name(object_index);
				show_debug_message($"{_object_name} :: No eventstub callback method was provided, dropping data");
			}
		}
		break;
		
	case network_type_non_blocking_connect:
	
		if (async_load[? "id"] == twitch_client_chat_socket)
		{
			var _buff_temp = buffer_create(128, buffer_fixed, 1);

			var _str = $"PASS {twitch_irc_oauth}\r\n";
			buffer_seek(_buff_temp, buffer_seek_start, 0);
			buffer_write(_buff_temp, buffer_string,_str);
			network_send_raw(twitch_client_chat_socket, _buff_temp, buffer_get_size(_buff_temp));
			
			_str = $"NICK {twitch_irc_name}\r\n";
			buffer_seek(_buff_temp, buffer_seek_start, 0);
			buffer_write(_buff_temp, buffer_string,_str);
			network_send_raw(twitch_client_chat_socket,_buff_temp, buffer_get_size(_buff_temp));
			
			_str = $"JOIN {twitch_irc_channel}\r\n";
			buffer_seek(_buff_temp, buffer_seek_start, 0);
			buffer_write(_buff_temp, buffer_string, _str);
			network_send_raw(twitch_client_chat_socket, _buff_temp, buffer_get_size(_buff_temp));
			
			buffer_delete(_buff_temp);
		}
		else if (async_load[? "id"] == twitch_client_eventsub_socket)
		{
			show_debug_message("Here non block eventsubs")
		}

		break;
}
