const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');
  //delete Many
  // db.collection('TodoApp').deleteMany({text:'Eat Lunch'}).then((res)=>{
  //   console.log(res);
  // });
  //delete One
  // db.collection('TodoApp').deleteOne({text:'Eat Lunch'}).then((res)=>{
  //   console.log(res);
  // });
  //find one and delete
  // db.collection('TodoApp').findOneAndDelete({completed:false}).then((res)=>{
  //   console.log(res);
  // });
  // db.collection('Users').deleteMany({name:'Phani'}).then((res)=>{
  //   console.log(res);
  // });
  db.collection('Users').findOneAndDelete({_id:new ObjectID('58b16920344075113cf485a5')}).then((res)=>{
    console.log(JSON.stringify(res,undefined,2));
  });
  //db.close();
});
