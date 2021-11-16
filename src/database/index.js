import { Sequelize } from "sequelize";
import database from "../config/database";
import Aluno from '../models/Aluno';
import User from '../models/User';
const models = [Aluno, User];
const connection = new Sequelize(database);

models.forEach(model=> model.init(connection));



