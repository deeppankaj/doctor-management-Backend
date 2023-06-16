const jwt = require("jsonwebtoken");

const newToken = (emailid) => {
  const token = jwt.sign({ email: emailid }, "secert", {
    expiresIn: "2 days",
  });
  return token;
};
const verifyToken = async (token) => {
      try {
        const decode =  jwt.verify(token, "secert");
        return decode.email
      } catch (error) {
        return error
      }
}


module.exports = { newToken, verifyToken };
 