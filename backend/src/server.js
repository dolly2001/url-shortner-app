import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/dataBase.js"
import cors from "cors"
dotenv.config({
    path : '.env'
})
import shortUrl from "./routes/routes.js"


connectDB()
const app = express();
//middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}))
app.use("/api/v1/user", shortUrl)

// .then(() => {
//         app.on("error", (error) => {
//             console.log("DB Connection Error from server file",error);
//         })

        
//     })
// .catch((error) => {
//     console.log("Error from server file from catch -->", error)
// })


app.listen(process.env.PORT, () => {
    console.log("SERVER IS RUNNING SUCCESSFULLY")
})


