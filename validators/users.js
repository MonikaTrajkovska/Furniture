const createUser={
  name:"required|string",
  surname:"required|string",
  email:"required|email",
  telephone:"required|string",
  password:"required|string|minLength:3",
  address:"required|string",
  country:"required|string",
  city:"required|string"

}
module.exports={
  createUser
}