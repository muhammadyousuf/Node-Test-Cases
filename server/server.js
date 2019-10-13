const express = require('express');

let app = express();
let port = 5000
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

module.exports.app = app