const PORT=9000;

import express from "express";
import commonRoute from "./routes/commonRoute.js";

const app = express();

app.set("view engine", "ejs");
app.use("/", commonRoute);
// http:localhost:9000/

app.listen(PORT, () => {
    console.log("SERVER RUNNING");
})