const mongoose = require('mongoose')
const databaseName = "express-mongoose-recipes-dev"
const conectionString = `mongodb://127.0.0.1:27017/${databaseName}`

mongoose
    .connect(conectionString)
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error("Error connection to mongo", err))