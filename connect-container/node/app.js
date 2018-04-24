const redis = require('redis');
const { promisify } = require('util');


const client = redis.createClient(6379, 'redis');
const getAsync = promisify(client.get).bind(client);

client.on('connect', function() {
  console.log('connected');
});

client.set("name", "John Doe");

getAsync("name").then(log);




function log(res) {
  console.log(res);
}
