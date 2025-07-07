require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const userRoute = require("./routes/userRoute");
const todoRoute = require("./routes/todoRoute");
const notFoundMiddleware = require("./middlewares/not-found");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);
// console.log(userRoute);

app.use("/todo", todoRoute);

// app.use((req, res) => {
//   res.status(404).json({ msg: "Path Not Found" });
// });

// same as above
app.use(notFoundMiddleware);

app.use((err, req, res, next) => {
  res.status(500).json({
    msg: err.message,
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
