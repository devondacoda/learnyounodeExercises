let fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (!err) {
    let newlines = data.split('\n');
    console.log(newlines.length - 1);
  }
});
