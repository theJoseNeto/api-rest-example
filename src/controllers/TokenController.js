import User from '../models/User';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

class TokenController{

  async store(req, res){
    let result;
    const {email = '', password = ''} = req.body;
    if(!email || !password ) result = res.stauts(401).json({error: 'invalid credentials'})


    const user = await User.findOne({where: {email}});
    if(!user ) result = res.stauts(401).json({error: 'invalid user'});

    const passwordIsValid = await user.passwordIsValid(password);
    if(!passwordIsValid) result = res.status(401).json({error: "invalid password"});

    const {id} = user;
    result = jwt.sign({id, email}, process.env.TOKEN_SECRET, {expiresIn: process.env.TOKEN_EXPIRATION});

    return res.json({token: result});

  }
}

export default new TokenController();
