const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  console.log("Auth middleware running");
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    console.log("No token found");
    return res.status(401).json({ msg: "Authentication required" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = decoded;
    console.log("Token valid, user id:", decoded.id);
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = authenticateUser;
