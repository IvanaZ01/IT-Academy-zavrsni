const db = require('../../../db-config')

const createUser = (req,res) => {
    console.log('log from create user')
    res.send('hello from user controller')
}

module.exports = {
    createUser
}