import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
  try {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "USUARIO_YA_EXISTE";
  const passHash = await encrypt(password); //TODO 12345678
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  //TODO 123456
  return registerNewUser;
} catch (error) {
  console.error('Error registering user:', error);
  throw error; // Re-throw the error to be handled by the calling function
}
};


const loginUser = async ({ email, password }: Auth) => {
  try {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password; //TODO el encriptado!
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(checkIs.email);
  const data = {
    token,
    user: checkIs,
  };
  return data;
} catch (error) {
  console.error('Error logging in user:', error);
  throw error; // Re-throw the error for handling by the calling function
}
};
export { registerNewUser, loginUser };
