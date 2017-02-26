const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');
const {ObjectID}=require('mongodb');

// Todo.remove({}).then((res)=>{
//   console.log(res);
// });
Todo.findOneAndRemove({_id:''}).then();

Todo.findByIdAndRemove('58b317baf77d9af2a00d54f8').then((todo)=>{
  console.log(todo);
});
