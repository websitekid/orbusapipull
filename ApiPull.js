alert("test")
let requestURL = 'http://api-reborn.orbusvr.com/public/timePlayed/ravenh';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
const CharPull = request.response;
console.log(request.response);
alert(request.response);
}
