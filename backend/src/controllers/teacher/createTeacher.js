const db = require('../../../db-config')

const createTeacher = (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
    const { firstName, lastName } = req.body
    const sql = `INSERT INTO teacher (first_name, last_name) VALUES(?, ?)`

    db.query(sql, [firstName, lastName], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: 'Teacher successfully added'})
    })
}

module.exports = createTeacher