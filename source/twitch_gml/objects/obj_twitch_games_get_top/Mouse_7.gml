
twitch_games_get_top_games({},
	function(_data)
	{
		instance_destroy(obj_twitch_game)
		var _x = 200
		var _y = 100
		var _width = 100
		var _height = 100
		for (var _i = 0; _i < min(array_length(_data.data), 5); _i++)
		{
			instance_create_depth(_x, _y, 0, obj_twitch_game, { data:_data.data[_i], height: _height, width: _width })
			_y += _height*1.2
		}
	}
	,ASYNC_TEST_RESPONSE_FAILED)

