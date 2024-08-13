//"data":
//	{
//		"id":"33214",
//		"igdb_id":"1905",
//		"box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/33214-{width}x{height}.jpg",
//		"name":"Fortnite"
//	}

var _url = string_replace(data.box_art_url, "{width}x{height}", $"{width}x{height}");

spr = sprite_add(_url, 0, 0, 0, 0, 0);

