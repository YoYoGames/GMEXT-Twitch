
var _async_id = async_load[? "id"];
var _request = requests[? _async_id];

// Early exit if there is no registered request with given id
if (_request == undefined) {
	exit;
}

var _status = async_load[? "status"];

// Early exit if the _request has not finished yet
if (_status == 1) exit;

// Request will be handled (remove from map)
ds_map_delete(requests, _async_id);

var _encoded_async_load = json_encode(async_load);

if (TWITCH_DEBUG) {
	show_debug_message("HTTP: " + _encoded_async_load)
}

// Early exist bad status code
if (_status != 0) {
	if (is_callable(_request.callback_failed)) {
		_request.callback_failed(json_parse(_encoded_async_load));
	}
	return;
}

var _http_status = async_load[? "http_status"];
if (_http_status >= 200 && _http_status < 300)
{
	try
	{
		var _data = json_parse(async_load[? "result"]);
		var _code = _data[$ "code"];
		if (is_undefined(_code) || (_code >= 200 && _code < 300))
		{
			var _trigger_callback = twitch_http_success(_request, _data)
			if (_trigger_callback && is_callable(_request.callback_success)) {
				_request.callback_success(_data);
			}
				
			return;
		}
	}
	catch (_exception)
	{
		show_debug_message($"obj_twitch_core :: {_exception}");
	}
}

if (is_callable(_request.callback_failed)) {
	_request.callback_failed(json_parse(_encoded_async_load));
}


