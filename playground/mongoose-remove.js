const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndDelete()
//Todo.findByIdAndDelete()

// Todo.findByIdAndDelete('5c16d4af6dfc70bd7f569a3f').then((todo) => {
//     console.log(todo);
// });

// Todo.findOneAndRemove(_id: '').then((todo) => {
//     console.log(todo)
// });