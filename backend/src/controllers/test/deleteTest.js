const db = require('../../../db-config');

const deleteTest = (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
    const testId = req.params.id
	const sql = `DELETE FROM test WHERE test_id = ?;`;

    db.query(sql, [testId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: "Test successfully deleted"})
    })

};

module.exports = deleteTest;