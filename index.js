const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.use(express.json());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

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

let scores = [];
function updateScores(newScore, scores) {
  let searchScore = false;
  for (const [i, prevScore] of scores.entries()) {
    if (newScore.score > prevScore.score) {
      scores.splice(i, 0, newScore);
      searchScore = true;
      break;
    }
  }
  if (!searchscore) {
    scores.push(newScore);
  }
  if (scores.length > 7) {
    scores.length = 7;
  }

  return scores;
}