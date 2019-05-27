const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123';

// bcrypt.genSalt(10, password, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$/gn9I/ITCdVZi04ZqDBjpuBI/Vn7xV0Y7S.5qRn9cesNQm/u2P2oy';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

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

// var data = {
//   id: 10
// };
// const token = jwt.sign(data, '123abc');
// console.log(token);
//
// // jwt verify
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);
