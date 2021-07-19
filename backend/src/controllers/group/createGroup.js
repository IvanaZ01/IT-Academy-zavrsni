const db = require('../../../db-config');

const createGroup = (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
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
