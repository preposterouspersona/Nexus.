import express from "express";
import { serve } from "inngest/express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { inngest, functions } from "./config/inngest.js";

const app = express();

app.use(express.json());
app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(ENV.PORT, () => {
    console.log("Server started :", ENV.PORT);
    connectDB();
});