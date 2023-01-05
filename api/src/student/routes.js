const { Router } = require("express");
const { getStudents, getStudentById } = require("./controllers");

const router = Router();

router.get("/", getStudents);
router.get("/:id", getStudentById);

module.exports = router;
