import knex from '../database/connection'
import { Request, Response } from 'express'

interface  Retorno {
    tipo: string;
    description: any;
  }

class CourseService {

    async getCourseList() {
        
        try {
            const courses = await knex('courses').select('courses.*')
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


    async getCourse(req: Request, res: Response) {
        const courseId = req.params.course_id;
        try {
            const course = await knex('courses').select('*').where('id', courseId);
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

    async postRegisterCourse(req: Request, res: Response) {
        const { name, description } = req.body;
        const name_body = name;
        const description_body = description;
        try {
            const newCourse = await knex('courses').insert({ name: name_body, description: description_body });
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

    async deleteCourse(req: Request, res: Response) {
        const courseId = req.params.course_id;
        try {
            const course = await knex('courses').select('*').where('id', courseId);
            if (course) {
                const course = await knex('courses').where('id', courseId).del();
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

    async putCourse(req: Request, res: Response) {
        const courseId = req.params.course_id;
        const { name, description } = req.body;
        const name_body = name;
        const description_body = description;
        try {
            const course = await knex('courses').select('*').where('id', courseId);
        if (course) {
            const course = await knex('courses').where({ id: courseId }).update(
                {
                  name: name_body, description: description_body
                },
                ['id', 'name', 'description']
              );
            
            
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

    async patchCourse(req: Request, res: Response) {
        const courseId = req.params.course_id;
        const { name, description } = req.body;
        const name_body = name;
        const description_body = description;
        try {
            const course = await knex('courses').select('*').where('id', courseId);
            if (course) {
                const course = await knex('courses').where({ id: courseId }).update(
                    {
                      name: name_body, description: description_body
                    },
                    ['id', 'name', 'description']
                  );
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

    async postRegister(req: Request, res: Response) {
        const { id_aluno, id_curso } = req.body;
        try {
            const student = await knex('students').select('*').where('id', id_aluno);
            const course = await knex('courses').select('*').where('id', id_curso);
            
            const course_student = await knex('course_student').select('*').
            where('course_id', id_curso)
            .andWhere('student_id', id_aluno)
            .first()
            const exists = course_student ? 1 : 0;

            if (student && course && (exists == 0 )) {

                await knex('course_student').insert({ student_id: id_aluno, course_id: id_curso });

                const registration = await knex('course_student').insert({ course_id: id_curso, student_id: id_aluno });
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: registration
            };
            return resposta;
            }else if (exists != 0){
                const resposta: Retorno = {
                    tipo: 'Error',
                    description: 'ALREADY EXISTS'
                  };
                  return resposta;                
            }else {
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

    async getCourseRegister(req: Request, res: Response) {
        const courseId = req.params.course_id;
        try {
            const list = await knex('course_student')
            .join('courses', 'courses.id', '=', 'course_student.course_id')
            .join('students', 'students.id', '=', 'course_student.student_id')
            .where('courses.id', courseId)
            .select(
                'students.*')

            if (list) {
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: list 
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
export default CourseService
