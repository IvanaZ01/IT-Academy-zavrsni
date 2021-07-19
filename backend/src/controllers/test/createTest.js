const db = require('../../../db-config')

const createTest = async (req, res) => {
    if(req.user.role !== "ADMIN"){
        res.status(401).json({msg: "You need to be administrator"})
    }
    const { groupId, name, date, status} = req.body

    const sql = `INSERT INTO test (group_id, name, scheduled, status) VALUES(?, ?, ?, ?)`

    db.query(sql, [groupId, name, date, status], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: 'Test successfully created.'})
    })
}



module.exports = createTest