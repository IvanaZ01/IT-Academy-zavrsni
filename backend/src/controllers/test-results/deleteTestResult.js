const db = require('../../../db-config');

const deleteTestResult = (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
    const { testId, userId } = req.params
	const sql = `DELETE FROM test_results WHERE test_id = ? and user_id = ?;`;

    db.query(sql, [testId, userId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: "Test result successfully deleted"})
    })

};

module.exports = deleteTestResult;