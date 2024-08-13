
var _width = 250
var _height = 250
if (sprite_exists(spr)) {
	draw_sprite_stretched(spr, 0, x, y, _width, _height);
}

var _x = x;
var _y = y + _height + 5;
var _step = 20;

draw_set_font(fnt_gm_15);

draw_set_valign(fa_top);
draw_set_halign(fa_left);

if (struct_exists(data,"display_name"))
{
	draw_text(_x,_y,"display_name: " + data.display_name)
	_y+=_step
}
if (struct_exists(data,"broadcaster_type"))
{
	draw_text(_x,_y,"broadcaster_type: " + data.broadcaster_type)
	_y+=_step
}
if (struct_exists(data,"view_count"))
{
	draw_text(_x,_y,$"view_count: {data.view_count}")
	_y+=_step
}
if (struct_exists(data,"email"))
{
	draw_text(_x,_y,"email: " + data.email)
	_y+=_step
}
if (struct_exists(data,"created_at"))
{
	draw_text(_x,_y,"created_at: " + data.created_at)
	_y+=_step
}
if (struct_exists(data,"id"))
{
	draw_text(_x,_y,"id: " + data.id)
	_y+=_step
}
if (struct_exists(data,"description"))
{
	draw_text(_x,_y,"description: " + data.description)
}

