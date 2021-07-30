const db = require('../../../db-config');

const getGroupTests = (req, res) => {
	const groupId = req.params.id;
	const sql =
		groupId === 'null'
			? `SELECT * FROM test ORDER BY scheduled DESC`
			: `SELECT * FROM test WHERE group_id = ? ORDER BY scheduled DESC, test_id DESC`;

	db.query(sql, [groupId], (err, result) => {
		if (err) {
			res.status(500).json(err);
			throw err;
		}
		res.status(200).json(result);
	});
};

module.exports = getGroupTests;
