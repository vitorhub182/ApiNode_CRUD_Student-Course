import { Knex } from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('courses', table =>{
        table.increments('id').primary();
        table.string('name', 100).notNullable();
        table.string('description', 100);
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('courses')
}