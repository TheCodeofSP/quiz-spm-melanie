const express = require("express");

const {
  getAllQuizProspects,
  createQuizProspect,
  testScoring,
} = require("../controllers/quizProspect.controller");

const router = express.Router();

router.get("/", getAllQuizProspects);
router.post("/", createQuizProspect);
router.post("/test-scoring", testScoring);

module.exports = router;