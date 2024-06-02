import { Request, Response } from 'express'
import StudentService from '../services/StudentService'

class StudentController{
  async  getStudentList(req: Request, res: Response) {
    const studentService = new StudentService();
    const resposta = await studentService.getStudentList();
    if (resposta.tipo == 'Sucess'){
      res.status(200).json({ Search: resposta });
    }else{
      console.error('Erro ao obter lista de alunos:', resposta);
      res.status(500).json({ error: 'Erro ao obter lista de alunos' });
    }
  }

async  getStudent(req: Request, res: Response) {
  const studentService = new StudentService();
  const resposta =  await studentService.getStudent(req, res);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);
  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Aluno não encontrado'})
  
  }else{
    console.error('Erro ao obter alunos:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter alunos' });
  }
}

async postRegisterStudent(req: Request, res: Response) {
  if(req.body.last_name != null && req.body.name != null){
    const studentService = new StudentService();
  const resposta = await studentService.postRegisterStudent(req, res);

  if (resposta.tipo == "Sucess"){
    res.status(201).json(resposta);

  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Aluno não encontrado'})
  
  }else{
    console.error('Erro ao obter alunos:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter alunos' });
  }
}else{
  res.status(400).json({Error: "Parâmetros invalidos"});
}
}

async deleteStudent(req: Request, res: Response) {
  const studentService = new StudentService();
  const resposta = await studentService.deleteStudent(req, res);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);

  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Aluno não encontrado'})
  
  }else{
    console.error('Erro ao obter alunos:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter alunos' });
  }
}

async putStudent(req: Request, res: Response) {
  if(req.body.last_name != null && req.body.name != null){
    const studentService = new StudentService();
  const resposta = await studentService.putStudent(req, res);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);

  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Aluno não encontrado'})
  
  }else{
    console.error('Erro ao obter alunos:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter alunos' });
  }
  
}else{
  res.status(400).json({Error: "Parâmetros invalidos"});
}
}

async patchStudent(req: Request, res: Response) {
  if(req.body.last_name != null && req.body.name != null){
    const studentService = new StudentService();
  const resposta = await studentService.putStudent(req, res);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);

  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Aluno não encontrado'})
  
  }else{
    console.error('Erro ao obter alunos:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter alunos' });
  }
}else{
  res.status(400).json({Error: "Parâmetros invalidos"});
}
}

async getStudentRegister(req: Request, res: Response) {
  const studentService = new StudentService();
  const resposta =  await studentService.getStudentRegister(req, res);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);
  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Aluno não encontrado'})
  
  }else{
    console.error('Erro ao obter aluno:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter aluno' });
  }
}

}

  export default StudentController