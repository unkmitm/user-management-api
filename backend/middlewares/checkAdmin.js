// admin 
const checkAdmin = async (req, res, next) => {
  try {
    console.log(req.user)
    if (req.user && req.user.role === "admin") {
      return next();
    }
    return res.status(403).json({ msg: "Access denied. Admins only." });
  } catch (err) {
    return res.status(500).json({ msg: "Server error" });
  }
};


module.exports = checkAdmin;