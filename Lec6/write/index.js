const fs = require("fs");
fs.writeFile("../demo.txt", "Hello, World!", function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("File written successfully!");
})