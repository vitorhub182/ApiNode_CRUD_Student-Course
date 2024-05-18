const courseService = require('../services/CourseService');

function getCourseList(req, res) {
  const resposta = courseService.getCourseList(req);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);
  }else{
    console.error('Erro ao obter lista de cursos:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter lista de cursos' });
  }
}

function getCourse(req, res) {
  const resposta = courseService.getCourse(req);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);
  }else{
    console.error('Erro ao obter curso:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter curso' });
  }
}

function postRegisterCourse(req, res) {
  const resposta = courseService.postRegisterCourse(req);
  
  if (resposta.tipo == "Sucess"){
    res.status(201).json(resposta);

  }else if (resposta.tipo == "NOT FOUND"){
    res.status(404).json({ status: 'Curso não encontrado'})
  
  }else{
    console.error('Erro ao obter curso:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter curso' });
  }
}

function deleteCourse(req, res) {
  const resposta = courseService.deleteCourse(req);
  if (resposta.tipo == "Sucess"){
    res.status(201).json(resposta);

  }else if (resposta.tipo == "NOT FOUND"){
    res.status(404).json({ status: 'Curso não encontrado'})
  
  }else{
    console.error('Erro ao obter curso:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter curso' });
  }
}

function putCourse(req, res) {
  const resposta = courseService.putCourse(req);
  if (resposta.tipo == "Sucess"){
    res.status(204).json(resposta);

  }else if (resposta.tipo == "NOT FOUND"){
    res.status(404).json({ status: 'Curso não encontrado'})
  
  }else{
    console.error('Erro ao obter curso:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter curso' });
  }
}

function patchCourse(req, res) {
  const resposta = courseService.putCourse(req);
  if (resposta.tipo == "Sucess"){
    res.status(204).json(resposta);

  }else if (resposta.tipo == "NOT FOUND"){
    res.status(404).json({ status: 'Curso não encontrado'})
  
  }else{
    console.error('Erro ao obter curso:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter curso' });
  }
}
  export default {
    getCourseList,
    getCourse,
    postRegisterCourse,
    deleteCourse,
    putCourse,
    patchCourse
  };