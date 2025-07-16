const fs = require('fs');
let users = [
    {
        name : "Yash",
        age : 20,
        address : "Delhi"
    },
    {
        name : "Gauirav",
        age : 22,
        address : "Mumbai"
    }
]
fs.writeFile('../users.txt',JSON.stringify(users),function(err) {
    if (err) return console.log(err);
    console.log('done');
});