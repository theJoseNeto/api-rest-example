import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res){
    
    const newStudent = await Aluno.create({
      firstname: "teste",
      lastname: "teste",
      age: 20,
      email: "teste@teste.com"
    });

    res.status(200).json({newStudent});

  }
}

export default new HomeController();
