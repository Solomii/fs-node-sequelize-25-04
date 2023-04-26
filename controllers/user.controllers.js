const { User } = require("../models");

module.exports.createUser = async (req, res, next) => {
    try {
        const { body } = req;
        const newUser = await User.create(body);
        newUser.password = undefined;
        console.log(newUser);
        res.status(201).send({ data: newUser });
    } catch (error) {
        console.log("error", error);
        // next(error);
    }
};

module.exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ["password", "createdAt", "updateAt"] },
        });
        res.status(200).send({ data: users });
    } catch (error) {
        console.log("error", error);
        // next(error);
    }
};

module.exports.getUserByPk = async (req, res, next) => {
    try {
        const {
            params: { idUser },
        } = req;
        const user = await User.findByPk(idUser);
        res.status(200).send({ data: user });
    } catch (error) {
        console.log(error);
    }
};

module.exports.updateUserStatic = async (req, res, next) => {
    try {
        const {
            body,
            params: { idUser },
        } = req;
        const [, [updateUser]] = await User.update(body, {
            where: { id: idUser },
            // returning: ["id","email"],
            returning: true,
        });
        updateUser.password = undefined;
        res.status(200).send({ data: updateUser });
    } catch (error) {
        console.log(error);
    }
};

module.exports.updateUserInstance = async (req, res, next) => {
    try {
        const {
            body,
            params: { idUser },
        } = req;
        const userInstance = await User.findByPk(idUser);
        const updateUser = await userInstance.update(body, {
            returning: true,
        });
        updateUser.password = undefined;
        res.status(200).send({ data: updateUser });
    } catch (error) {
        console.log(error);
    }
};

module.exports.deleteUserInstance = async (req, res, next) => {
    try {
        const {
            params: { idUser },
        } = req;
        const user = await User.findByPk(idUser, {
            attributes: { exclude: ["password"] },
        });
        await user.destroy();

        res.status(200).send({ data: user });
    } catch (error) {
        console.log(error);
    }
};
