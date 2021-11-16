import jwt from 'jsonwebtoken';
import User from '../models/User';
import 'dotenv/config';

export default async (req, res, next)=>{
  const {authorization} = req.headers;
  if(!authorization)return res.status(401).json({login: "not authorized"});
  const [bear, token] = authorization.split(' ');

  try{

    const dataResult = jwt.verify(token, process.env.TOKEN_SECRET);
    const {id, email} = dataResult;

    const user = await user.findOne({where: {id, email}});
    if(!user) res.status(401).json({error: 'invalid user'});


    req.userId = id;
    req.userEmail = email;
    return next();

  }catch(e){

    return res.status(401).json({login: "Expired or invalid token"});

  }


}

