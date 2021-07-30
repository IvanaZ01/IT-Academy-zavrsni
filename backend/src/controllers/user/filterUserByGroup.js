const db = require('../../../db-config');

const filterUserByGroup = (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
    const groupId = req.params.groupId
	const sql = `SELECT * FROM user WHERE group_id = ? AND status = 'ACTIVE'`;

    db.query(sql, [groupId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json(result)
    })

};

module.exports = filterUserByGroup;
