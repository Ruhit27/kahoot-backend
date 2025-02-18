import { Router } from "express";
import {
  createQuizz,
  deleteQuizz,
  getAllQuizz,
} from "../controller/quizzController.js";

const router = Router();

router.post("/createQuizz", createQuizz);
router.get("/getAllQuizz", getAllQuizz);
router.delete("/deleteQuizz/:id", deleteQuizz);
export default router;
