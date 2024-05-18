const CourseConnect = require('../models/Course');
import sequelize from '../utils/sequelize';

interface  Retorno {
    tipo: string;
    description: any;
  }

class CourseService {

    async getCourseList() {
        try {
            const courses = await CourseConnect.findAll();
            console.log(courses);
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: courses
              };
            return resposta;
        } catch (error) {
            console.log(error);
            const resposta: Retorno = {
            tipo: 'Error',
            description: error
            };
            return resposta;
        }
    }

    async getCourse(req) {
        const courseId = req.params.course_id;
        try {
            const course = await CourseConnect.findByPk(courseId);
            if (course) {
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: course
                  };        
                return resposta;
        } else {
            const resposta: Retorno = {
                tipo: 'Error',
                description: 'NOT FOUND'
              };
              return resposta;
        }
        } catch (error) {
            const resposta: Retorno = {
                tipo: 'Error',
                description: error
              };
              return resposta;
        }
    }

    async postRegisterCourse(req) {
        const { name, description } = req.body;
        try {
            const newCourse = await CourseConnect.create({ name, description });
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: newCourse
            };
            return resposta;

        } catch (error) {
            const resposta: Retorno = {
                tipo: 'Error',
                description: error
              };
              return resposta;
        }
    }

    async deleteCourse(req) {
        const courseId = req.params.course_id;
        try {
            const course = await CourseConnect.findByPk(courseId);
            if (course) {
                await course.destroy();
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: course
                  };        
                return resposta;
            } else {
                const resposta: Retorno = {
                    tipo: 'Error',
                    description: 'NOT FOUND'
                  };
                  return resposta;
            }
        } catch (error) {
            const resposta: Retorno = {
                tipo: 'Error',
                description: error
              };
              return resposta;
        }
    }

    async putCourse(req) {
        const courseId = req.params.course_id;
        const { name, description } = req.body;
        try {
            const course = await CourseConnect.findByPk(courseId);
        if (course) {
            await course.update({ name, description });
            
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: course
            };

            return resposta;
        } else {
            const resposta: Retorno = {
                tipo: 'Error',
                description: 'NOT FOUND'
              };
              return resposta;
        }
        } catch (error) {
            const resposta: Retorno = {
                tipo: 'Error',
                description: error
              };
              return resposta;
        }
    }

    async patchCourse(req, res) {
        const courseId = req.params.course_id;
        const { name, description } = req.body;
        try {
            const course = await CourseConnect.findByPk(courseId);
            if (course) {
                await course.update({ name, description });
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: course
                  };
                  return resposta;
            } else {
                const resposta: Retorno = {
                    tipo: 'Error',
                    description: 'NOT FOUND'
                  };
                  return resposta;
            }
        } catch (error) {
            const resposta: Retorno = {
                tipo: 'Error',
                description: error
              };
              return resposta;
        }
    }
  }

module.exports = new CourseService();