const { Router } = require("express");
const {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
} = require("./controllers");

const router = Router();

router.get("/", getStudents);
router.post("/", addStudent);
router.get("/:id", getStudentById);
router.delete("/:id", removeStudent);

module.exports = router;
