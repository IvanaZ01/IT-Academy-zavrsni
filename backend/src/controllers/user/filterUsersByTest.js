const db = require('../../../db-config');

const filterUserByTest = (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }

	const sql = `SELECT * FROM user WHERE group_id IN(SELECT group_id FROM test JOIN cambridge.group USING(group_id) WHERE test_id = ? AND status = 'ACTIVE')`;

    db.query(sql, [req.params.testId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json(result)
    })

};

module.exports = filterUserByTest;
