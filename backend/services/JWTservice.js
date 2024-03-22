const jwt = require("jsonwebtoken");
const RefreshToken = require("../models/token");

const ACCESS_TOKEN_SECRET = "";
const REFRESH_TOKEN_SECRET = "";

class JWTservice {
  // sign access token
  static signAccesstoken(payload, expiryTime) {
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: expiryTime });
  }
  // sign refresh token
  static signRefreshtoken(payload, expiryTime) {
    return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: expiryTime });
  }
  // verify access token
  static verifyAccesstoken(token) {
    return jwt.verify(token, ACCESS_TOKEN_SECRET);
  }
  // verify refresh token
  static verifyRefreshtoken(token) {
    return jwt.verify(token, REFRESH_TOKEN_SECRET);
  }
  // store refresh token
  static async storeRefreshToken(token, userId) {
    try {
      const newToken = new RefreshToken({
        token: token,
        userId: userId,
      });
      await newToken.save();
    } catch (error) {
      console.log(error);
    }
  }
}
