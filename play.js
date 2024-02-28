


class Game {
    playerItem;
    computerItem;
    roundsWon;

    constructor() {
        this.playerItem = 0;
        this.computerItem = 0;
        this.roundsWon = 0;
        console.log("game initiated");
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
        return localStorage.getItem('userName') ?? 'Mystery player';
    }
    
    updateRoundsWon() {
        roundsWon++;
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
        answerBox.textContent = this.computerItem + " it was a tie";
    }

    computerWin() {
        this.roundsWon = 0;
        console.log("computer selected " + this.computerItem + " computer won");
        const answerBox = document.getElementById("answerBox");
        answerBox.textContent = this.computerItem + " you lost";
        this.changeRoundsWon();
    }

    playerWin() {
        this.roundsWon++;
        console.log("computer selected " + this.computerItem + " you won!");
        const answerBox = document.getElementById("answerBox");
        answerBox.textContent = this.computerItem + " you Won!";
        this.changeRoundsWon();
    }

    changeRoundsWon() {
        const roundsWonNumber = document.getElementById("count");
        roundsWonNumber.textContent = this.roundsWon;
    }
    


}

const game = new Game();