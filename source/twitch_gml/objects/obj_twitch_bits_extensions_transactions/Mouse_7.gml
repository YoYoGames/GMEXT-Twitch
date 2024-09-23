
var _user = twitch_users_get_user();
twitch_bits_get_extension_transactions(_user.id, {}, __twitch_debug_callback_success, __twitch_debug_callback_failure);

