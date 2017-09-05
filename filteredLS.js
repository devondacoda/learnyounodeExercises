let fs = require('fs');
let path = require('path');

fs.readdir(process.argv[2], 'utf8', function (err, list) {
  let filteredFiles = '';

  if (!err) {
    for (let i = 0; i < list.length; i++) {
      if (path.extname(list[i]).slice(1) === process.argv[3]) {
        filteredFiles += list[i] + '\n';
      }
    }
    console.log(filteredFiles);
  }
})
