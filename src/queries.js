const { Pool } = require("pg");
require("dotenv").config({ path: '../.env' });

console.log(process.env.DATABASE);
const pool = new Pool({
  connectionString: process.env.DATABASE,
});

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


const createUser = (request, response) => {
  const { name, email, phone, surname } = request.body;
  pool.query(
    `INSERT INTO users (name, email, phone, surname) VALUES ($1, $2, $3, $4) RETURNING id`,
    [name, email, phone, surname],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

module.exports = {
  getUsers,
  createUser,
};
