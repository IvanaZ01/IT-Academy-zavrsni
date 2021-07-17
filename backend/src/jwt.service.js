const jwt = require('jsonwebtoken');

const jwtToken = process.env.JWT_SECRET;

function generateAccessToken(user, rememberMe) {
  const payload = {
    username: user.username,
    email: user.email,
  }

  const jwtExpiry = rememberMe ? process.env.JWT_EXPIRY_LONG : process.env.JWT_EXPIRY;

  return jwt.sign(payload, jwtToken, { expiresIn: jwtExpiry });
}


module.exports = {
  generateAccessToken,
}
