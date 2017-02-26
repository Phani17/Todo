var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
var db={
  localhost:'mongodb://localhost:27017/TodoApp',
  mlab:'mongodb://Phani:phani@ds161209.mlab.com:61209/todoapp1'
};
mongoose.connect(process.env.PORT?db.mlab:db.localhost);

module.exports={mongoose}
