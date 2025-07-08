const express = require("express");
const router = express.Router();
// GET http://localhost:8080/todo
router.get("/", (req, res) => {
  res.status(200).json({
    msg: "GET in todoRoute",
  });
});
// GET http://localhost:8080/todo/search?title=star
router.get("/search", (req, res) => {
  const { title } = req.query;
  // console.log(qqq);
  res.status(200).json({
    msg: "GET in todoRoute search",
    data: title,
  });
});

module.exports = router;
