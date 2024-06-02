import { Knex } from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('course_student', table =>{
        table.increments('id').primary();
        table.string('student_id').notNullable().references('id').inTable('students');
        table.string('course_id').notNullable().references('id').inTable('courses');
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('course_student')
}