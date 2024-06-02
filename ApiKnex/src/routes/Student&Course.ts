import {express} from '../utils/pacotes';
import CourseController from '../controllers/CourseController'
import StudentController from '../controllers/StudentController';

const courseController = new CourseController();
const studentController = new StudentController();

const router = express.Router();


router.get('/course/', courseController.getCourseList);
router.get('/course/COURSE=:course_id', courseController.getCourse);
router.post('/course/', courseController.postRegisterCourse);
router.delete('/course/COURSE=:course_id', courseController.deleteCourse);
router.put('/course/COURSE=:course_id', courseController.putCourse);
router.patch('/course/COURSE=:course_id', courseController.patchCourse);

router.get('/student/', studentController.getStudentList);
router.get('/student/STUDENT=:student_id', studentController.getStudent);
router.post('/student/', studentController.postRegisterStudent);
router.delete('/student/STUDENT=:student_id', studentController.deleteStudent);
router.put('/student/STUDENT=:student_id', studentController.putStudent);
router.patch('/student/STUDENT=:student_id', studentController.patchStudent);

router.post('/register/', courseController.postRegister);
router.get('/register/student/STUDENT=:student_id', studentController.getStudentRegister);
router.get('/register/course/COURSE=:course_id', courseController.getCourseRegister);
module.exports = router;