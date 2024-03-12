


class Game {
    playerItem;
    computerItem;
    roundsWon;

    constructor() {
        this.playerItem = 0;
        this.computerItem = 0;
        this.roundsWon = 0;
        console.log("game initiated");
        const name = document.getElementById("playerName");
        name.textContent = this.getPlayerName();
    }

    generateComputerItem() {
        let comp = Math.floor(Math.random() * 3) + 1;
        if(comp === 1) {
            this.computerItem = "rock";
            return "rock";
        }
        if(comp === 2) {
            this.computerItem = "paper";
            return "paper";
        }
        if(comp === 3) {
            this.computerItem = "scissors";
            return "scissors";
        }
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'guest player';
    }
    
    updateRoundsWon() {
        this.roundsWon++;
    }

    reset() {
        this.roundsWon = 0;
        console.log("game reset")
    }

    playerChoiceSelected(choice) {
        let computerItem = this.generateComputerItem();
        if(choice === "rock") {
            console.log("rock selected");
            if(computerItem ==="rock") {
                this.tie();
            }
            if(computerItem ==="paper") {
                this.computerWin();
            }
            if(computerItem ==="scissors") {
                this.playerWin();
            }
        }
        if(choice === "paper") {
            console.log("paper selected");
            if(computerItem ==="rock") {
                this.playerWin();
            }
            if(computerItem ==="paper") {
                this.tie();
            }
            if(computerItem ==="scissors") {
                this.computerWin();
            }
        }
        if(choice === "scissors") {
            console.log("scissors selected");
            if(computerItem ==="rock") {
                this.computerWin();
            }
            if(computerItem ==="paper") {
                this.playerWin();
            }
            if(computerItem ==="scissors") {
                this.tie();
            }
        }
    }

    rockSelected() {
        this.playerChoiceSelected("rock");
    }

    paperSelected(){
        this.playerChoiceSelected("paper");
    }

    scissorsSelected(){
        this.playerChoiceSelected("scissors");
    }

    tie() {
        console.log("computer selected " + this.computerItem + " it was a tie");
        const answerBox = document.getElementById("answerBox");
        answerBox.textContent = this.computerItem + ", it was a tie";
    }

    computerWin() {
        this.saveScore();
        this.roundsWon = 0;
        console.log("computer selected " + this.computerItem + " computer won");
        const answerBox = document.getElementById("answerBox");
        answerBox.textContent = this.computerItem + ", you lost";
        this.changeRoundsWon();
    }

    playerWin() {
        this.roundsWon++;
        console.log("computer selected " + this.computerItem + " you won!");
        const answerBox = document.getElementById("answerBox");
        answerBox.textContent = this.computerItem + ", you Won!";
        this.changeRoundsWon();
    }

    changeRoundsWon() {
        const roundsWonNumber = document.getElementById("count");
        roundsWonNumber.textContent = this.roundsWon;
    }


    saveScores() {
        console.log('fetch didnt work, just tracking locally');
        const name = this.getPlayerName();
        let scores = [];
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            scores = JSON.parse(scoresText);
            console.log(scores)
        }
        scores = this.updateScores(name, this.roundsWon, scores);
        localStorage.setItem('scores', JSON.stringify(scores));
        //const st = localStorage.getItem('scores');
        //if(st) {
        //    s = JSON.parse(st);
        //    console.log(s);
        //}
        //else {
        //    console.log('nothing in local storage')
        //}
        console.log('end save scores');
    }
    async saveScore(){
        let scoreName = this.roundsWon;
        const userName = this.getPlayerName();
        const date = new Date().toLocaleDateString();
        const newScore = {name: userName, score: scoreName, date: date};

        try {
            const response = await fetch('/api/score', {
              method: 'POST',
              headers: {'content-type': 'application/json'},
              body: JSON.stringify(newScore),
            });
      
            // Store what the service gave us as the high scores
            const scores = await response.json();
            localStorage.setItem('scores', JSON.stringify(scores));
            console.log('successfully completed fetch!');
          } catch {
            // If there was an error then just track scores locally
            //this.updateScoresLocal(newScore);
            this.saveScores();
            console.log('something went wrong in saveScore');
          }
    }
    /*
    updateScores(userName, score, scores) {
        const date = new Date().toLocaleDateString();
        const newScore = { name: userName, score: score, date: date };
        let alreadyPlayed = false;
        for (const [i, prevScore] of scores.entries()) {
            if (score > prevScore.score) {
              scores.splice(i, 0, newScore);
              found = true;
              break;
            }
        }
        if(alreadyPlayed===true) {
            scores.push(newScore);
        }
        if (scores.length > 7) {
            scores.length = 7;
        }
        console.log('end update scores');
        return scores;
    }*/
    updateScores(userName, score, scores) {
        const date = new Date().toLocaleDateString();
        const newScore = { name: userName, score: score, date: date };

        let inserted = false; 

        for (const [i, prevScore] of scores.entries()) {
            if (score > prevScore.score) {
                scores.splice(i, 0, newScore); 
                inserted = true;
                break;
            }
        }

        // If the new score hasn't been inserted, push it to the end
        if (!inserted) {
            scores.push(newScore);
        }

        if (scores.length > 7) {
            scores.length = 7;
        }
        console.log('end update scores');
        return scores;
    }

    
    


}

const game = new Game();