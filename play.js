


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
            return "rock";
        }
        if(comp === 2) {
            return "paper";
        }
        if(comp === 3) {
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
        //let computerItem = generateComputerItem();
        if(choice === "rock") {
            console.log("rock selected");
        }
        if(choice === "paper") {
            console.log("paper selected");
        }
        if(choice === "scissors") {
            console.log("scissors selected");
        }
    }

    rockSelected() {
        this.playerChoiceSelected("rock")
    }

    paperSelected(){
        this.playerChoiceSelected("paper")
    }

    scissorsSelected(){
        this.playerChoiceSelected("scissors")
    }


}

const game = new Game();