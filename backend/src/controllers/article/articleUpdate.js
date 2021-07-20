const db = require('../../../db-config');

const updateArticle = (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
    const articleId = +req.params.id
	const { title, body, imageUrl } = req.body;
	const sql = `UPDATE article SET title = ?, body = ?, image_url = ? WHERE article_id = ?;`;

    db.query(sql, [title, body, imageUrl, articleId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: 'Article updated successfully'})
    })

};

module.exports = updateArticle;
