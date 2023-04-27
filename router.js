const { Router } = require("express");
const UserController = require("./controllers/user.controllers");
const TaskController = require("./controllers/task.controller");
const {checkUser}= require("./middlewares/user.mw")
const router = Router();

// http://localhost:3000/api/users
router.post("/users", UserController.createUser);
router.get("/users", UserController.getAllUsers);
router.get("/users/:idUser", UserController.getUserByPk);

router.put("/users/:idUser/static", UserController.updateUserStatic);
router.put("/users/:idUser/instance", UserController.updateUserInstance);

router.delete("/users/:idUser/instance", UserController.deleteUserInstance);

router.post("/users/:idUser/tasks",checkUser, TaskController.createTask);
router.get("/users/:idUser/tasks", checkUser, TaskController.getUserTasks);

module.exports = router;
