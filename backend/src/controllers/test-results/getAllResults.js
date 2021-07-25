const db = require('../../../db-config');

const getAllResults = (req, res) => {
    const groupId = +req.query.groupId 
    if(req.user.role !== "ADMIN" && groupId !== req.user.groupId){
        return res.status(401).json({msg: "You can only see your own test results."})
    }
	const sql = groupId? `SELECT test_id, group_id, name FROM test_results JOIN test USING(test_id) WHERE group_id = ? GROUP BY test_id`: `SELECT test_id, group_id, name FROM test_results JOIN test USING(test_id) GROUP BY test_id`;

    db.query(sql, [groupId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json(result)
    })

};

module.exports = getAllResults;
