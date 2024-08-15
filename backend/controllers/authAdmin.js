const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const prisma = require("../db");

const registerAdmin = async (req, res) => {
  
    const { email, password } = req.body;
    if (!req.body.email || !req.body.password) return res.json({ message: "Email dan Password harus diisi !" });

    const emailExist = await prisma.user.findUnique({ where: { email: req.body.email } });
    if (emailExist) return res.status(400).json({ message: "Email already exists" });
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    try{
    if(req.body.email || hashedPassword){
      const admin = await prisma.user.create({
      data: {
        email: req.body.email,
        password: hashedPassword,
        isAdmin: true,
      }
    })
    if (admin) return res.status(200).json({ message: "Admin created successfully" });
    }else{
      return res.status(400).json({ message: "Email atau Password salah!" });
    }
    
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const loginAdmin = async (req, res) =>{
  try{
    const { email, password } = req.body
    if(!req.body.email || !req.body.password) return res.json({ message: "Email and Password are required!"})

    if(req.body.email !== "" || req.body.password !== ""){

      const checkEmail = await prisma.user.findUnique({ where: { email: req.body.email } });
      if(!checkEmail) return res.status(400).json({ message: "Email doesn't exist!" });

      const password = bcrypt.compare(req.body.password, checkEmail.password);
      if(!password) return res.status(401).json({ message: "Wrong password!" });
      
      const token = jwt.sign(
      
      )
    }
  




  }

}

module.exports = {
 registerAdmin,
 loginAdmin
}