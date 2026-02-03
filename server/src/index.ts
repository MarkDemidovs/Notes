import express from "express";
import dotenv from "dotenv";
import usersRouter from "./routes/users";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/users", usersRouter);

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
