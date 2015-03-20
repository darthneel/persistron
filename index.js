var fs = require('fs');
var _ = require('underscore');
require('locus');


module.exports = {
  save: function(filename, obj){
    if(typeof(obj) != 'object'){
      console.log("Error: You can only save arrays and objects");
      return
    };

    if(fs.existsSync(filename)){
      var data = JSON.parse(fs.readFileSync(filename));
      data.push(obj);
      fs.writeFileSync(filename, JSON.stringify(data));
      return data
    }else{
      var data = [obj];
      fs.writeFileSync(filename, JSON.stringify(data));
      return data
    };
  },
  retrieve: function(filename){
    if(fs.existsSync(filename)){
      return JSON.parse(fs.readFileSync(filename));
    }else{
      console.log("Error: File does not exist");
      return
    };
  },
  delete: function(filename, obj){
    if(typeof(obj) != 'object'){
      console.log("Error: You can only save arrays and objects");
      return
    };

    if(!fs.existsSync(filename)){
      consle.log("Error: File does not exist")
      return
    }

    var data = JSON.parse(fs.readFileSync(filename));

    var index = data.indexOf(obj);
    index > 0 ? data.splice(index, 1) : console.log("Error: Object does not exist.")

    eval(locus);

    return data
  }
}


