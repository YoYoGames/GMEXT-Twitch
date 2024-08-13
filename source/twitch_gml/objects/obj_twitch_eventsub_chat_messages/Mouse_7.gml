
var _user = twitch_users_get_user();
var _condition = {broadcaster_user_id: _user.id,/*moderator_user_id: _user.id, */user_id: _user.id}
var _transport = {method: "websocket", session_id: obj_twitch_eventsub.session_id}
twitch_eventsub_create_eventsub_subscription("channel.chat.message",1,_condition,_transport, {}, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);

//twitch_eventsub_delete_eventsub_subscription(, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);


