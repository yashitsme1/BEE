const fs= require("fs");
fs.readFile("../demo.txt", "utf8", function(err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("File content:", data);
});