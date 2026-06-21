const express = require("express");

const {
  submitQuizController,
} = require("../controllers/quiz.controller");

const router = express.Router();

router.post("/submit", submitQuizController);

module.exports = router;