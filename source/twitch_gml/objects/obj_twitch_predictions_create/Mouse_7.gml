
var _user = twitch_users_get_user();
twitch_predictions_create_prediction(_user.id,"Any leeks in the stream?",
      [
        {
          "id": "73085848-a94d-4040-9d21-2cb7a89374b7",
          "title": "Yes, give it time.",
          "users": 0,
          "channel_points": 0,
          "top_predictors": undefined,
          "color": "BLUE"
        },
        {
          "id": "906b70ba-1f12-47ea-9e95-e5f93d20e9cc",
          "title": "Definitely not.",
          "users": 0,
          "channel_points": 0,
          "top_predictors": undefined,
          "color": "PINK"
        }
      ],
      120, ASYNC_TEST_RESPONSE_SUCCESS, ASYNC_TEST_RESPONSE_FAILED);
	  