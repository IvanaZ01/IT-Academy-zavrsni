const db = require('../../../db-config');

const getResultsByTest = (req, res) => {
    const { testId } = req.params 
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You can only see your own test results."})
    }
	const sql =`SELECT user_id, score FROM test_results WHERE test_id = ?`;

    db.query(sql, [testId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json(result)
    })

};

module.exports = getResultsByTest;
