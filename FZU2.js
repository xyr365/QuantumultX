
var body = $response.body;
var obj = JSON.parse(body);
obj.data.isHealthy=true
body = JSON.stringify(obj);
$done({body});