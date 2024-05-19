
const { Sequelize, DataTypes, Model } = require('sequelize');
import {sequelize} from '../utils/pacotes';
import {Course} from './Course';

export class Student extends Model {}

Student.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Student', // We need to choose the model name
    tableName: 'students',
    timestamps: false,
  },
);

// MEU PADRAO
/*
  const Student = sequelize.define('Student', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    last_name: DataTypes.STRING
  },
  {
    timestamps: false,
    tableName: 'students',
  });
  sequelize.sync({alter:true})
  .then(() => {
    console.log('Tabela Student sincronizada');
  })
  .catch(error => {
    console.error('Erro ao sincronizar a tabela Student:', error);
  });

export default Student;

// PADRAO ENSINADO
/*
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";

import Course from './Course';
import CourseStudent from './CourseStudent';

@Table({
  timestamps: false,
  tableName: "students",
  modelName: "Student",
})
class Student extends Model {
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
  declare last_name: string
  @BelongsToMany(() => Course, () => CourseStudent)
  courses: Course[];
  
}
export default Student;
*/