const express = require('express')
const { db } = require('./db/models') //import only db from models
const app = express()



db.sync()
    .then(() => {
        app.listen('5000', () => {
            console.log('Server started at http://localhost:5000')
        })
    })
    .catch((err) => {
        console.error(new Error('Could not start sevrer'))
        console.error(err)
    })