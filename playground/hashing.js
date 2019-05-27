const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
// var message = 'I am a number';
//
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`hash: ${hash}`);
//
// var data = {
//   id: 4
// };
// // salt some_secret helps in preventing man in the middle attack (altering data)
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'some_secret').toString()
// };
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'some_secret').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data changed. Don\'t trust');
// }

var data = {
  id: 10
};
const token = jwt.sign(data, '123abc');
console.log(token);

// jwt verify
var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);
