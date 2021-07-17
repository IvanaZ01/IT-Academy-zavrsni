const bcrypt = require('bcrypt');
const { generateAccessToken } = require('./../../jwt.service');
const db = require('../../../db-config')

const loginUser = async(req,res) => {
    const { username, password, remember} = req.body

    const sql = `SELECT * FROM user WHERE username = ?`
    db.query(sql, [username], async(err, result)=>{
        if(err)throw err
        if(!result.length) {
            res.status(404).json({msg:"User doesn't exist"})
        }
        
        const user = result[0]

        const match = await bcrypt.compare(password, user.passwordHash)
        if(!match){
            res.status(500).json({msg: "incorrect password"})
        }
        const token = generateAccessToken(user, remember)
    
        res.status(200).json({token, user})
        
    })

   

}

module.exports = loginUser