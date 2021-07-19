const db = require('../../../db-config');

const updateGroup = (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
    const groupId = +req.params.id
	const { level, teacherId } = req.body;
	const sql = `UPDATE cambridge.group SET level = ?, teacher_id = ? WHERE group_id = ?;`;

    db.query(sql, [level, teacherId, groupId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: 'Group updated successfully'})
    })

};

module.exports = updateGroup;
