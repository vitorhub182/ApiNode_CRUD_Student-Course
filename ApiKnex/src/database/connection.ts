import knex from 'knex'


const connection = knex({
    client: 'pg',
    connection: {
        host : 'localhost',
        user : 'root',
        password : 'cefetmg',
        database : 'management'
    },
    useNullAsDefault: true
})
export default connection