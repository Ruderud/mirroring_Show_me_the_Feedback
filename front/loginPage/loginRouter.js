const { Router } = require("express");
const path = require("path");
const router = Router();
// router.get("/", (req, res, next) => {
//   res.sendFile(path.join(__dirname + "/", "login.html"));
// });
// router.get("/login.css", (req, res, next) => {
//   res.sendFile(path.join(__dirname + "/", "login.css"));
// });
// router.get("/login.js", (req, res, next) => {
//   res.sendFile(path.join(__dirname + "/", "login.js"));
// });
router.get("/", (req, res, next) => {
  res.cookie("token", "token");
  res.status(200).send("로그인페이지 frontEND서버 응답 입니다");
});

module.exports = router;
