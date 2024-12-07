const express = require("express");
const router = express.Router();
const data = require("../src/model/users");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
  
app.use(cors());
app.use( express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await data.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {

      return res.status(400).json({ message: "Неверный пароль" });
    }
    res.json({ message: "Вы успешно вошли", email }); 
  } catch (err) {
    res.status(500).json({ message: "Упс, Что-то пошло не так" });
  }
});

module.exports = router;


