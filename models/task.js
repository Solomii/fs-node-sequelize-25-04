'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    content: {
      allowNull: false,
      type:DataTypes.TEXT
    },
    isDone: {
      field:'is_done',
      allowNull: false,
      defaultValue: false,
      type:DataTypes.BOOLEAN
    },
    deadline: {
      type:DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Task',
    tableName:"tasks",
    underscored:true
  });
  return Task;
};