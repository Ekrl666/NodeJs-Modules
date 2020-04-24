const path = require('path');

//Base file name
console.log(path.basename(__filename));
// extension name
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));