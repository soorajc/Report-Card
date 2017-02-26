
var  studentData = '';

export function passData() {
  return studentData;
}

export function readFile() {
   studentData = require('./test.json');
}
