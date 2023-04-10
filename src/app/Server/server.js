const express= require('express');
const bodyParser=require('body-parser');
const cors= require('cors');

const PORT =3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/',function(req,res){
    res.send("hello from node server")
})

app.listen(PORT,function(){
    console.log("Server running on port "+PORT);
});

users=[];
//npm install node-localstorage
var LocalStorage = require('node-localstorage').LocalStorage, 
localStorage = new LocalStorage('./scratch');
localStorage.setItem('users',JSON.stringify(users));

app.post('/register',function(req,res){
    users=JSON.parse(localStorage.getItem('users'));
    users.push(req.body);
    console.log(req.body)
    localStorage.setItem('users',JSON.stringify(users));
    res.status(200).send({"data":"Recived successfully"});
})


app.post('/login',function(req,res){
    users=JSON.parse(localStorage.getItem('users'));
    for (const iterator of users) {
        if(iterator.username==req.body.username&&iterator.password==req.body.password)
        {
            console.log(req.body)
            res.status(200).send({"data":"Welcome "+req.body.userName});
        }
    }
    res.status(422).send({"error":"Ivalid Information"});
})
