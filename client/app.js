const express = require('express')
// const bodyParser = require('body-parser')
const sequelize = require('./util/database')
const authRoutes = require('./routes/authRoutes')

const app = express();
// app.use(bodyParser.urlencoded({extended : false}))
app.use(express.json())

// app.use("/", (req, res, next) => {
//     res.send("Hii from express")
// })

sequelize.sync({force : false})
.then(() =>{
    console.log('Models synced with the database');
})

app.use('/api/auth', authRoutes)

app.listen("1200")