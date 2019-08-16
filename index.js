const express  = require('express');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.listen(3000,(err)=>{
    
    if(err) console.log(err);
    else console.log("APP STARTED ON PORT : 3000")
})


app.get('/api',(req,res)=>{

    res.render('index.ejs',{
        name: "Mohammad"
    });
})

app.get('/test',(req,res)=>{
    res.render('index.ejs',{
        name:"Masoud"
    });
})