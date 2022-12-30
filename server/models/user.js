"use strict";
let { hash } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
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
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: { msg: "Invalid Email Format" },
          notNull: { msg: "Email Can't Empty" },
          notEmpty: { msg: "Email Can't Empty" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Email Can't Empty" },
          notEmpty: { msg: "Email Can't Empty" },
          isGreaterThanFive(val) {
            if (val.length <= 5) {
              throw { msg: "Password Minimum 6 Character" };
            }
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate(async (user) => {
    user.password = await hash(user.password);
  });

  return User;
};
