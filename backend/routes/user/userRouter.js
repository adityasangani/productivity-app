const { isAuthenticated } = require("../middlewares/middleware");
const express = require("express");

const router = express.Router();

router.get("/dashboard", isAuthenticated, (req, res) => {
  res.json({
    message: "In the dashboard successfully",
  });
});

module.exports = router;
