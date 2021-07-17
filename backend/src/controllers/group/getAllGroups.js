const db = require('../../../db-config');

const getAllGroups = (req, res) => {
	const sql = `SELECT * FROM cambridge.group`;

    db.query(sql, (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json(result)
    })

};

module.exports = getAllGroups;
