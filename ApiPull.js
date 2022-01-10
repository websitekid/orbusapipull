let requestURL = 'http://api-reborn.orbusvr.com/public/characters/ravenh';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
const CharPull = request.response;
alert(CharPull);
}
