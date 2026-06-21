const QuizProspect = require("../models/QuizProspect");

const { buildProspectsCsv } = require("../services/csv.service");
const { buildStats } = require("../services/stats.service");

const getAllProspects = async (req, res) => {
  try {
    const { status, contactPermission, profile, search } = req.query;

    const filters = {};

    if (status) {
      filters.status = status;
    }

    if (contactPermission !== undefined) {
      filters["consents.contactPermission"] = contactPermission === "true";
    }

    if (profile) {
      filters.profiles = profile;
    }

    if (search) {
      filters.$or = [
        {
          firstName: {
            $regex: search,
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    const prospects = await QuizProspect.find(filters)
      .sort({
        updatedAt: -1,
      })
      .select(
        "_id firstName email profiles status quizDate createdAt updatedAt",
      );

    res.status(200).json(prospects);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des prospects",
      error: error.message,
    });
  }
};

const getProspectById = async (req, res) => {
  try {
    const { id } = req.params;

    const prospect = await QuizProspect.findById(id);

    if (!prospect) {
      return res.status(404).json({
        message: "Prospect introuvable",
      });
    }

    res.status(200).json(prospect);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération du prospect",
      error: error.message,
    });
  }
};

const updateProspectStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const prospect = await QuizProspect.findById(id);

    if (!prospect) {
      return res.status(404).json({
        message: "Prospect introuvable",
      });
    }

    const previousStatus = prospect.status;

    prospect.status = status;

    prospect.history.push({
      action: `Statut modifié : ${previousStatus} → ${status}`,
    });

    await prospect.save();

    res.status(200).json({
      message: "Statut mis à jour",
      prospect,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour du statut",
      error: error.message,
    });
  }
};

const addProspectNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const prospect = await QuizProspect.findById(id);

    if (!prospect) {
      return res.status(404).json({
        message: "Prospect introuvable",
      });
    }

    prospect.notes.push({
      content,
      createdAt: new Date(),
    });

    prospect.history.push({
      action: `Note ajoutée : ${content}`,
    });

    await prospect.save();

    res.status(201).json({
      message: "Note ajoutée",
      notes: prospect.notes,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de l'ajout de la note",
      error: error.message,
    });
  }
};

const exportProspectsCsv = async (req, res) => {
  try {
    const prospects = await QuizProspect.find();

    const csv = buildProspectsCsv(prospects);

    res.header("Content-Type", "text/csv");
    res.attachment("prospects.csv");

    return res.send(csv);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de l'export CSV",
      error: error.message,
    });
  }
};

const getAdminStats = async (req, res) => {
  try {
    const prospects = await QuizProspect.find();

    const stats = buildStats(prospects);

    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des statistiques",
      error: error.message,
    });
  }
};

const deleteProspect = async (req, res) => {
  try {
    const { id } = req.params;

    const prospect = await QuizProspect.findById(id);

    if (!prospect) {
      return res.status(404).json({
        message: "Prospect introuvable",
      });
    }

    await QuizProspect.findByIdAndDelete(id);

    res.status(200).json({
      message: "Prospect supprimé",
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la suppression",
      error: error.message,
    });
  }
};

module.exports = {
  getAllProspects,
  getProspectById,
  updateProspectStatus,
  addProspectNote,
  exportProspectsCsv,
  getAdminStats,
  deleteProspect,
};
