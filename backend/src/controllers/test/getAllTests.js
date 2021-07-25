const db = require('../../../db-config');

const getAllTests = (req, res) => {
	const sql = `SELECT * FROM test`;

    db.query(sql, (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json(result)
    })

};

module.exports = getAllTests;
