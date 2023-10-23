const mongoose = require("mongoose");

const instrumentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  abbreviation: { type: String, required: true },
  primaryInst: {type: mongoose.Types.ObjectId, ref: "Inst"},
  players: [{ type: mongoose.Types.ObjectId, required: true, ref: "Player" }],
});

module.exports = mongoose.model("Inst", instrumentSchema);
