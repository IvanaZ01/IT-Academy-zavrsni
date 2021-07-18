const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) =>{
    const headers = req.headers['authorization']
    const token = headers && headers.split(' ')[1]

    if(!token){
        console.log('No token at all.');
        res.status(401).send('No JWT token.');
    }else{
        jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
            if (err) {
                res.status(400).send('JWT token is not valid.');
                throw err
              }
            req.user = user
            next()
        })
    }
}

module.exports = authenticateToken