const db = require('../../../db-config');

const getTestById = (req, res) => {
    const testId = req.params.testId
	const sql = `SELECT * FROM test WHERE test_id = ?`;

    db.query(sql, [testId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json(result[0])
    })

};

module.exports = getTestById;
