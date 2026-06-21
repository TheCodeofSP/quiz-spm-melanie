const express = require("express");

const {
  getAllProspects,
  getProspectById,
  updateProspectStatus,
  addProspectNote,
  exportProspectsCsv,
  getAdminStats,
  deleteProspect,
} = require("../controllers/admin.controller");

const router = express.Router();

router.get("/prospects", getAllProspects);
router.get("/prospects/export", exportProspectsCsv);
router.get("/stats", getAdminStats);
router.get("/prospects/:id", getProspectById);
router.patch("/prospects/:id/status", updateProspectStatus);
router.post("/prospects/:id/notes", addProspectNote);
router.delete("/prospects/:id", deleteProspect);

module.exports = router;
