
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

var _data = async_load[? "result"];

if (_status == -1 && string_length(_data) != 0) {
	if (is_callable(_request.callback_failed)) {
		_request.callback_failed(json_parse(_encoded_async_load));
	}
	return;
}

var _code = async_load[? "http_status"];
if (_code >= 200 && _code < 300) {
	try {
		_data = json_parse(_data);
		// feather ignore once GM1028
		_code = _data[$ "code"];
	}
	catch(_ex) { /* ignore it */ };

	if (is_undefined(_code) || (_code >= 200 && _code < 300)) {
		if (is_callable(_request.callback_success)) {
			_request.callback_success(_data);
		}
		return;
	}
}

if (is_callable(_request.callback_failed)) {
	_request.callback_failed(json_parse(_encoded_async_load));
}
