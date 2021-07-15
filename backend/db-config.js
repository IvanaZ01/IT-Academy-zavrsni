const mysql = require('mysql')

const host = process.env.DB_HOST
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const database = process.env.DB_DATABASE

const db = mysql.createConnection({
    host,
    user,
    password,
    database
})

db.connect((err)=>{
    if(err)throw err
    console.log('connected to the database');
})

module.exports = db