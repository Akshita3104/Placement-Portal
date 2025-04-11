import { ObjectId } from 'mongodb'; // If your id is stored as ObjectId in MongoDB

let coursesMeta;

class CoursesMetaDAO {
  // Ensure the database connection is set
  static async injectDB(conn) {
    if (coursesMeta) {
      return; // If the connection has already been set, do nothing
    }
    try {
      coursesMeta = await conn.db().collection('CoursesMeta'); // Set the collection
      console.log('CoursesMeta collection initialized'); // Log to confirm initialization
    } catch (err) {
      console.error('Error while injecting DB in CoursesMetaDAO:', err);
      throw new Error('Database connection error');
    }
  }

  // Get all courses metadata from the CoursesMeta collection
  static async getAllCourses() {
    try {
      const courses = await coursesMeta.find({}).toArray(); // Fetch all courses from CoursesMeta
      return courses;
    } catch (err) {
      console.error('Error fetching courses:', err);
      throw new Error('Error fetching courses');
    }
  }

  // Get course metadata by its name from CoursesMeta collection
  static async getCourseMetaByName(courseName) {
    try {
      console.log(`Fetching course metadata with name: ${courseName}`); // Log the course name
      const course = await coursesMeta.findOne({ id: courseName }); // Search by name in CoursesMeta
      return course;
    } catch (err) {
      console.error('Error fetching course by name:', err);
      throw new Error('Error fetching course by name');
    }
  }

  // Get content of a specific course by its name (assumes each course is its own collection)
  static async getCourseContentByName(courseName) {
    try {
      const client = await coursesMeta.db().client; // Access the client from the injected connection
      const database = client.db(); // Get the database
      const courseCollection = database.collection(courseName); // Dynamically select the course collection

      // Fetch course content from the selected collection
      const courseContent = await courseCollection.find({}).toArray();
      return courseContent;
    } catch (err) {
      console.error('Error fetching course content by name:', err);
      throw new Error('Error fetching course content');
    }
  }
}

export default CoursesMetaDAO;
