const expect=require('expect');
const request=require('supertest');

const {app}=require('./../server');
const {Todo}=require('./../models/todo');

const todos=[{
  text:'Firt test todo'
},{
  text:'Second test todo'
}];

// beforeEach((done)=>{
//   Todo.remove({}).then(()=>done());
// });
beforeEach((done)=>{
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);
  }).then(()=> done());
});
describe('POST /todos',()=>{
  it('should create a new todo',(done)=>{
    var text='Test todo text';
    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      //console.log("At POST /todos",res.body);
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if(err){
        return done(err);
      }
      Todo.find({text}).then((todos)=>{
        // console.log("At POST /todos inside end---------------",res.body);
        // console.log("At POST /todos inside end---------------",todos);
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((err)=>done(err));
    });
  });

  it('Shouldnt create todo with invalid data',(done)=>{
    request(app)
    .post('/post')
    .send({})
    .expect(404)
    .end((err,res)=>{
      if(err){
        return done(err);
      }
      Todo.find().then((todos)=>{
        expect(todos.length).toBe(2);//prevoiusly toBe(0)
        done();
      }).catch((err)=>done(err));
    });
  });
});

describe('GET /todos',()=>{
  it('should get all todos',(done)=>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res)=>{
      expect(res.body.todos.length).toBe(2);
    //  console.log(res.body.todos);
    })
    .end(done);
  });
});
