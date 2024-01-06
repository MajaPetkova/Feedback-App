const express = require("express");
const mongoose = require("mongoose")


async function start() {
    const app = express();
    try {
      const db = await mongoose.connect("mongodb://localhost:27017/fiverr");
      console.log("DB Ready");
    } catch (err) {
      console.log("Error connecting to DB");
      return process.exit(1);
    }
    
    app.listen(8000, ()=>console.log("Backend Server is running on port 8000"))
}
start()