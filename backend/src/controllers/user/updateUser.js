const db = require('../../../db-config');
const bcrypt = require('bcrypt')

const updateUser = async(req, res) => {
	if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
	const userId = +req.params.id;
	const { firstName, lastName, username, role, password, groupId } = req.body;

	const saltRounds = 10;
	const passwordHash = await bcrypt.hash(password, saltRounds);

	const sql = `UPDATE user SET first_name = ?, last_name = ?, username = ?, role = ?, passwordHash = ?, group_id = ? WHERE user_id = ?`;

	db.query(sql, [firstName, lastName, username, role, passwordHash, groupId, userId], (err, result) => {
		if (err) {
			res.status(500).json(err);
			throw err;
		}
		res.status(200).json({ msg: 'User updated successfully' });
	});
};

module.exports = updateUser;
