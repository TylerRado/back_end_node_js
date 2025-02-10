const mysql = require('mysql2')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'thamiR@1',
    database: 'TELEMEDICINE'

})

db.connect( (err) => {
    if (err){
        console.log('error occured while tring to connect to DB', err.stack)
        return;
    }
    console.log('Successfully connected to DB')
})


module.exports = db;