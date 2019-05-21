const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// var id = '5ce448a36c1f71515cd9c30511';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   completed: false
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Todo not found');
//   }
//   console.log('Todo by Id: ', todo);
// }).catch((e) => console.log(e));

var id = '5ce41975967ab191288fbb31';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User: ', user);
}).catch((e) => console.log(e));
