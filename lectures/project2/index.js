// console.log("Index Page");
// console.log("Index Page");
// console.log("Index Page");
// console.log("Index Page");


import express from "express";
// console.log(typeof express);

const app = express();
// console.log(app)

// http:localhost/9000
const port = 9000;

app.get("/", (req, res) => { 
    res.send("<h1>Home Page</h1>");
});

app.get("/users", (req, res) => {
    res.send(['user1', 'user2'])
});

app.get("/userinfo", (req, res) => {
    res.send({name: "user1", age: 20, });
});

app.get("/login", (req, res) => {
    res.render("loginForm");
});

app.set("view engine", "ejs");

app.listen(port, ()=> {
    console.log("server is running");
})

