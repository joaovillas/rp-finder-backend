import express from "express";
import routes from "./routes";
import morgan from "morgan";
import { default as authRoutes } from "./routes/auth";
import { responseBody } from "./middlewares/response";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

app.use(responseBody);
app.use("/auth", authRoutes);
app.use("/api", routes);

app.get("/", (req, res) => {
  return res.send({ health: true });
});

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
