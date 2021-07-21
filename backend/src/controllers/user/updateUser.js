const db = require('../../../db-config');

const updateUser = (req, res) => {
	if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
	const userId = +req.params.id;
	const { firstName, lastName, username, role, groupId } = req.body;

	const sql = `UPDATE user SET first_name = ?, last_name = ?, username = ?, role = ?, group_id = ? WHERE user_id = ?`;

	db.query(sql, [firstName, lastName, username, role, groupId, userId], (err, result) => {
		if (err) {
			res.status(500).json(err);
			throw err;
		}
		res.status(200).json({ msg: 'User updated successfully' });
	});
};

module.exports = updateUser;
