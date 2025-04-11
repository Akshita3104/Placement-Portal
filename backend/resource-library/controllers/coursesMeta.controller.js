import CoursesMetaDAO from "../dao/coursesMetaDAO.js";

export default class CoursesMetaController {
  static async apiGetAllCourses(req, res) {
    try {
      const courses = await CoursesMetaDAO.getAllCourses();
      res.json(courses);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiGetCourseMetaByName(req, res) {
    try {
      const courseName = req.params.courseName;
      const course = await CoursesMetaDAO.getCourseMetaByName(courseName);
      
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }

      res.json(course);
    } catch (e) {
      console.error(`API error: ${e}`);
      res.status(500).json({ error: e.message });
    }
  }

  static async apiGetCourseById(req, res) {
    try {
      const course = await CoursesMetaDAO.getCourseById(req.params.id);
      if (!course) return res.status(404).json({ error: "Course not found" });
      res.json(course);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}

