import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import CoursesMetaDAO from './dao/coursesMetaDAO.js';
import courses from './routes/coursesMeta.route.js'; // Import the courses route

dotenv.config();

const app = express();

// Use CORS and JSON middleware
app.use(cors());
app.use(express.json());

// Initialize MongoDB client
const client = new MongoClient(process.env.COURSES_DB_URI);

// Set up the courses route
app.use('/api/v1/courses', courses);

// API endpoint to fetch specific course content by course name (from respective course collection)
app.get('/api/v1/:courseName', async (req, res) => {
  try {
    const { courseName } = req.params;
    const database = client.db();
    const courseCollection = database.collection(courseName); // Dynamically select the course collection
    const courseContent = await courseCollection.find({}).toArray();
    res.json(courseContent); // Return the course content
  } catch (err) {
    console.error(`Error fetching course ${req.params.courseName}:`, err);
    res.status(500).json({ error: 'Failed to fetch course content' });
  }
});

app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

// Connect to MongoDB and start the server
async function startServer() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB successfully');

    // Inject the MongoClient instance into the app
    app.locals.client = client;

    // Initialize CoursesMetaDAO with the MongoDB client connection
    await CoursesMetaDAO.injectDB(client);

    // Start the server only after successful MongoDB connection
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit if connection fails
  }
}

startServer();

// Named export of app
export { app };
