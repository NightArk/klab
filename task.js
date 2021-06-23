
const cheerio = require('cheerio')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var req = new XMLHttpRequest();

req.open("GET", "https://www.yahoo.com/news/weather/bahrain/capital/manama-1967057/", false);
req.send();


if (req.readyState == 4) {
    //console.log(req.responseText);

    const dom = cheerio.load(req.responseText);

    f = parseInt((dom('.now span').text()))
    // console.log(Math.round((f - 32) * 0.5556));

    inv = setInterval(timer, 60000);
    function timer() {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(time + " " + Math.round((f - 32) * 0.5556));
        var fs=require("fs");
        fs.writeFile('de.txt',String(time + " " + Math.round((f - 32) * 0.5556)+"\n"),{flag:'a'},function (err) {
            if (err) throw err;
          }); 
    }
    // var today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // console.log(time);
}







//use this if want to make the http call async
// function reqListener () {
//     console.log("status " + oReq.status);
//     console.log("state " + oReq.readyState);

//     //console.log(this.responseText);
//   }

//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "https://www.yahoo.com/news/weather/bahrain/capital/manama-1967057/",false);
//   oReq.send();
//   console.log("status " + oReq.status);
//   console.log("state " + oReq.readyState);