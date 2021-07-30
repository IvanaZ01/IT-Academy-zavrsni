const db = require('../../../db-config');

const deleteUser = (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
    const userId = req.params.id
	const sql = `UPDATE user SET status = 'DELETED' WHERE user_id = ?;`;

    db.query(sql, [userId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: "User successfully deleted"})
    })

};

module.exports = deleteUser;