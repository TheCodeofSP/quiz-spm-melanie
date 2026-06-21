const express = require("express");

const {
  sendTestEmailController,
} = require("../controllers/email.controller");

const router = express.Router();

router.post("/test", sendTestEmailController);

module.exports = router;