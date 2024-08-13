//https://dev.twitch.tv/docs/irc/example-parser/

// Parses an IRC message and returns a JSON object with the message"s 
// component parts (_tags, source (nick and host), _command, parameters). 
// Expects the caller to pass a single message. (Remember, the Twitch 
// IRC server may send one or more IRC messages in a single message.)

function twitch_parse_message(_message) 
{
	/// @func get_tags_to_ignore
	/// @returns {Struct}
	static get_tags_to_ignore = function() {  // List of _tags to ignore.
		static tags_to_ignore = {
			"client-nonce": undefined,
		    "flags": undefined
		}
		return tags_to_ignore;
	};

	// Parses the _tags component of the IRC message.

	/// @func parse_tags
	/// @param {String} _tags
	static parse_tags = function(_tags) {
	    // badge-info=;badges=broadcaster/1;color=#0000FF;...

	    var _dict_parsed_tags = {};  // Holds the parsed list of _tags.
	                              // The key is the tag"s name (e.g., color).
	    var _parsed_tags = string_split(_tags, ";"); 

	    //_parsed_tags.forEach(tag => {
		for (var _a = 0 ; _a < array_length(_parsed_tags) ; _a++)
		{
			var _tag = _parsed_tags[_a]
	        var _parsed_tag = string_split(_tag, "=");  // Tags are key/value pairs.
	        var _tag_value = (_parsed_tag[1] == "") ? undefined : _parsed_tag[1];

	        switch (_parsed_tag[0]) 
			{  // Switch on tag name
	            case "badges":
	            case "badge-info":
	                // badges=staff/1,broadcaster/1,turbo/1;

	                if (is_string(_tag_value)) {
	                    var _badges_dict = {};  // Holds the list of badge objects.
	                                    // The key is the badge"s name (e.g., subscriber).
	                    var _badges = string_split(_tag_value,","); 
	                    var _badges_length = array_length(_badges);
						for (var _i = 0 ; _i < _badges_length; _i++)
						{
							var _pair = _badges[_i]
	                        var _badge_parts = string_split(_pair, "/");
	                        _badges_dict[$ _badge_parts[0]] = _badge_parts[1];
	                    }
	                    _dict_parsed_tags[$ _parsed_tag[0]] = _badges_dict;
	                }
	                else {
	                    _dict_parsed_tags[$ _parsed_tag[0]] = undefined;
	                }
	                break;
	            case "emotes":
	                // emotes=25:0-4,12-16/1902:6-10

	                if (is_string(_tag_value)) {
	                    var _emotes_dict = {};  // Holds a list of _emote objects.
	                                          // The key is the _emote"s ID.
	                    var _emotes = string_split(_tag_value,"/");
						var _emotes_length = array_length(_emotes);

						for (var _i = 0; _i < _emotes_length; _i++)
						{
							var _emote = _emotes[_i];
	                        var _emote_parts = string_split(_emote,":");

	                        var _text_positions = [];  // The list of _position objects that identify
	                                                 // the location of the _emote in the chat message.
	                        var _positions = string_split(_emote_parts[1],",");

							for (var _j = 0 ; _j < array_length(_positions) ; _j++)
							{
								var _position = _positions[_j]
	                            var _position_parts = string_split(_position,"-");
								array_push(_text_positions, {
	                                start_position: _position_parts[0],
	                                end_position: _position_parts[1]    
	                            });
	                        }
						
	                        _emotes_dict[$ _emote_parts[0]] = _text_positions;
	                    }

	                    _dict_parsed_tags[$ _parsed_tag[0]] = _emotes_dict;
	                }
	                else {
	                    _dict_parsed_tags[$ _parsed_tag[0]] = undefined;
	                }

	                break;
	            case "_emote-sets":
	                // _emote-sets=0,33,50,237

	                var _emote_set_ids = string_split(_tag_value, ",");  // Array of _emote set IDs.
	                _dict_parsed_tags[$ _parsed_tag[0]] = _emote_set_ids;
	                break
	            default:
	                if (struct_exists(twitch_parse_message.get_tags_to_ignore(), _parsed_tag[0])) { 
	                    // Tag will be ignored
	                }
	                else {
	                    _dict_parsed_tags[$ _parsed_tag[0]] = _tag_value;
	                }
	        } 
	    }//);

	    return _dict_parsed_tags;
	}

	// Parses the _command component of the IRC message.

	/// @func parse_command
	/// @param {String} _raw_command_component
	static parse_command = function(_raw_command_component) 
	{
	    var _parsed_command = undefined;
	    var _command_parts = string_split(_raw_command_component, " ");

	    switch (_command_parts[0]) {
	        case "JOIN":
	        case "PART":
	        case "NOTICE":
	        case "CLEARCHAT":
	        case "HOSTTARGET":
	        case "PRIVMSG":
	            _parsed_command = {
	                command: _command_parts[0],
	                channel: _command_parts[1]
	            }
	            break;
	        case "PING":
	            _parsed_command = {
	                command: _command_parts[0]
	            }
	            break;
	        case "CAP":
	            _parsed_command = {
	                command: _command_parts[0],
	                is_cap_request_enabled: (_command_parts[2] == "ACK"),
	                // The parameters part of the messages contains the 
	                // enabled capabilities.
	            }
	            break;
	        case "GLOBALUSERSTATE":  // Included only if you request the /commands capability.
	                                 // But it has no meaning without also including the /_tags capability.
	            _parsed_command = {
	                command: _command_parts[0]
	            }
	            break;               
	        case "USERSTATE":   // Included only if you request the /commands capability.
	        case "ROOMSTATE":   // But it has no meaning without also including the /_tags capabilities.
	            _parsed_command = {
	                command: _command_parts[0],
	                channel: _command_parts[1]
	            }
	            break;
	        case "RECONNECT":  
	            show_debug_message("The Twitch IRC server is about to terminate the connection for maintenance.")
	            _parsed_command = {
	                command: _command_parts[0]
	            }
	            break;
	        case "421":
	            show_debug_message($"Unsupported IRC _command: ${_command_parts[2]}")
	            return undefined;
	        case "001":  // Logged in (successfully authenticated). 
	            _parsed_command = {
	                command: _command_parts[0],
	                channel: _command_parts[1]
	            }
	            break;
	        case "002":  // Ignoring all other numeric messages.
	        case "003":
	        case "004":
	        case "353":  // Tells you who else is in the chat room you"re joining.
	        case "366":
	        case "372":
	        case "375":
	        case "376":
	            show_debug_message($"numeric message: ${_command_parts[0]}")
	            return undefined;
	        default:
	            show_debug_message($"\nUnexpected command: ${_command_parts[0]}\n");
	            return undefined;
	    }

	    return _parsed_command;
	}

	// Parses the source (nick and host) components of the IRC message.

	/// @func parse_source
	/// @param {String} _raw_source_component
	static parse_source = function(_raw_source_component) {
	    if (undefined == _raw_source_component) {  // Not all messages contain a source
	        return undefined;
	    }
	    else {
	        var _source_parts = string_split(_raw_source_component,"!");
	        return {
	            nick: (string_length(_source_parts[0]) == 1) ? _source_parts[0] : undefined,
	            host: (string_length(_source_parts[0]) == 2) ? _source_parts[1] : _source_parts[0]
	        }
	    }
	}

	// Parsing the IRC parameters component if it contains a _command (e.g., !dice).

	/// @func parse_parameters
	/// @param {String} _raw_parameters_component
	/// @param {Struct} _command
	static parse_parameters = function(_raw_parameters_component, _command) {
	    var _idx = 1
	    var _command_parts = string_trim(string_copy(_raw_parameters_component, _idx + 1, string_length(_raw_parameters_component) - _idx + 1)); //.slice(_idx + 1)))
	    var _params_idx = string_pos(" ", _command_parts);

	    if (-1 == _params_idx) { // no parameters
	        _command.bot_command = _command_parts//.slice(0); 
	    }
	    else {
	        _command.bot_command = string_copy(_command_parts,1,_params_idx-1)//.slice(0, _params_idx); 
	        _command.bot_command_params = string_trim(string_copy(_command_parts, _params_idx, 1 + string_length(_raw_parameters_component) - _params_idx)); //.slice(_params_idx).trim();
	        // TODO: remove extra spaces in parameters string
	    }

	    return _command;
	}

	
    var _parsed_message = {  // Contains the component parts.
        tags: undefined,
        source: undefined,
        command: undefined,
        parameters: undefined
    };

    // The start index. Increments as we parse the IRC message.

    var _idx = 1; 

    // The raw components of the IRC message.

    var _raw_tags_component = undefined;
    var _raw_source_component = undefined; 
    var _raw_command_component = undefined;
    var _raw_parameters_component = undefined;

    // If the message includes _tags, get the _tags component of the IRC message.

    if (string_char_at(_message, _idx) == "@") {  // The message includes _tags.
        var _end_idx = string_pos(" ",_message);
        _raw_tags_component = string_copy(_message,1,_end_idx-1)//_message.slice(1, _end_idx);
        _idx = _end_idx + 1; // Should now point to source colon (:).
    }

    // Get the source component (nick and host) of the IRC message.
    // The _idx should point to the source part; otherwise, it"s a PING _command.

    if (string_char_at(_message,_idx) == ":") {
        _idx += 1;
        var _end_idx = string_pos_ext(" ",_message,_idx);
        _raw_source_component = string_copy(_message,_idx,_end_idx-_idx)//.slice(_idx, _end_idx);
        _idx = _end_idx + 1;  // Should point to the _command part of the message.
    }

    // Get the _command component of the IRC message.

    var _end_idx = string_pos_ext(":",_message,_idx);  // Looking for the parameters part of the message.
    if (-1 == _end_idx) {                      // But not all messages include the parameters part.
        _end_idx = 1+string_length(_message);
    }
	
    _raw_command_component = string_trim(string_copy(_message,_idx,_end_idx-_idx));

    // Get the parameters component of the IRC message.

    if (_end_idx != 1+string_length(_message)) {  // Check if the IRC message contains a parameters component.
        _idx = _end_idx + 1;            // Should point to the parameters part of the message.
        _raw_parameters_component = string_copy(_message,_idx,1+string_length(_message)-_idx)
    }

    // Parse the _command component of the IRC message.

    _parsed_message.command = twitch_parse_message.parse_command(_raw_command_component);

    // Only parse the rest of the components if it"s a _command
    // we care about; we ignore some messages.

    if (undefined == _parsed_message.command) {  // Is undefined if it"s a message we don"t care about.
        return undefined; 
    }
    else {
        if (undefined != _raw_tags_component) {  // The IRC message contains _tags.
            _parsed_message.tags = twitch_parse_message.parse_tags(_raw_tags_component);
        }

        _parsed_message.source = twitch_parse_message.parse_source(_raw_source_component);

        _parsed_message.parameters = _raw_parameters_component;
		if (!is_undefined(_raw_parameters_component))
        if (/*_raw_parameters_component && */string_char_at(_raw_parameters_component,0) == "!") {  
            // The user entered a bot command in the chat window.            
            _parsed_message.command = twitch_parse_message.parse_parameters(_raw_parameters_component, _parsed_message.command);
        }
    }

    return _parsed_message;
}
