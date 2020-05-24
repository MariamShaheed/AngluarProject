const express = require('express')
const fs=require("fs")
const app = express()
const bodyParser = require('body-parser')
var multiparty = require('multiparty');
var cors = require('cors')
var multer  = require('multer')
const port = 3000;
require("./db-connect")
const ProductRoutre=require("./Routers/ProductRouter")
app.use(express.json())
app.use(cors())
app.use("/api/products",ProductRoutre)

app.use("/uploadsproduct",express.static("uploadsproduct"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))