/*************************************

克拉壁纸
**************************************

[rewrite_local]

^http[s]?:\/\/www\.claritywallpaper\.com url script-response-body https://raw.githubusercontent.com/Yuzihang9/quanx/main/kela.js

[mitm]

hostname = www.claritywallpaper.com

*************************************/


body = $response.body
//.replace(/\"forever":\w+/g, '\"forever":true')
.replace(/\"level":\d+/g, '\"level":1')
.replace(/\"local":\d+/g, '\"local":1');

$done({body});
