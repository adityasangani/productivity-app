const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");

const router = express.Router();
const jwtSecret = process.env.JWT_SECRET;

const prisma = new PrismaClient();

router.use(cookieParser());
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.post("/signup", async (req, res) => {
  const userDetails = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        email: userDetails.email,
        name: userDetails.name,
        password: userDetails.password,
      },
    });
    const userId = newUser.id;
    const userName = newUser.name;
    const token = jwt.sign({ userId, userName }, jwtSecret);
    res.cookie("token", token);
    res.send({
      message: "New user created.",
      token,
    });
  } catch (e) {
    return res.status(411).json({
      message: "Unable to create user.",
      error: e,
    });
  }
});

router.post("/signin", async (req, res) => {
  const userDetails = req.body;
  const existingUser = await prisma.user.findUnique({
    where: {
      email: userDetails.email,
      password: userDetails.password,
    },
  });

  if (!existingUser) {
    return res.status(401).json({
      message: "Invalid credentials.",
    });
  } else {
    const userId = existingUser.id;
    const userName = existingUser.name;
    const token = jwt.sign({ userId, userName }, jwtSecret);
    res.cookie("token", token);
    res.json({
      message: "User found",
      userId,
    });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Cookie cleared",
  });
});

module.exports = router;
