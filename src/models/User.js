import Sequelize, {Model} from 'sequelize';
import bcryptjs from 'bcryptjs';
export default class User extends Model {

  static init(sequelize){

    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 100],
            errorMsg: 'please, insert the values correctly. Your name must be between 3 and 100 characters'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 100],
            errorMsg: 'please, insert the values correctly. Insert a valid email'
          }
        }
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: ""
      },

      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: "",
        validate: {
          len: {
            args: [6, 20],
            errorMsg: 'Your password must be between 6 and 20 characters'
          }
        }
      }
    }, {sequelize,});

    this.addHook('beforeSave',async user => {
      if(user.password) user.password_hash = await bcryptjs.hash(user.password, 8);
      return this;
    })
  }

  passwordIsValid(password){
    return bcryptjs.compare(password, this.password_hash);
  }

}

