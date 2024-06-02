import knex from '../database/connection'
import { Request, Response } from 'express'
interface  Retorno {
    tipo: string;
    description: any;
  }

class StudentService {

    async getStudentList() {
        try {
            const students = await knex('students').select('students.*')
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: students
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
    async getStudent(req: Request, res: Response) {
        const studentId = req.params.student_id;
        try {
            const student = await knex('students').select('*').where('id', studentId);
            if (student) {
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: student
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

    async postRegisterStudent(req: Request, res: Response) {
        const { name, last_name } = req.body;
        const name_body = name;
        const last_name_body = last_name;
        try {
            const newStudent = await knex('students').insert({ name: name_body, last_name: last_name_body });
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: newStudent
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

    async deleteStudent(req: Request, res: Response) {
        const studentId = req.params.student_id;
        try {
            const student = await knex('students').select('*').where('id', studentId);
            if (student) {
                const student = await knex('students').where('id', studentId).del();
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: student
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

    async putStudent(req: Request, res: Response) {
        const studentId = req.params.student_id;
        const { name, last_name } = req.body;
        const name_body = name;
        const last_name_body = last_name;
        try {
            const student = await knex('students').select('*').where('id', studentId);
        if (student) {
            const student = await knex('students').where({ id: studentId }).update(
                {
                  name: name_body, last_name: last_name_body
                },
                ['id', 'name', 'last_name']
              );
            
            const resposta: Retorno = {
                tipo: 'Sucess',
                description: student
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

    async patchStudent(req: Request, res: Response) {
        const studentId = req.params.student_id;        
        const { name, last_name } = req.body;
        const name_body = name;
        const last_name_body = last_name;
        try {
            const student = await knex('students').select('*').where('id', studentId);
            if (student) {
                const student = await knex('students').where({ id: studentId }).update(
                    {
                      name: name_body, last_name: last_name_body
                    },
                    ['id', 'name', 'last_name']
                  );
                const resposta: Retorno = {
                    tipo: 'Sucess',
                    description: student
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


    async getStudentRegister(req: Request, res: Response) {
        const studentId = req.params.student_id;
        try {
            const list = await knex('course_student')
            .join('courses', 'courses.id', '=', 'course_student.course_id')
            .join('students', 'students.id', '=', 'course_student.student_id')
            .where('students.id', studentId)
            .select(
                'courses.*'
            )
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
export default StudentService
