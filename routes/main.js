const express = require("express");
const router = express.Router();
const controller = require("../controller/main");

router.post("/user/signin", controller.signin);

module.exports = router;