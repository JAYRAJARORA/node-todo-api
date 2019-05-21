var mongoose = require('mongoose');

// connected to mongodb database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// created a model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  // unix timestamp
  completedAt: {
    type: Number,
    default: null
  }
});


// var otherTodo = new Todo({
//   text: 'Go for a run',
//   completed: true,
//   completedAt: 12345
// });
//
// otherTodo.save().then((doc) => {
//   console.log('saved todo', doc);
// }, (e) => {
//   console.log(e);
// })

var User = mongoose.model('User', {
  email: {
    required: true,
    type: String,
    trim: true,
    minlength: 1
  }
});

var newUser = new User({
  email: ' jayraj.arora@gmail.com '
});

newUser.save().then((doc) => {
  console.log('Saved user', doc);
}, (e) => {
  console.log('Unable to save user', e);
});
