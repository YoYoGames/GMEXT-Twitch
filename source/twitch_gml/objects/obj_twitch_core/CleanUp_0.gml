/// @description Insert description here
// You can write your code in this editor

ds_map_destroy(requests);
if (!is_undefined(refresher)) {
	call_cancel(refresher);
	refresher = undefined;
}