const db = require('../../../db-config');

const createTestResult = async (req, res) => {
	if (req.user.role !== 'ADMIN') {
		res.status(401).json({ msg: 'You need to be administrator' });
	}
	const { testId, userId, score } = req.body;

	const sql = `INSERT INTO test_results (test_id, user_id, score) VALUES(?, ?, ?)`;

	db.query(sql, [testId, userId, score], (err, result) => {
		if (err) {
			res.status(500).json(err);
			throw err;
		}
		res.status(200).json({ msg: 'Test result added.' });
	});
};

module.exports = createTestResult;
