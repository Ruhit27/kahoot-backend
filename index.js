import express from "express";
import cors from "cors"; // Import CORS
import { connectToDatabase } from "./connection.js";
import codeRouter from "./routes/codeRoutes.js";
import quizzRouter from "./routes/quizzRoute.js";
const port = 5002;
const app = express();
connectToDatabase();

app.use(cors());

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello, Sam");
});

app.use("/", codeRouter);
app.use("/", quizzRouter);

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});

// mvc method
