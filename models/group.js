'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Group.belongsToMany(models.User, {
        through:'users_to_groups',
        foreignKey:'groupId'
      })
    }
  }
  Group.init({
    title: {
      allowNull: false,
      type:DataTypes.STRING,
      validate: {
        notEmpty:true,
        notNull:true,
      }
    },
    desctiption: DataTypes.STRING,
    imagePath: {
      field:'image_path',
      type:DataTypes.TEXT,
    }
  }, {
    sequelize,
    modelName: 'Group',
    tableName:"group",
    underscored:true
  });
  return Group;
};