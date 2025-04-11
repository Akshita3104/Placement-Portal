import express from "express";
import cors from "cors";
import courses from "./api/courses.route.js"; // Router for courses

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON request body

// Define the route for fetching courses
app.use("/api/v1/courses", courses);

// Catch-all for undefined routes
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
