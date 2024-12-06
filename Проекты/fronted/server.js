const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const itemsRoutes = require("./routes/routes");
const usersRoutes = require("./routes/users");
const app = express();
const PORT = 3005;

app.use(cors());
app.use(express.json());


mongoose
  .connect("mongodb+srv://azattix:Azattix12@cluster0.oebxh.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then()

  .then(() => {
    console.log("Соединение с MongoDB успешно установлено.");
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.error("Ошибка соединения с MongoDB:", err);
  });

app.use("/appeals", itemsRoutes);
app.use("/users", usersRoutes);
