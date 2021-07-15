const db = require('../../../db-config');

const createGroup = (req, res) => {
	const { level, teacherId } = req.body;
	const sql = `INSERT INTO cambridge.group (level, teacher_id) VALUES(?, ?)`;

    db.query(sql, [level, teacherId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: 'Group successfully created'})
    })

};

module.exports = createGroup;
