const express = require("express");
const fs = require("fs");
const cors = require("cors");
const ape = express();
ape.use(express.json())
ape.use(cors());
ape.options('*', cors());

let api1 = [];
let api1json = fs.readFileSync('api1.json');
api1 = JSON.parse(api1json);
console.log(api1);

ape.get('/api1', function routeHandler(req, res) { res.send(api1) });

ape.get('/api1/:id', function routeHandler(req, res) {
    const book = api1.find(c => c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('<h2 style="color: darkred;">خالی است</h2>');
    res.send(book);
});

ape.post('/api1', (req, res) => {
    const { erorr } = req.body;
    if (erorr) { res.status(400).send(erorr.details[0].message); return }
    const book = {
        id: api1.length + 1,
        lname: req.body.lname,
        fname: req.body.fname,
        age: req.body.age,
        user: req.body.user,
        pass: req.body.pass,
    }
    api1.push(book);
    res.send(book);
    fs.writeFile("./api1.json", JSON.stringify(api1) , (err) => {
        if (err) throw err;
        console.log("fs updata");
    })
    console.log(api1);
});

ape.post('/test', (req, res) => {
    const { erorr } = req.body;
    if (erorr) { res.status(400).send(erorr.details[0].message); return }
    const key = api1.find(data => data.user === req.body.user && data.pass === req.body.pass);
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

ape.put('/api1/:id', (req, res) => {
    const book = api1.find(c => c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('<h2 style="color: darkred;">خالی است</h2>');
    const { error } = req.body;
    if (error) { res.status(400).send(error.details[0].message); return; }

    book.namepost = req.body.namepost,
        book.user = req.body.user,
        book.pass = req.body.pass,
        res.send(book);
});

ape.delete('/api1/:id', (req, res) => {
    const book = api1.find(c => c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('<h2 style="color: darkred;">خالی است</h2>');

    const index = api1.indexOf(book);
    api1.splice(index, 1);
    res.send(book);
});

const port = process.env.PORT || 3000;
ape.listen(port, () => console.log(`conect ${port} ...`));
