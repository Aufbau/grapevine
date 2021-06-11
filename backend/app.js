const express = require("express")
const app = express()

const PORT = 3002

app.use(express.json())
 
app.get("/", function (req, res) {
  res.send("Hello World")
})
 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})