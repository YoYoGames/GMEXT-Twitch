
if (async_load[? "id"] != request) exit;

if (!async_load[? "status"]) exit;

if (async_load[? "result"] == "") exit;

var _str = async_load[? "result"];
var _user = twitch_users_get_user();
twitch_chat_send_chat_message(_user.id, _user.id, _str, undefined, ASYNC_TEST_RESPONSE_SUCCESS,ASYNC_TEST_RESPONSE_FAILED)

