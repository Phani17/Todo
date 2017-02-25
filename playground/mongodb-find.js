const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');
  // db.collection('TodoApp').find({
  //   _id:new ObjectID('58b1672d83eefd16f83f92dc')
  //   //completed:false
  // }).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });
  // db.collection('TodoApp').find().count().then((count)=>{
  //   console.log(` Todos Count : ${count}`);
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });
  db.collection('Users').find({
    name:'Phanindra'
  }).count().then((count,docs)=>{
    console.log(` Todos Count : ${count}`);
  },(err)=>{
    console.log('Unable to fetch todos',err);
  });
  db.collection('Users').find({
    name:'Nerella'
  }).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch todos',err);
  });
  //db.close();
});
