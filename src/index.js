
const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const app = express()
const cookieParser = require('cookie-parser')
const port = 5000
const db = require('./config/db')
const cors = require("cors");

db.Connect()
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(cookieParser());

app.use(morgan('combined'))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
