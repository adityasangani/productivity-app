const express = require("express");
const authRouter = require("./routes/auth/authRouter");
const userRouter = require("./routes/user/userRouter");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
