const express=require('express');
const app=express();
const path=require('path');

app.use('/learnmusiconline.com',express.static('learnmusiconline.com'));

app.set('view engine','pug');

app.set('views',path.join(__dirname,'learnmusiconline.com/pug'));


app.get('/',(req,res)=>{
    res.status(200).render('home.pug');
})

app.get('/courses',(req,res)=>{
    res.status(200).render('courses.pug');
})

app.get('/about',(req,res)=>{
    res.status(404).render('notfound.pug');
})

app.listen(80,()=>{
    console.log("Listening");
})