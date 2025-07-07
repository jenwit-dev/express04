const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    msg: "GET in userRoute",
  });
});

router.post("/", (req, res) => {
  //   console.log(req.body);
  const { title } = req.body;
  res.status(200).json({
    msg: "POST in userRoute",
    data: title,
  });
});

module.exports = router;
