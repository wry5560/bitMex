
console.time()
var request = require('request');
var crypto = require('crypto');

var apiKey = "3SMPUWkLtWDAhkDaMORSpms4";       //test
var apiSecret = "A-R1s2zwV35wyC8i8LEA0waV8g7xsOdgcDpFcYit4SNUzkBk";   //test

// var apiKey = "lWO8HFfi1Xvnu-N5Npn23Vh5";    //real
// var apiSecret = "0HjCj4-NNQdPR7ilgMGLadI322K2VxWBrEoISvCtQbjd8Anh";   //real

var verb = 'GET',
    path = '/api/v1/user',
    expires = Math.round(new Date().getTime() / 1000) + 100, // 1 min in the future
    data = '';

// Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
// and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
// var postBody = JSON.stringify(data);

var signature = crypto.createHmac('sha256', apiSecret).update(verb + path + expires + data).digest('hex');

var headers = {
    'content-type' : 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    // This example uses the 'expires' scheme. You can also use the 'nonce' scheme. See
    // https://www.bitmex.com/app/apiKeysUsage for more details.
    'api-expires': expires,
    'api-key': apiKey,
    'api-signature': signature
};

const requestOptions = {
    headers: headers,
    url:'https://testnet.bitmex.com'+path,
    // url:'https://www.bitmex.com'+path,
    method: verb,
    // body: data
};

request(requestOptions, function(error, response, body) {
    console.log('request start')
    if (error) { console.log(error); }
    console.log(body);
    console.timeEnd()
});
