import express from "express";
import bodyParser from "body-parser";
import  dotenv from "dotenv";
import customerDataRoute from "./routes/customerData.routes.js"
import cors from "cors";
import connectDB from "./db/conn.js";

dotenv.config({
    path: "./.env"
});

const app = express();
const port = process.env.PORT || 4000;

// middlewares

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.static("public"));



// calling the db function

connectDB()
.then(() => {
    console.log("Successfully connected to database");
})
.catch((error) => {
    console.log("Error connecting to database", error);
});



// routes

app.get("/", (req, res) => {
    res.send("this is the home page");
})

app.use("/api/v1/users", customerDataRoute);

// Handle any server-level errors
app.on("error", (error) => {
    console.log("Error connecting to server", error);
});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});






