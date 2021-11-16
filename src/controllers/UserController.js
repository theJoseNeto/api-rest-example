import User from '../models/User';

class UserController {
  async store(req, res){
    try{
      const newUser = await User.create(req.body);

      res.status(200).json({newUser});

    }catch(error){
      res.status(400).json({error});
    }

  }

  async index(req, res){
    try {
      const users = await User.findAll();
      return res.json({users});
    } catch (error) {
      return res.status(400).json(null)
    }
  }

  async show(req, res){
    try {
      const {id} = req.params;
      const user = User.findByPk(id);
    } catch (error) {
      res.status(400).json(null)
    }
  }
  async update(req, res){
    try {
      const {id} = req.params;

      if(!id) throw new Error('invalid id');
      const user = await User.findByPk(id);

      if(!user) throw new Error('user cannot exists');
      const updatedData = await user.update(req.body);

      return res.json({updatedData});

  } catch (error) {
      res.status(400).json({error})
    }
  }

  async delete(req, res){
    try {
      const {id} = req.params;

      if(!id) throw new Error('invalid id');
      const user = await User.findByPk(id);

      if(!user) throw new Error('user cannot exists');
      await user.delete(req.body);

      return
  } catch (error) {
      res.status(400).json({error})
    }
  }


}

export default new UserController();
