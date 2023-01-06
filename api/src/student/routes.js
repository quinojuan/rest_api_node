const { Router } = require("express");
const {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
} = require("./controllers");

const router = Router();

router.get("/", getStudents);
router.post("/", addStudent);
router.get("/:id", getStudentById);
router.put("/:id", updateStudent);
router.delete("/:id", removeStudent);

module.exports = router;
