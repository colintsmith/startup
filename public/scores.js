async function loadScores() {
    let scores = [];
    try {
      // Get the latest high scores from the service
      const response = await fetch('/api/scores');
      scores = await response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just use the last saved scores
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        scores = JSON.parse(scoresText);
      }
    }
  
    displayScores(scores);
  }




function Scores() {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
        scores = JSON.parse(scoresText);
        console.log(scores);
    }
    const tableScores = document.querySelector('#scores');
    if (scores.length) {
        for (const [i, score] of scores.entries()) {
            const positionTd = document.createElement('td');
            const userNameTd = document.createElement('td');
            const scoreTd = document.createElement('td');
            const dateTd = document.createElement('td');
            positionTd.textContent = i + 1;
            userNameTd.textContent = score.name;
            scoreTd.textContent = score.score;
            dateTd.textContent = score.date;
            const row = document.createElement('tr');
            row.appendChild(positionTd);
            row.appendChild(userNameTd);
            row.appendChild(scoreTd);
            row.appendChild(dateTd);
            tableScores.appendChild(row);
        }
    }
    else {
        tableScores.innerHTML = '<tr><td colSpan=4>No winners yet</td></tr>'; 
    }

}
Scores();