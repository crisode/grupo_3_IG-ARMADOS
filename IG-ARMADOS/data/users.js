const fs = require("fs");
const path = require("path");
const usersDB = path.join("data", "users.json");

module.exports = {
    getUsers: () => {
        return JSON.parse(fs.readFileSync(usersDB, "utf-8"));
    },

    setUsers: (data) => {
        fs.writeFileSync(__dirname + "/users.json", JSON.stringify(data, null, 2));
    }
};