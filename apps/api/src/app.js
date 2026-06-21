const express = require("express");
const cors = require("cors");

const quizProspectRoutes = require("./routes/quizProspect.routes");
const quizRoutes = require("./routes/quiz.routes");
const emailRoutes = require("./routes/email.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "API Quiz SPM opérationnelle",
  });
});

app.use("/quiz-prospects", quizProspectRoutes);
app.use("/quiz", quizRoutes);
app.use("/emails", emailRoutes);
app.use("/admin", adminRoutes);

module.exports = app;