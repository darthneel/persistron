var fs = require('fs');

function compareObjects(a, b) {

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);

  if (aKeys.length != bKeys.length) {
    return false;
  };

  for (var i = 0; i < aKeys.length; i++) {
    var property = aKeys[i];


    if (a[property] !== b[property]) {
      return false;
    };
  };

  return true;
};


module.exports = {
  save: function(filename, obj) {
    if (typeof(obj) != 'object') {
      console.log("Error: You can only save arrays and objects");

      return
    };

    if (!fs.existsSync(filename) || fs.readFileSync(filename).toString() === '') {
      var data = [obj];
      fs.writeFileSync(filename, JSON.stringify(data));

      return data
    } else {
      var data = JSON.parse(fs.readFileSync(filename));
      data.push(obj);
      fs.writeFileSync(filename, JSON.stringify(data));

      return data
    }
  },
  retrieve: function(filename) {
    if (fs.existsSync(filename)) {
      return JSON.parse(fs.readFileSync(filename));
    } else {
      console.log("Error: File does not exist");
      return
    }
  },
  delete: function(filename, obj) {
    if (typeof(obj) != 'object') {
      console.log("Error: You can only delete arrays and objects");

      return
    }

    if (!fs.existsSync(filename)) {
      consle.log("Error: File does not exist");

      return
    }

    console.log("hit");

    var data = JSON.parse(fs.readFileSync(filename));

    var indexOfMatch;
    data.forEach(function(el, index, array) {
      if ( compareObjects(el, obj) ) {
        indexOfMatch = index;
      }
    });

    typeof indexOfMatch === 'number' ? data.splice(indexOfMatch, 1) : console.log("Error: Object not found.")

    fs.writeFile(filename, JSON.stringify(data), function(err){
      if (err) {
        console.log(err);
      }
    });

    return data
  },
  deleteAll: function(filename) {
    fs.unlink(filename, function(err) {
      if (err) {
        console.log(err);
      }
    });
  }
}


