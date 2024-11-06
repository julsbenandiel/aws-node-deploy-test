const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) => res.send("AWS node deploy test works!"))

app.listen(8080, () => {
  console.log("App started on port: 8080")
})