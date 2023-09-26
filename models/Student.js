const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Student = sequelize.define(
    "Student",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lastName: {
        type: DataTypes.STRING,
      },

      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      group: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      tableName: "students",
    }
  );
  return Student;
};
