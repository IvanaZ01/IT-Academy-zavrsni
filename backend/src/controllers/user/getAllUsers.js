const db = require('../../../db-config');

const getAllUsers = (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
	const sql = `SELECT * FROM user`;

    db.query(sql, (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json(result)
    })

};

module.exports = getAllUsers;
