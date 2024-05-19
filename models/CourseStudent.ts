//const { Sequelize, DataTypes, Model } = require('sequelize');
//import {sequelize} from '../utils/pacotes';
import {Student} from './Student';
import {Course} from './Course';

Course.belongsToMany(Student, { through: 'course_student' });
Student.belongsToMany(Course, { through: 'course_student' });

/*
export class User extends Model {}

export class Profile extends Model {}

User.init(
  {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    tableName: 'users',
    timestamps: false,
  },
);

Profile.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Profile', // We need to choose the model name
    tableName: 'profiles',
    timestamps: false,
  },
);

Profile.belongsToMany(User, { through: 'user_profiles' });
User.belongsToMany(Profile, { through: 'user_profiles' });


class CourseStudent extends Model {}
CourseStudent.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Profile', // We need to choose the model name
    tableName: 'profiles',
    timestamps: false,
  },
);
*/