const db = require('../../../db-config');

const getAllTeachers = (req, res) => {
	const sql = `SELECT * FROM teacher`;

    db.query(sql, (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json(result)
    })

};

module.exports = getAllTeachers;
