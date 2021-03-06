const db = require('../../../db-config')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
    const { firstName, lastName, username, role, password, groupId } = req.body

    const saltRounds = 10;
	const passwordHash = await bcrypt.hash(password, saltRounds);
    const sql = `INSERT INTO user (first_name, last_name, username, role, passwordHash, group_id) VALUES(?, ?, ?, ?, ?, ?)`

    db.query(sql, [firstName, lastName, username, role, passwordHash, groupId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: 'User successfully created.'})
    })
}



module.exports = createUser