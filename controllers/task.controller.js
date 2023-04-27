const { Task } = require("../models");

// module.exports.createTask = async (req, res, next) => {
//     try {
//         const {
//             body,
//             params: { idUser },
//         } = req;
//         const task = await Task.create({ ...body, userId: idUser });
//         res.status(201).send({ data: task });
//     } catch (error) {
//       console.log("Error", error);
//         // next(error);
//     }
// };

module.exports.createTask = async (req, res, next) => {
    try {
        const { body, userInstance } = req;
        const task = await userInstance.createTask(body);
        res.status(201).send({ data: task });
    } catch (error) {
        console.log("error create task", error);
        // next(error);
    }
};

module.exports.getUserTasks = async (req, res, next) => {
    try {
        const { userInstance } = req;
        const tasks = await userInstance.getTasks();
        res.status(200).send({ data: tasks });
    } catch (error) {
        next(error);
    }
};
