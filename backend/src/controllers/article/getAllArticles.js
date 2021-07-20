const db = require('../../../db-config');

const getAllArticles = (req, res) => {
	const sql = `SELECT article_id, title, body, image_url, createdAt, first_name, last_name FROM article JOIN user USING(user_id) ORDER BY createdAt DESC`;

    db.query(sql, (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json(result)
    })

};

module.exports = getAllArticles;
