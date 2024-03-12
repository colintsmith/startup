const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.use(express.json());
app.use(express.static('public'));

let scores = [];

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/scores', (_req, res) => {
    res.send(scores);
  });
apiRouter.post('/score', (req, res) => {
    scores = updateScores(req.body, scores);
    res.send(scores);
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


function updateScores(newScore, scores) {
    console.log('update scores reached!!! something went bad after this')
    let searchScore = false;
    for (const [i, prevScore] of scores.entries()) {
        if (newScore.score > prevScore.score) {
            scores.splice(i, 0, newScore);
            searchScore = true;
            break;
        }
    }
    if (!searchScore) {
        scores.push(newScore);
    }
    if (scores.length > 7) {
        scores.length = 7;
    }

    return scores;
}