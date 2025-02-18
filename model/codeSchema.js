import mongoose from "mongoose";

const CodeSchema = new mongoose.Schema({
  code: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Code = mongoose.model("Code", CodeSchema);
export default Code;
