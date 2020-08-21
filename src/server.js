const express = require('express')
const { db } = require('./db/models') //import only db from models
const { userRoute } = require('./routes/users')
const { postsRoute } = require('./routes/posts')

const app = express()

app.use('/api/users',userRoute)
app.use('/api/posts', postsRoute)
app.use('/', express.static(__dirname + '/public'))

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