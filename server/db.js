const Pool = require("pg").Pool

const pool = new Pool({
  host: "solo-project-survey-1.cg8wczv0ifus.us-east-2.rds.amazonaws.com",
  port: 5432,
  user: "postgres",
  password: "password",
  database: "surveys",
})

module.exports = pool
