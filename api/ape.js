const express = require('express');
const fs = require('fs');
const cors = require('cors');
const ape = express();
ape.use(express.json())
ape.use(cors());
ape.options('*', cors());

let user = [];
let userjson = fs.readFileSync('user.json');
user = JSON.parse(userjson);

let post = [];
let postjson = fs.readFileSync('post.json');
post = JSON.parse(postjson);

ape.get('/user', function routeHandler(req, res) { res.send(user) });
ape.get('/post', function routeHandler(req, res) { res.send(post) });

ape.get('/user/:id', function routeHandler(req, res) {
    const book = user.find(c => c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('<h2 style="color: darkred;">خالی است</h2>');
    res.send(book);
});
ape.get('/post/:id', function routeHandler(req, res) {
    const book = post.find(c => c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('<h2 style="color: darkred;">خالی است</h2>');
    res.send(book);
});

ape.post('/user', (req, res) => {
    const { erorr } = req.body;
    if (erorr) { res.status(400).send(erorr.details[0].message); return }
    const book = {
        id: user.length + 1,
        lname: req.body.lname,
        fname: req.body.fname,
        age: req.body.age,
        user: req.body.user,
        pass: req.body.pass,
    }
    user.push(book);
    res.send(book);
    fs.writeFile('./user.json', JSON.stringify(user) , (err) => {
        if (err) throw err;
        console.log('user.json updata');
    })
    console.log(user);
});

ape.post('/test', (req, res) => {
    const { erorr } = req.body;
    if (erorr) { res.status(400).send(erorr.details[0].message); return }
    const key = user.find(data => data.user === req.body.user && data.pass === req.body.pass);
    const book = {
        key: key,
    }
    const booke = {
        key: false,
    }
    if (key) {
        res.send(book);
        console.log(book);
    } else {
        res.send(booke);
        console.log(booke);
    }
});

ape.post('/post', (req, res) => {
    const { erorr } = req.body;
    if (erorr) { res.status(400).send(erorr.details[0].message); return }
    const book = {
        id: post.length + 1,
        lname: req.body.lname,
        text: req.body.text,
    }
    post.push(book);
    res.send(book);
    fs.writeFile('./post.json', JSON.stringify(post) , (err) => {
        if (err) throw err;
        console.log('post.json updata');
    })
    console.log(post);
});

ape.put('/user/:id', (req, res) => {
    const book = user.find(c => c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('<h2 style="color: darkred;">خالی است</h2>');
    const { error } = req.body;
    if (error) { res.status(400).send(error.details[0].message); return; }

    book.namepost = req.body.namepost,
        book.user = req.body.user,
        book.pass = req.body.pass,
        res.send(book);
});

ape.delete('/user/:id', (req, res) => {
    const book = user.find(c => c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('<h2 style="color: darkred;">خالی است</h2>');

    const index = user.indexOf(book);
    user.splice(index, 1);
    res.send(book);
});

const port = process.env.PORT || 3000;
ape.listen(port, () => console.log(`conect ${port} ...`));
