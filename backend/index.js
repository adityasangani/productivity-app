const cors = require("cors");
const express = require("express");
const authRouter = require("./routes/auth/authRouter");
const userRouter = require("./routes/user/userRouter");
const PORT = process.env.PORT || 8080;

const app = express();
const allowedOrigins = [
  "https://productivity-app-pearl.vercel.app", //for vercel
  "http://localhost:5173", //for local
];

app.use(
  cors({
    origin: allowedOrigins, //vercel site's URL
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
