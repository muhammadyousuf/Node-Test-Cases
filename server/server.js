const express = require('express');

let app = express();
let port = 5000
app.get('/', (req, res) => {
    res.status(404).send({ error: 'Page not found!' })
})

app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'yousuf',
            age: 24
        },
        {
            name: 'rafae',
            age: 26
        },
        {
            name: 'raza',
            age: 25
        }
    ])
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

module.exports.app = app