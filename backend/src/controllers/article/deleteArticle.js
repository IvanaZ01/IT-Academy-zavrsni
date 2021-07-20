const db = require('../../../db-config');

const deleteArticle = (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
    const articleId = req.params.id
	const sql = `DELETE FROM article WHERE article_id = ?;`;

    db.query(sql, [articleId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: "Article successfully deleted"})
    })

};

module.exports = deleteArticle;