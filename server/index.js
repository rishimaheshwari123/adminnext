const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")
const cors = require("cors")
const dotenv = require("dotenv");
const connectDB = require("./config/db")
//routes
const authRoutes = require("./routes/authRoute")


dotenv.config();

const PORT = process.env.PORT || 8080
connectDB();



// middleware 
app.use(express.json())
app.use(cookieParser());
app.use(cors({
  origin: "*",
  credentials: true,
}))



// routes  
app.use("/api/v1/auth", authRoutes)







// default route 
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running ..."
  })
})

app.listen(PORT, () => {
  console.log(`Server is running at port no ${PORT}`)
})
