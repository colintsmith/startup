


class Game {
    playerItem;
    computerItem;
    roundsWon;

    constructor() {
        playerItem = 0;
        computerItem = 0;
        roundsWon = 0;
    }

    generateComputerItem() {
        let comp = Math.floor(Math.random() * 3) + 1;
        if(comp === 1) {
            return "rock"
        }
        if(comp === 2) {
            return "paper"
        }
        if(comp === 3) {
            return "scissors"
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
    }

    
}

const game = new Game();