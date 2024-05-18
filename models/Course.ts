  import DataTypes from 'sequelize';
  import sequelize from '../utils/sequelize';

    const CourseConnect = sequelize.define('Course', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      timestamps: false,
      tableName: 'courses',
    });
  module.exports = CourseConnect;