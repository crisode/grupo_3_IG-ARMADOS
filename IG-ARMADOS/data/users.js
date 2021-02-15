const fs = require("fs");
const path = require("path");
const usersDB = path.join("data", "users.json");

module.exports = {
    getUsers: () => {
        return JSON.parse(fs.readFileSync(usersDB, "utf-8"));
    },

    setUsers: (data) => {
        fs.writeFileSync(usersDB, JSON.stringify(data, null, 2), "utf-8");
    }
};