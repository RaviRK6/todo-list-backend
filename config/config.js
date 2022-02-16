//import package
const Pool = require('pg').Pool;


//configure postgreSql db  
const config = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host:process.env.PGHOST,
    port: process.env.PGPORT
})

//export 
module.exports = config;