const {User} = require('../models')

module.exports.createUser = async (req,res,next) =>{
  try {
    const {body} = req;
    const newUser = await User.create(body);
    console.log(newUser);
    res.status(201).send(newUser)

  } catch (error) {
    next(error)
  }
}