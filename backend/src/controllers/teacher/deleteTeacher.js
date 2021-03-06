const db = require('../../../db-config');

const deleteTeacher = (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
    const teacherId = +req.params.id
	const sql = `DELETE FROM teacher WHERE teacher_id = ?;`;

    db.query(sql, [teacherId], (err, result)=>{
        if(err){
            res.status(500).json({msg: 'Can not delete teacher who is assigned to the group.'})
            throw err
        }
        res.status(200).json({msg: "Teacher successfully deleted"})
    })

};

module.exports = deleteTeacher;