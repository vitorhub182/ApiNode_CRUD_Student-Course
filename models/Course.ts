const { Sequelize, DataTypes, Model } = require('sequelize');
import {sequelize} from '../utils/pacotes';
import {Student} from './Student';

export class Course extends Model {}

Course.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Course', // We need to choose the model name
    tableName: 'courses',
    timestamps: false,
  },
);



// MEU PADRAO
/*
    const Course = sequelize.define('Course', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      timestamps: false,
      tableName: 'courses',
    });
  sequelize.sync({alter:true})
  .then(() => {
    console.log('Tabela Course sincronizada');
  })
  .catch(error => {
    console.error('Erro ao sincronizar a tabela Course:', error);
  });
  
 // Student.belongsToMany(Course, { through: 'course_student' });
 
 export default Course;


 // PADRAO ENSINADO
/*
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";

import Student from './Student';
import CourseStudent from './CourseStudent';
import { InferAttributes, InferCreationAttributes } from "sequelize";

@Table({
  timestamps: false,
  tableName: "courses",
  modelName: "Course",
})
class Course extends Model<InferAttributes<Course>, InferCreationAttributes<Course>> {
  @Column({
    primaryKey: true,
    type: DataType.BIGINT,
  })
  declare id: number;
  @Column({
    type: DataType.STRING,
  })
  declare name: string
  @Column({
    type: DataType.STRING,
  })
  declare description: string
  @BelongsToMany(() => Student, () => CourseStudent)
  students: Student[];
}
export default Course;
*/