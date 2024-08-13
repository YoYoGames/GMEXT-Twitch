//{ 
//login : "jzavala_yyg", 
//display_name : "jzavala_yyg", 
//broadcaster_type : "", 
//profile_image_url : "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png", 
//offline_image_url : "", 
//view_count : 0, 
//email : "jzavala@opera.com", 
//type : "", 
//created_at : "2024-05-01T22:16:17Z", 
//id : "1074882731", 
//description : "" 
//}

data = twitch_users_get_user();

spr = sprite_add(data.profile_image_url,0,0,0,0,0)

