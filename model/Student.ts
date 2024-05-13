module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
      id: { type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true },
      name: DataTypes.STRING,
      last_name: DataTypes.STRING,},
    {
      timestamps: false,
      tableName: 'Students',
    });
  
    return Student;
  };