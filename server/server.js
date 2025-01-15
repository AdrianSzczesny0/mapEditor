
const express = require ('express');
const app = express();
const PORT = 8085;

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

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })