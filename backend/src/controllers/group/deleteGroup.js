const db = require('../../../db-config');

const deleteGroup = (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
    const groupId = +req.params.id
	const sql = `DELETE FROM cambridge.group WHERE group_id = ?`;

    db.query(sql, [groupId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: "Group successfully deleted"})
    })

};

module.exports = deleteGroup;