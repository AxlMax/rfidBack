require("dotenv").config()

var express     = require("express");
var bodyParser  = require("body-parser");
const dbConnect = require("./config/mongo");
const cors      = require('cors')
const colors    = require('colors')
const http      = require('http')
const ws        = require('ws')
const path      = require('path')
const Websocket = require('./config/websocket')

colors.enable()

var app = express();

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use(cors({origin:true,credentials: true}))

app.use("/api", require("./routes"))

app.use(express.static(path.join(__dirname, 'public')))

const server = http.createServer(app);

const wss = new ws.Server({ server });

server.listen(process.env.PORT, () => {
    console.log()
    console.log(colors.green(`[OK] app http and ws running on ${process.env.PORT}`))
})

dbConnect()
Websocket(wss, colors)