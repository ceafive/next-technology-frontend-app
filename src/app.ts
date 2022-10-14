import cors from "cors";
import express from "express";
import helmet from "helmet";
import path from "path";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler";
import fourOhFour from "./middleware/fourOhFour";
import root from "./routes/root";
import config from "./config";

const app = express();

// Apply most middleware first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

// Apply routes before error handling
app.use("/health", (_, res) => {
  res.status(200).send("HEALTHY!!!!!");
});
app.use("/api", root);

if (config.nodeEnv === "production") {
  app.use(express.static(path.join(__dirname, "build")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

// Apply error handling last
app.use(fourOhFour);
app.use(errorHandler);

export default app;
