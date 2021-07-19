const db = require('../../../db-config')

const createArticle = (req, res) => {
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({msg: "You need to be administrator"})
    }
    const { title, body, userId } = req.body
    const sql = `INSERT INTO article (title, body, user_id) VALUES(?, ?, ?)`

    db.query(sql, [title, body, userId], (err, result)=>{
        if(err){
            res.status(500).json(err)
            throw err
        }
        res.status(200).json({msg: 'Article posted successfully'})
    })
}

module.exports = createArticle