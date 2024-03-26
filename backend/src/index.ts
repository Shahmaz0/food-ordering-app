import express, { Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import * as mongoose from "mongoose";
import myUserRoutes from "./routes/myUserRoutes";
import router from "./routes/myUserRoutes";


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
    console.log("Connected to database!")
});


const app = express();
app.use(express.json())
app.use(cors())

app.use("/api/my/user", myUserRoutes)

app.listen(3000, ()=>{
    console.log("Server started on localhost:3000")
})
