import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

 const generateToken = (id: string) => {
  try{
   const jwt = sign({ id }, JWT_SECRET, {
     expiresIn: "2h",
   });
   return jwt;

  } catch (error) {
    console.error('Error generating token:', error);
    throw error; // Re-throw the error to be handled by the calling function
  }
 };



 const verifyToken = (jwt: string) => {
  try {
   const isOk = verify(jwt, JWT_SECRET);
   return isOk;
   
  } catch (error) {
    console.error('Error verifying token:', error);
    return null;
  }
 };



export { generateToken, verifyToken };
