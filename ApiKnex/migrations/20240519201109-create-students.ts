import { Knex } from 'knex'

export async function up(knex: Knex){
    await knex.schema.createTable('students', table =>{
        table.increments('id').primary();
        table.string('name', 100).notNullable();
        table.string('last_name', 100).notNullable();
    })
}

export async function down(knex: Knex){
    await knex.schema.dropTable('students')
}