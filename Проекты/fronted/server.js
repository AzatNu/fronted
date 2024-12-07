const express = require("express");
const app = express();
const PORT = 3005;
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const itemsRoutes = require("./routes/routes");
const usersRoutes = require("./routes/users");



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



    mongoose.connect("mongodb+srv://azattix:Azattix12@cluster0.oebxh.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
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
