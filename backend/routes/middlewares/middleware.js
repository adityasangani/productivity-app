const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res
      .status(401)
      .json({ message: "Unauthorized user. No token provided." });
  try {
    const decoded = jwt.verify(token, jwtSecret);
    if (decoded) {
      req.userId = decoded.userId;
      next();
    } else {
      res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  } catch (e) {
    res
      .status(401)
      .json({ message: "Unauthorized: Invalid token", error: e.message });
  }
};

module.exports = {
  isAuthenticated,
};
