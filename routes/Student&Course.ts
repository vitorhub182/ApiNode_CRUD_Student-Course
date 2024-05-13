import express from '../utils/express';
const router = express.Router();

const ControllerCourse = require('../controllers/ControllerCourse');
router.get('/course/', ControllerCourse.getCourseList);
router.get('/course/COURSE=:course_id', ControllerCourse.getCourse);
router.post('/course/', ControllerCourse.postRegisterCourse);
router.delete('/course/COURSE=:course_id', ControllerCourse.deleteCourse);
router.put('/course/COURSE=:course_id', ControllerCourse.putCourse);
router.patch('/course/COURSE=:course_id', ControllerCourse.patchCourse);

const ControllerStudent = require('../controllers/ControllerStudent');
router.get('/student/', ControllerStudent.getStudentList);
router.get('/student/STUDENT=:student_id', ControllerStudent.getStudent);
router.post('/student/', ControllerStudent.postRegisterStudent);
router.delete('/student/STUDENT=:student_id', ControllerStudent.deleteStudent);
router.put('/student/STUDENT=:student_id', ControllerStudent.putStudent);
router.patch('/student/STUDENT=:student_id', ControllerStudent.patchStudent);


module.exports = router;