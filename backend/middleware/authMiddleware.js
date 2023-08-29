//importing token
const jwt = require("jsonwebtoken");

function authorize(req, res, next) {
  console.log("authorizing...");
  try {
    //check request has token in authorization header
    let token = req.header("Authorization");
    if (!token) {
      return res.status(403).json({ error: "No token available" });
    }
    console.log("token :", token);

    token = token.replace("Bearer", "");
    console.log(token);

    //check token is not expired and is valid
    if (payload.error) {
      return res.status(403).json({ error: payload.error });
    }

    //Attach payload from token to request object

    req.id = payload.id;
    req.username = payload.username;

    //move to next requested route
    next();
  } catch (err) {
    console.log(err.message);
    res.status(403).json({ error: err.message });
  }
}

module.exports = { authorize };