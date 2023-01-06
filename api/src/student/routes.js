const { Router } = require("express");
const { getStudents, getStudentById, addStudent } = require("./controllers");

const router = Router();

router.get("/", getStudents);
router.post("/", addStudent)
router.get("/:id", getStudentById);

module.exports = router;
