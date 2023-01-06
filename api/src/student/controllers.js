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

const addStudent = async (req, res) => {
  const { name, email, age, dob } = req.body;
  // check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      return res.send("Email already exists.");
    }
    // add student to db
    pool.query(
      queries.addStudent,
      [name, email, age, dob],
      (error, results) => {
        if (error) throw error;
        return res.send("Student created successfully!");
      }
    );
  });
};

const removeStudent = async (req, res) => {
  const { id } = req.params;

  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      return res.send("Student does not exist in the database");
    }
    pool.query(queries.getStudentById, [id], (error, results) => {
      if (error) throw error;
      res.send("Student removed successfully!");
    });
  });
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      return res.send("Student does not exist in the database");
    }

    pool.query(queries.updateStudent, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student updated successfully");
    });
  });
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
};
