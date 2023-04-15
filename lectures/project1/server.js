// http module , fs module

const http = require('http');
// console.log(http);

const fs = require("fs");
// console.log(fs);

const SERVER = http.createServer((req, res) => {
    // console.log(typeof req);
    // console.log(typeof res);
    console.log(req.url);

    // http://localhost:9000/
    // http://localhost:9000/about-us
    // http://localhost:9000/service-page

    if(req.url == "/") {
        pagePath = "./templates/home.html"

    } else if(req.url == "/about") {
        pagePath = "./templates/about.html"
 
    } else if(req.url == "/services") {
        pagePath = "./templates/services.html"
    }

    // console.log(pagePath);

    fs.readFile(pagePath, "utf8", (err, data) => {
        if(err) {
            console.log(err);
        } else {
            // console.log(data);
            res.end(data);
        }
    })

    // res.end("TEST");
});

SERVER.listen(9000, () => {
    console.log("Server Running Test");
})