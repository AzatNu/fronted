const express = require("express");
const router = express.Router();
const data = require("../src/model/users");




router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await data.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }
    const isMatch = await data.findOne({ password });
    if (!isMatch) {
      return res.status(400).json({ message: "Неверный пароль" });
    }
    res.json({ message: "Вы успешно вошли", email, });
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;