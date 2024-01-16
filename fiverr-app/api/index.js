const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require( "./routes/userRoute.js");
const gigRouter = require("./routes/gigRoute.js")
const orderRouter = require("./routes/orderRoute.js");
const conversationRoute= require("./routes/conversationRoute.js");
const messageRoute= require("./routes/messageRoute.js")
const reviewRoute = require("./routes/reviewRoute.js");
const authRoute = require("./routes/authRoute.js");
const cookieParser= require("cookie-parser")
const dotenv= require("dotenv")

async function start() {
    const app = express();
    dotenv.config();
    try {
      const db = await mongoose.connect("mongodb://localhost:27017/fiverr");
      console.log("DB Ready");
    } catch (err) {
      console.log("Error connecting to DB");
      return process.exit(1);
    }
    
    app.use(cors({origin:"http://localhost:3000", credential:true}))
    app.use(express.json());
    app.use(cookieParser());

    app.use("/api/auth", authRoute)
    app.use("/api/users",userRouter );
    app.use("/api/gigs",gigRouter );
    app.use("/api/orders", orderRouter);
    app.use("/api/conversations", conversationRoute);
    app.use("/api/messages", messageRoute );
    app.use("/api/reviews", reviewRoute);

    app.use((err, req, res, next)=>{
      const errorStatus = err.status || 500;
      const errorMessage = err.message || "Something went wrong" ;

      return res.status(errorStatus).send(errorMessage)
      
    })
  
    app.listen(8000, ()=>console.log("Backend Server is running on port 8000"))
}
start()