const db = require('../../../db-config');

const updateTeacher = (req, res) => {
    const teacherId = +req.params.id
	const { firstName, lastName } = req.body;
	const sql = `UPDATE teacher SET first_name = ?, last_name = ? WHERE teacher_id = ?;`;

    db.query(sql, [firstName, lastName, teacherId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: 'Teacher updated successfully'})
    })

};

module.exports = updateTeacher;
