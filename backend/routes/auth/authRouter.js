const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");

const router = express.Router();
const jwtSecret = process.env.JWT_SECRET;

const prisma = new PrismaClient();

const capitalizeName = (name) => {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

router.use(cookieParser());
const allowedOrigins = [
  "https://productivity-app-pearl.vercel.app", //for vercel
  "http://localhost:5173", //for local
];

router.use(
  cors({
    origin: allowedOrigins, // specify your Vercel site's URL
    credentials: true,
  })
);

router.post("/signup", async (req, res) => {
  const userDetails = req.body;
  console.log(userDetails);
  const firstName = userDetails.firstName;
  const lastName = userDetails.lastName;
  try {
    const newUser = await prisma.user.create({
      data: {
        firstName: capitalizeName(firstName),
        lastName: capitalizeName(lastName),
        email: userDetails.email,
        password: userDetails.password,
      },
    });
    const userId = newUser.id;
    const initials = newUser.firstName[0] + newUser.lastName[0];
    const userFirstName = newUser.firstName;
    const userLastName = newUser.lastName;
    const userEmail = newUser.email;
    req.userId = userId;
    const token = jwt.sign(
      { userId, initials, userFirstName, userLastName, userEmail },
      jwtSecret
    );
    res.cookie("token", token, {
      sameSite: "none",
      maxAge: 3 * 24 * 60 * 60 * 1000,
      secure: true,
      path: "/",
    });
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
    const initials = existingUser.name;
    const userFirstName = existingUser.firstName;
    const userLastName = existingUser.lastName;
    const userEmail = existingUser.email;
    const token = jwt.sign(
      { userId, initials, userFirstName, userLastName, userEmail },
      jwtSecret
    );
    res.cookie("token", token, {
      sameSite: "none",
      maxAge: 3 * 24 * 60 * 60 * 1000,
      secure: true,
      path: "/",
    });

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
