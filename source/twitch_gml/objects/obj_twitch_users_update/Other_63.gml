
if (async_load[? "id"] != request) exit;

if (!async_load[? "status"]) exit;

if (async_load[? "result"] == "") exit;

var _str = async_load[? "result"];
twitch_users_update_user({ description: _str }, __twitch_debug_callback_success, __twitch_debug_callback_failure);

