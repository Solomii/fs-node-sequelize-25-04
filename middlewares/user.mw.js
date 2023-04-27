const {User} = require("../models")

module.exports.checkUser = async (req,res,next) =>{
  try {
    const {params:{idUser}}=req;
    const user = await User.findByPk(idUser)
    if(!user){
      throw new Error('user not found')
    } 
    user.password = undefined;
    req.userInstance = user;
    next();
  } catch (error) {
    next(error)
  }
}