const db = require('../../../db-config');

const deleteTeacher = (req, res) => {
    const teacherId = req.params.id
	const sql = `DELETE FROM teacher WHERE teacher_id = ?;`;

    db.query(sql, [teacherId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: "Teacher successfully deleted"})
    })

};

module.exports = deleteTeacher;