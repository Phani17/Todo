var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
 // var db={
 //   "localhost":'mongodb://localhost:27017/TodoApp',
 //   "process.env.MONGODB_URI":'mongodb://Phani:phani@ds161209.mlab.com:61209/todoapp1'
 // };
 //var localhost='mongodb://localhost:27017/TodoApp';
 process.env.MONGODB_URI='mongodb://Phani:phani@ds161209.mlab.com:61209/todoapp1';
//mongoose.connect(process.env.PORT?db.mlab:db.localhost);
mongoose.connect(process.env.MONGODB_URI);
//mongoose.connect(db.mlab);
module.exports={mongoose}
