const db = require('../../../db-config');

const getResultsByTest = (req, res) => {
    const { testId } = req.params 
    console.log(req.user)
	const sql =`SELECT user_id, score, first_name, last_name FROM test_results LEFT JOIN user USING(user_id) WHERE test_id = ? ORDER BY score DESC`;

    db.query(`SELECT group_id FROM test WHERE test_id = ?`, [testId], (err,result)=>{
        if(result[0].group_id !== req.user.groupId){
            res.status(401).json({msg: 'You can only see test results from you own group.'})
        }

        db.query(sql, [testId], (err, result2)=>{
            if(err){
                res.status(500).json(err)
                throw err
            }
            res.status(200).json(result2)
        })
    })

};

module.exports = getResultsByTest;
