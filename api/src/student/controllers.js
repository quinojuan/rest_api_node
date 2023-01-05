const pool = require("../../db");
const queries = require("../student/queries");

// la misma funcion hecha con callbacks y con async await
const getStudents = async (req, res) => {
  //   pool.query("SELECT * FROM students", (error, results) => {
  //     if (error) throw error;
  //     res.status(200).json(results.rows);
  //   });

  const response = await pool.query(queries.getStudents);
  console.log(response.rows);
  res.send(response.rows);
};

const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await pool.query(queries.getStudentById, [id]);
    console.log(response.rows);
    return res.send(response.rows);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getStudents,
  getStudentById,
};
