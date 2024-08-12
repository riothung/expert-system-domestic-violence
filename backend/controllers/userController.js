const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const prisma = require("../db");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

    const emailExist = await `SELECT * FROM users WHERE email = '${email}'`;
    if (emailExist) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await `INSERT INTO users (email, password) VALUES ('${email}', '${hashedPassword}')`;
    if (user) return res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = register;
