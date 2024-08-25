import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js"


///config dot env file
dotenv.config(
    {
        path: "./.env"
    }
);
// db connection method call
connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log(`error ${error}`);
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`app is listing on post ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(`mongodb connection failed: ${error}`);
    })



