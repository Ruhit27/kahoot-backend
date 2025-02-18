import mongoose from "mongoose";
import Quizz from "../model/quizz.js"; // Make sure the file exists & has .js extension

const createQuizz = async (req, res) => {
  try {
    const { question, options, answer } = req.body;

    if (!question || !options || !answer) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newQuiz = new Quizz({ question, options, answer });

    await newQuiz.save(); // ✅ Save to DB

    res.status(201).json({ msg: "Quizz created Successfully", newQuiz });
  } catch (error) {
    console.error("Error creating quizz:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

const getAllQuizz = async (req, res) => {
  const allQuizz = await Quizz.find();
  res.send(allQuizz);
};

const deleteQuizz = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if id is provided
    if (!id) {
      return res.status(400).json({ msg: "Quiz ID is required" });
    }

    // Validate if the id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Invalid quiz ID format" });
    }

    // Find and delete the quiz
    const deletedQuiz = await Quizz.findByIdAndDelete(id);

    // If quiz wasn't found
    if (!deletedQuiz) {
      return res.status(404).json({ msg: "Quiz not found" });
    }

    res.status(200).json({ msg: "Quiz deleted successfully", deletedQuiz });
  } catch (error) {
    console.error("Error deleting quiz:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
// Update the export statement to include deleteQuizz
export { createQuizz, getAllQuizz, deleteQuizz };
