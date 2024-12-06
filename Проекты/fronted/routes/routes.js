const express = require("express");

const router = express.Router();

const data = require("../src/model/model");
const app = express();
app.use(express.json());

router.get("/", async (req, res) => {
  try {
    const appeals = await data.find();
    res.json(appeals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



router.post("/", async (req, res) => {
  const appeals = new data({
    fullName: req.body.fullName,
    number: req.body.number,
    description: req.body.description,
    date: new Date().toISOString().slice(0, 10),
  });
  try {
    const newAppeals = await appeals.save();
    res.status(201).json(newAppeals);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
