
//var W = data.W
//var H = data.H
if (sprite_exists(spr)) {
	draw_sprite_stretched(spr, 0, x, y, width, height)
}

var _x = x + width + 5;
var _y = y + 5
var _step = 20;

draw_set_font(fnt_gm_15)

draw_set_valign(fa_top);
draw_set_halign(fa_left);

//		"id":"33214",
//		"igdb_id":"1905",
//		"box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/33214-{width}x{height}.jpg",
//		"name":"Fortnite"

if (struct_exists(data, "name"))
{
	draw_text(_x, _y, $"name: {data.name}");
	_y += _step
}

if (struct_exists(data, "id"))
{
	draw_text(_x, _y, $"id: {data.id}");
	_y += _step
}

if (struct_exists(data, "igdb_id"))
{
	draw_text(_x, _y, $"igdb_id: {data.igdb_id}")
}

