const { products } = require("../db.json");

module.exports = {
  getProducts: (req, res) => {
    res.json({ products });
  },

  addProduct: (req, res) => {
    const { name } = req.body;
    products.push({
      name,
      id: products.length,
    });
    res.json({
      success: true,
      msg: "successfully added",
    });
  },
  updateProduct: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    success = false;
    msg = "Product Id not found";
    products.forEach((product, i) => {
      if (product.id === Number(id)) {
        product.name = name;
        success = true;
      }
    });
    if (success) {
      msg = "Successfully updated";
    }
    res.json({
      success,
      msg,
    });
  },
  deleteProduct: (req, res) => {
    const { id } = req.params;
    success = false;
    msg = "Product Id not found";
    products.forEach((product, i) => {
      if (product.id === Number(id)) {
        products.splice(i, 1);
        success = true;
      }
    });
    if (success) {
      msg = "Successfully deleted";
    }
    res.json({
      success,
      msg,
    });
  },
};
