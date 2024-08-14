const bcrypt = require('bcrypt');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        const saltRounds = 10;
        const hash = bcrypt.hashSync(value, saltRounds);
        this.setDataValue('password', hash);
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};