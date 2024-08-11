require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connectionMySql = require('./config/database')

//config database connection
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//config req.body cuar form
app.use(express.json()) //Notice express.json middleware
app.use(express.urlencoded({ extended: true }))

//config template engine for express
configViewEngine(app);

//khai baos routers
app.use('/', webRoutes)

    // A simple SELECT query
    connectionMySql.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );

app.listen(port, hostname, function (err){
});