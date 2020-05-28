const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
app.use(express.urlencoded());

app.use('/learnmusiconline.com', express.static('learnmusiconline.com'));

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'learnmusiconline.com/pug'));

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("We are connecteed.../");
});
var kittySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    username: String,
    password: String,
    cpassword: String
});

var store = mongoose.model('store', kittySchema);


app.get('/', (req, res) => {
    res.status(200).render('home.pug');
})

app.get('/courses', (req, res) => {
    res.status(200).render('courses.pug');
})

app.get('/about', (req, res) => {
    res.status(404).render('notfound.pug');
})

app.post('/form', (req,res) => {
    var fluffy = new store(req.body);
    fluffy.save(function (err, fluffy) {
        if (err) return console.error(err);
        console.log(fluffy);
    });
    res.redirect('/');

})
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
