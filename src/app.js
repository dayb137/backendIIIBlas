import express from "express";
import mongoose from "mongoose";
import mocksRouter from "./routes/mocks.router.js";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";

const app = express();

app.use(express.json());


app.use("/api/mocks", mocksRouter);
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);

const PORT = 3000;
const MONGO_URI = "mongodb://localhost:27017/mocksDB";

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB conectado ");
        app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
    })
    .catch(err => console.error("Error de conexión a Mongo:", err));
