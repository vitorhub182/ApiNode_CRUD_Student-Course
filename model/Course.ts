module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      timestamps: false,
      tableName: 'Courses',
    });
  
    return Course;
  };