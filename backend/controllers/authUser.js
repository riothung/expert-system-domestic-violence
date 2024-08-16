
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const prisma = require("../db");

const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !req.body.email || !req.body.password) return res.json({ message: "Nama, Email dan Password harus diisi !" });

  const emailExist = await prisma.user.findUnique({ where: { email: req.body.email } });
  if (emailExist) return res.status(400).json({ message: "Email already exists" });

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    if (req.body.fullName || req.body.email || hashedPassword) {
      const admin = await prisma.user.create({
        data: {
          fullName: req.body.fullName,
          email: req.body.email,
          password: hashedPassword,
          isAdmin: false,
        },
      });
      if (admin) return res.status(200).json({ message: "Account created successfully" });
    } else {
      return res.status(400).json({ message: "Email atau Password salah!" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!req.body.email || !req.body.password) return res.json({ message: "Email and Password are required!" });

    if (req.body.email || req.body.password) {
      const checkEmail = await prisma.user.findUnique({ where: { email: req.body.email } });
      if (!checkEmail) return res.status(400).json({ message: "Email doesn't exist!" });

      const password = bcrypt.compare(req.body.password, checkEmail.password);
      if (!password) return res.status(401).json({ message: "Wrong password!" });

      const token = jwt.sign({ _id: checkEmail.id }, "secret", {
        expiresIn: "2d",
      });
      res.cookie("token", token,).status(200).json({ message: "Login success!" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Login gagal!" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
