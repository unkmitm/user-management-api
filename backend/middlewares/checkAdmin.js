// admin 
const checkAdmin = async (req, res, next) => {
  try {
    if (req.user && req.user.role === "admin") {
      next();
    }
  } catch (err) {
    return res.status(403).json({ msg: "Access denied. Admins only." });
  }
};

module.exports = checkAdmin;