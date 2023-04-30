const { Router } = require("express");
const userRouter = require("./user.router");
const taskRouter = require("./task.router");
// const { sendIdUser } = require("../middlewares/sendIdUser.mw");
const { checkUser } = require("../middlewares/user.mw");

const router = Router();
// http://localhost:3000/api/users
router.use("/users", userRouter);
// http://localhost:3000/api//users/:idUser/tasks
router.use("/users/:idUser/tasks", checkUser, taskRouter);

module.exports = router;
