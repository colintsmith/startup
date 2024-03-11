# startup
startup application for BYU CS260  

## Startup Specifications:
### Elevator pitch:
Have you ever thought you were the smartest person in the room? Or maybe you think that you can be very lucky in a simple game of chance? With rock, paper, scissors you can test your luck against the computer to see how many games in a row you can beat the machine! See if you can beat your friends with your high score!  

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
Web Sockets: Web Sockets will be used to keep track of realtime score leaders of the game.  
React: My application will use React to add components and request routing.  

### HTML pages
I built HTML pages for each of the pages in my website.  
index.html: in this page the user will be able to log in or register a new account to keep track of scores.  
play.html: on this page the user will be able to play the game and keep track of how many games in a row they have won  
scores.html: this page will allow the user to see the top scores of the users that have played the game.  
about.html: this page will allow the user to learn the rules of the game and learn a short history of rock, paper, scissors

### CSS pages
I created and wrote pages for the css of each of the HTML pages in my website. I also updated the HTML code to incorporate the bootstrap style framework.  
The following CSS pages were created and written for this deliverable:  
main.css  
play.css  
about.css  
I also update the following HTML pages for styling:  
indext.html  
play.html  
scores.html  
about.html  

### Javascript Pages

I created three javascript pages for this assignment to add funcitonality to my website. Now the website should work with rock paper scissors against a computer and update the high scores to the sores page. I also updated the HTML code and some CSS code to make sure my functionality worked.  
The following pages were created:  
login.js  
scores.js  
play.js  
I updated the following pages:  
index.html  
play.html  
scores.html  
about.html  
main.css  


### Service deliverable

I created an HTTP service using Node.js and express. The frontend is served using Express middlewear which calls third party service endpoints. I changed my previous files so all files completed previously were put into the "public" directory. The only one that was changed was the "scores.js" to be able to interact with the front end service calls. The new file I created is called "index.js" which completes assignment as previously described. 