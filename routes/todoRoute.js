const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    msg: "GET in todoRoute",
  });
});

router.get("/search", (req, res) => {
  const { title } = req.query;
  res.status(200).json({
    msg: "GET in todoRoute search",
    data: title,
  });
});

module.exports = router;
