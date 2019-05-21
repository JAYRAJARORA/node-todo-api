const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// findOneAndRemove

Todo.findOneAndRemove({_id: '5ce46078417fcf8d752b99ef'}).then(todo => {
  console.log(todo);
});

// findByIdAndRemove
// Todo.findByIdAndRemove('5ce45fc2417fcf8d752b99ee').then((todo) => {
//   console.log(todo);
// });
