import Sequelize, {Model} from 'sequelize';

export default class Aluno extends Model {

  static init(sequelize){

    super.init({
      firstname: Sequelize.STRING,
      lastname: Sequelize.STRING,
      age: Sequelize.INTEGER,
      email: Sequelize.STRING
    }, {sequelize,});

    return this;

  }
}

