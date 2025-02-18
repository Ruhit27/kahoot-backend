import mongoose from "mongoose";

const quizzSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const Quizz = mongoose.model("quizz", quizzSchema);

export default Quizz;
