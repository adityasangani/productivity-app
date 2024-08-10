const express = require("express");
const authRouter = require("./routes/auth/authRouter");
const userRouter = require("./routes/user/userRouter");

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("api/v1/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
