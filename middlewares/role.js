const roleCheck = (role) => (req, res, next) => {
    !role.includes(req.User.userRole)
      ? res.status(401).json("Forbidden")
      : next();
  };
  
  module.exports = roleCheck;
  