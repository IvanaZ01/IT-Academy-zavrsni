const db = require('../../../db-config');

const deleteUser = (req, res) => {
    const userId = req.params.id
	const sql = `DELETE FROM user WHERE user_id = ?;`;

    db.query(sql, [userId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: "User successfully deleted"})
    })

};

module.exports = deleteUser;