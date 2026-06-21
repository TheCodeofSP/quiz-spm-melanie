const mongoose = require("mongoose");

const quizProfileEnum = [
  "BOULE_DE_NERFS",
  "CROQUE_TOUT",
  "DOUCE_MELANCOLIE",
  "GONFLEE_A_BLOC",
];

const prospectStatusEnum = [
  "NEW_LEAD",
  "CALL_PROPOSED",
  "APPOINTMENT_SCHEDULED",
  "INTERVIEW_COMPLETED",
  "SUPPORT_PROPOSED",
  "CLIENT",
  "ARCHIVED",
];

const answerSchema = new mongoose.Schema(
  {
    questionId: {
      type: String,
      required: true,
    },
    answerKey: {
      type: String,
      required: true,
    },
    answerLabel: {
      type: String,
      required: true,
    },
  },
  { _id: false },
);

const scoresSchema = new mongoose.Schema(
  {
    bouleDeNerfs: {
      type: Number,
      default: 0,
    },
    croqueTout: {
      type: Number,
      default: 0,
    },
    douceMelancolie: {
      type: Number,
      default: 0,
    },
    gonfleeABloc: {
      type: Number,
      default: 0,
    },
  },
  { _id: false },
);

const quizAttemptSchema = new mongoose.Schema(
  {
    quizDate: {
      type: Date,
      default: Date.now,
    },

    profiles: [
      {
        type: String,
        enum: quizProfileEnum,
      },
    ],

    scores: scoresSchema,

    answers: [answerSchema],
  },
  { _id: false },
);

const QuizProspectSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },

    participantInfo: {
      age: {
        type: Number,
        min: 12,
        max: 80,
        default: null,
      },

      hasHormonalContraception: {
        type: Boolean,
        default: null,
      },

      hormonalContraceptionName: {
        type: String,
        trim: true,
        default: "",
      },
    },

    quizDate: {
      type: Date,
      default: Date.now,
    },

    profiles: [
      {
        type: String,
        enum: quizProfileEnum,
        required: true,
      },
    ],

    scores: scoresSchema,

    answers: [answerSchema],

    consents: {
      resultEmail: {
        type: Boolean,
        required: true,
      },
      contactPermission: {
        type: Boolean,
        required: true,
      },
    },

    status: {
      type: String,
      enum: prospectStatusEnum,
      default: "NEW_LEAD",
    },

    firstContactAt: {
      type: Date,
      default: null,
    },

    lastContactAt: {
      type: Date,
      default: null,
    },

    notes: [
      {
        content: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    history: [
      {
        action: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    quizAttempts: {
      type: [quizAttemptSchema],
      default: [],
    },
  },

  {
    timestamps: true,
  },
);

module.exports = mongoose.model("QuizProspect", QuizProspectSchema);
