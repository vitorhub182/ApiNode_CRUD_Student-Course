module.exports = (sequelize, _DataTypes) => {
    const StudentCourse = sequelize.define('StudentCourse',
      {},
      { timestamps: false },
    );
  
    StudentCourse.associate = (models) => {
      models.Course.belongsToMany(models.Student, {
        as: 'students',
        through: StudentCourse,
        foreignKey: 'course_id',
        otherKey: 'student_id',
      });
      models.Student.belongsToMany(models.Course, {
        as: 'courses',
        through: StudentCourse,
        foreignKey: 'student_id',
        otherKey: 'class_id',
      });
    };
  
    return StudentCourse;
  };