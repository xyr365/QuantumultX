
var body = $response.body;
var obj = JSON.parse(body);
obj.data.isHealthy=true
obj.data.healthDescription="绿码：健康状态为低风险"

body = JSON.stringify(obj);
$done({body});
