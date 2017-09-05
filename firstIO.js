var fs = require('fs');
var file = fs.readFileSync(process.argv[2]).toString();
var newlines = file.split('\n');
var numOfNewlines = newlines.length - 1;

console.log(numOfNewlines); 