import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

// Middleware
app.use(express.json())

const PORT = process.env.PORT || 5001


app.get("/", (req, res) => {
  res.send("Server is running 🚀")
})

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`)
})