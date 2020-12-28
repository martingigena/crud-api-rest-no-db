const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");

const app = express();
const productsRoutes = require("./routes/products.js");

//Settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 4);

//Middlewares
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);

//Routes
app.use("/products", productsRoutes);
//Static Files

//Start Server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
