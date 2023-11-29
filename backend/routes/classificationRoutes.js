const express = require("express");
const {
  classifyMessage,
} = require("../controllers/messageClassification");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(classifyMessage);

module.exports = router;
