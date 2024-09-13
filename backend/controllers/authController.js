const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const prisma = require("../db");

const registerAdmin = async (req, res) => {
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
          isAdmin: true,
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
      res.redirect("/login");
    } else {
      return res.status(400).json({ message: "Email atau Password salah!" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(req.body);
    if (!email || !password) return res.json({ message: "Email and Password are required!" });

    if (req.body.email !== "" && req.body.password !== "") {
      const user = await prisma.user.findUnique({ where: { email: req.body.email } });
      if (!user) return res.status(400).json({ message: "Email doesn't exist!" });

      const checkPassword = await bcrypt.compare(req.body.password, user.password);
      if (!checkPassword) return res.status(401).json({ message: "Wrong password!" });

      if (user.isAdmin == true) {
        const token = jwt.sign({ _id: user.id, isAdmin: true }, "secret", {
          expiresIn: "2 days",
        });
        res.cookie("token", token, {
          httpOnly: true,
          sameSite: 'None',
          secure: true
        }).status(200).json({ message: "Login success!", isAdmin: true, success: true });
        // res.redirect("../index.html");
      } else {
        const token = jwt.sign({ _id: user.id, isAdmin: false }, "secret", {
          expiresIn: "2d",
        });
        res.cookie("token", token, {
          httpOnly: true,
          sameSite: 'None',
          secure: true
        }).status(200).json({ message: "Login success!", isAdmin: false, success: true });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Login gagal!" });
  }
};

const checkAuthUser = async (req, res) => {
  res.json({ user: req.user });
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout success!" });
};

module.exports = {
  registerAdmin,
  registerUser,
  login,
  checkAuthUser,
  logout,
};
