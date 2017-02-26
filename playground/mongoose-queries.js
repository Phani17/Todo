const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');
const {ObjectID}=require('mongodb');
// var id ='58b2ab7628e26a2c0a9f1db711';
// if(!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }
// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos :',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos :',todos);
// })
//
// Todo.findById(id).then((todo)=>{
//   if(!todo)
//      return console.log('Id not found');
//   console.log('Todo by id',todo);
// }).catch((e)=>console.log(e));

User.findById('58b270d600ff2764112f61e6').then((user)=>{
  if(!user){
    return console.log('User not found');
  }
  console.log('User found',user);
},(e)=>{
  console.log(e);
});
