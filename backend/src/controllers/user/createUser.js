const db = require('../../../db-config')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {

    const { firstName, lastName, username, email, role, password, group_id } = req.body

    const saltRounds = 10;
	const passwordHash = await bcrypt.hash(password, saltRounds);
    const sql = `INSERT INTO user (first_name, last_name, username, email, role, passwordHash, group_id) VALUES(?, ?, ?, ?, ?, ?, ?)`

    db.query(sql, [firstName, lastName, username, email, role, passwordHash, group_id], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: 'User successfully created.'})
    })
}



module.exports = createUser