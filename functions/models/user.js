'use strict';

module.exports = function(sequelize, DataTypes) {

  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return User;

};