
const express = require ('express');
const app = express();
app.use(express.json());
const PORT = 8085;

// this is working
// const fs = require('node:fs');
// const config = require('./test.json');
// console.log(config);


const fs = require("fs");

let response;
const books =
{
    title: "Alli goes to school",
    genre: "Fiction",
    type: "Children",
    pages: 56
};

const jsonData = JSON.stringify(books, null, 2);

fs.writeFile("./server/test.json", jsonData, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('Data written to file');
    }
});


app.get('/test', (req, res) =>{
    res.status(200).send({
        message:'testing'
    })
});
app.get('/test2', (req, res) =>{
    res.status(200).send({
        message:'test2'
    })
});
app.post('/updateMap', (req, res) =>{
    
    res.status(200).send({
        message:'map data send'
    })
    updateMapData(req.body);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })



function updateMapData(jsonData){
    fs.writeFile(`./server/${jsonData.map.name}.json`, JSON.stringify(jsonData.map), 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log('Data written to file');
        }
    });
}