import express from 'express';
import CoursesMetaDAO from '../dao/coursesMetaDAO.js';

const router = express.Router();

// Fetch all courses metadata
router.get('/', async (req, res) => {
  try {
    const courses = await CoursesMetaDAO.getAllCourses();
    res.json(courses);
  } catch (err) {
    console.error('Error fetching all courses:', err);
    res.status(500).json({ error: 'Failed to fetch all courses' });
  }
});

// Fetch course metadata by course name
router.get('/:courseName', async (req, res) => {
  try {
    const { courseName } = req.params;
    // Call the correct method in CoursesMetaDAO
    const course = await CoursesMetaDAO.getCourseMetaByName(courseName); 
    if (!course) {
      return res.status(404).json({ error: 'Course not found in metadata' });
    }
    res.json(course);
  } catch (err) {
    console.error(`Error fetching course ${courseName}:`, err);
    res.status(500).json({ error: 'Failed to fetch course metadata' });
  }
});

export default router;
