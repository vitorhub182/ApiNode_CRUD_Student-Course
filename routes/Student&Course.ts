import express from '../utils/express';
const router = express.Router();
import CourseController  from '../controllers/CourseController';

router.get('/course/', CourseController.getCourseList);
router.get('/course/COURSE=:course_id', CourseController.getCourse);
router.post('/course/', CourseController.postRegisterCourse);
router.delete('/course/COURSE=:course_id', CourseController.deleteCourse);
router.put('/course/COURSE=:course_id', CourseController.putCourse);
router.patch('/course/COURSE=:course_id', CourseController.patchCourse);
/*
const StudentController = require('../controllers/StudentController');
router.get('/student/', StudentController.getStudentList);
router.get('/student/STUDENT=:student_id', StudentController.getStudent);
router.post('/student/', StudentController.postRegisterStudent);
router.delete('/student/STUDENT=:student_id', StudentController.deleteStudent);
router.put('/student/STUDENT=:student_id', StudentController.putStudent);
router.patch('/student/STUDENT=:student_id', StudentController.patchStudent);
*/
module.exports = router;