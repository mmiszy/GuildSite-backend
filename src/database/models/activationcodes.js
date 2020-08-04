"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class activationCodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  activationCodes.init(
    {
      activationCode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "activationCodes",
    }
  );
  return activationCodes;
};
