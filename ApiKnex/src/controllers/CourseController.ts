import { Request, Response } from 'express'
import CourseService from '../services/CourseService'
class CourseController{
  async  getCourseList(req: Request, res: Response) {
    const courseService = new CourseService();
    const resposta = await courseService.getCourseList();
    if (resposta.tipo == 'Sucess'){
      res.status(200).json({ Search: resposta });
    }else{
      console.error('Erro ao obter lista de cursos:', resposta);
      res.status(500).json({ error: 'Erro ao obter lista de cursos' });
    }
  }


  async  getCourse(req: Request, res: Response) {
    const courseService = new CourseService();
    const resposta =  await courseService.getCourse(req,res);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Curso não encontrado'})
    
    }else{
      console.error('Erro ao obter curso:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter curso' });
    }
  }  
  async postRegisterCourse(req: Request, res: Response) {
    if(req.body.description != null && req.body.name != null){
      const courseService = new CourseService();
    const resposta = await courseService.postRegisterCourse(req,res);
    
    if (resposta.tipo == "Sucess"){
      res.status(201).json(resposta);
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Curso não encontrado'})
    
    }else{
      console.error('Erro ao obter curso:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter curso' });
    }
  }else{
    res.status(400).json({Error: "Parâmetros invalidos"});
  }
  }
  async deleteCourse(req: Request, res: Response) {
    const courseService = new CourseService();
    const resposta = await courseService.deleteCourse(req,res);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Curso não encontrado'})
    
    }else{
      console.error('Erro ao obter curso:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter curso' });
    }
  }
  async putCourse(req: Request, res: Response) {
    if(req.body.description != null && req.body.name != null){
      const courseService = new CourseService();
    const resposta = await courseService.putCourse(req,res);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Curso não encontrado'})
    
    }else{
      console.error('Erro ao obter curso:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter curso' });
    }
    
  }else{
    res.status(400).json({Error: "Parâmetros invalidos"});
  }
  }
  
  async patchCourse(req: Request, res: Response) {
    if(req.body.description != null && req.body.name != null){
      const courseService = new CourseService();
    const resposta = await courseService.putCourse(req,res);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Curso não encontrado'})
    
    }else{
      console.error('Erro ao obter curso:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter curso' });
    }
  }else{
    res.status(400).json({Error: "Parâmetros invalidos"});
  }
  }
  async postRegister(req: Request, res: Response) {
    if((req.body.id_aluno != null) && (req.body.id_curso != null)){
      const courseService = new CourseService();
    const resposta = await courseService.postRegister(req,res);
  
    if (resposta.tipo == "Sucess"){
      res.status(201).json(resposta);
  
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Curso ou usuário não encontrado'})
    
    }else if(resposta.description == "ALREADY EXISTS") {
      res.status(208).json({ status: 'Aluno já registrado'})
    
    }else{
      console.error('Erro ao obter curso:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter Curso ou usuário' });
    }
  }else{
    res.status(400).json({Error: "Parâmetros invalidos"});
  }
  }
  async  getCourseRegister(req: Request, res: Response) {
    const courseService = new CourseService();
    const resposta =  await courseService.getCourseRegister(req,res);
    if (resposta.tipo == "Sucess"){
      res.status(200).json(resposta);
    }else if (resposta.description == "NOT FOUND"){
      res.status(404).json({ status: 'Curso não encontrado'})
    
    }else{
      console.error('Erro ao obter curso:', resposta.description);
      res.status(500).json({ error: 'Erro ao obter curso' });
    }
  }    
}    
export default CourseController
