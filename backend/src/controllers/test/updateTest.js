const db = require('../../../db-config');

const updateTest = (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
    const testId = +req.params.id
	const { groupId, name, status, date } = req.body;
	const sql = `UPDATE test SET group_id = ?, name = ?, scheduled = ?, status = ? WHERE test_id = ?;`;

    db.query(sql, [groupId, name, date, status, testId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: 'Test updated successfully'})
    })

};

module.exports = updateTest;
