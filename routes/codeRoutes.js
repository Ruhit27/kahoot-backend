import { Router } from "express";
import Code from "../model/codeSchema.js";

const router = Router();

// Generate and store a new random code
router.post("/generateCode", async (req, res) => {
  const randomCode = Math.random().toString(6).substr(2, 4).toUpperCase(); // Generate random code
  const newCode = new Code({ code: randomCode });
  console.log(newCode);

  try {
    await newCode.save();
    res.json({ success: true, message: "Code generated", code: randomCode });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to save code" });
  }
});

router.get("/codes", async (req, res) => {
  try {
    const codes = await Code.find();
    res.json(codes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch codes" });
  }
});

router.put("/update/:oldCode", async (req, res) => {
  const { oldCode } = req.params;
  const { newCode } = req.body;

  try {
    const updatedCode = await Code.findOneAndUpdate(
      { code: oldCode },
      { code: newCode },
      { new: true }
    );

    if (!updatedCode) {
      return res.status(404).json({ error: "Code not found" });
    }

    res.json({ success: true, message: "Code updated", updatedCode });
  } catch (error) {
    res.status(500).json({ error: "Failed to update code" });
  }
});

export default router;
