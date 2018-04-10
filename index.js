const express = require('express');
const app = express();

let scores = [{name: "Edwin", score: 50}, {name: "David", score: 39}];

app.use(express.json());

app.get('/scores', (req, res) => {
    res.statusCode = 200;
    res.send(JSON.stringify(scores));
})

app.post('/scores', (req, res) => {
    res.statusCode = 201;
    scores.push(req.body);
    scores = scores.sort((a, b) => (b.score - a.score));
    scores = scores.slice(0, 3);
    res.end();
});

app.listen(3000, () => {
    console.log('server is running on http://localhost:3000');
});