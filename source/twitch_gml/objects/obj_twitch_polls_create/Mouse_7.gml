
var _user = twitch_users_get_user();
twitch_polls_create_poll(_user.id,"Best Game Genere?",
[{
    "title":"Adventure"
  },
  {
    "title":"Sports"
  },
  {
    "title":"Puzzle"
  },
  {
    "title":"Shooter"
  },
  {
    "title":"RPG"
  }]
  ,1800, {}, __twitch_debug_callback_success, __twitch_debug_callback_failure);
