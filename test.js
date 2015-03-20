var persistron = require('./index.js');


// var save = persistron.save("./test.json", {"name":"Neel"});

// console.log(save);

// var data = persistron.retrieve('./test.json');

// console.log(data);

var data = persistron.delete('./test.json', {"name":"Neel"});

console.log(data);