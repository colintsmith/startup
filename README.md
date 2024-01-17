# startup
startup application for BYU CS260

## Startup Specifications:
### Elevator pitch:
Have you ever thought you were the smartest person in the room? Or maybe you think that you can be very lucky in a simple game of chance? With rock, paper, scissors you can test your luck against the computer to see how many games in a row you can beat the machine!

### Design
![screenshot of my design for the login page](/loginpagedraft.jpg)
![screenshot of my design for the game page](/gamepagedraft.jpg)
![screenshot of my design for the scores page](/scorespagedraft.jpg)
![screenshot of my design for the last page](/lastpagedraft.jpg)

### Key Features:
Secure login over HTTPS  
Display choice of rock, paper, scissors for user to interact with  
A score page to keep track of the users who have won the most games in a  row  
A page describing the rules of rock, paper, scissors for new users  
A short paragraph describing the history of the game and why it is being used in this format  

### Technologies:
HTML: I am going to use four HTML pages: one for the log in, one for the game, one to display high scores, and the last to give a description of the game.
CSS: I am going to use CSS to make sure the application has a good and appropriate style that will look good on all screen sizes, and makes good use of whitespace to maximize user experience.
JavaScript: I will use Javascript to provide login, display game options, and show what decision is made by the computer.
Web Service: Web Service will be used with endpoints for login, retrieving user choices, retrieving computer choices, and establishing a winner.
Database: My database will store user information like username and password, and also keep track of the high scores by each of the users. 
Web Sockets: Web Sockets will be used to keep track of realtime score leaders of the game
React: My application will use React to add components and request routing.