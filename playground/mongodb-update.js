const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');
  // db.collection('TodoApp').findOneAndUpdate({
  //   _id:new ObjectID('58b1b5786b672351deaed10e')
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((res)=>{
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('58b1684be405e710f0ca64aa')
  },{
    $set:{
      name:'Aparna Neralla'
    },
    $inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((res)=>{
    console.log(res);
  });
  //db.close();
  //58b1684be405e710f0ca64aa
});
