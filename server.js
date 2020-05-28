const express=require('express');
const app=express();
const path=require('path');
const dotenv=require('dotenv')
dotenv.config();

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));