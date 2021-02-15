const fs = require("fs");
const path = require("path");
const productsDB = path.join("data", "products.json");

module.exports = {
    getProducts: () => {
        return JSON.parse(fs.readFileSync(productsDB, "utf-8"));
    },

    setProducts: (data) => {
        fs.readFileSync(productsDB, JSON.stringify(data, null, 2), "utf-8");
    }
};