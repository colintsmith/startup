# things I learned from creating my repository:
I learned that I can manage my repository from a console on my computer and how to push files to my online repository which is really helpful
I am also in the process of learning formatting syntax in these notes which I think is really interesting and am super hopeful that this works.

# notes on the history of the internet
First iteration of the internet was the ARPANET used for communicating between universities in preparation for a nuclear attack. In this two computers communicated directly without a single authority connecting them.  
Two big organizations manage the internet: the IETF and ICANN  
IETF = internet engineering task force  
ICANN = the Internet corporationof assigned names and numbers  





# HTML notes
We separate HTML into elements and tags. Text is okay and can be used as an element. A tag can enclose an element to specify what it is.  
Every HTML element can have attributes. Attributes go in tag brackets and the actual attribute can have quotation marks around it.  
Comments are surrounded by two dashes.  

# responsive desing notes
Ability to reconfigure the interface so the applicaiton accomodates screen size regardless of decice.  
options in CSS:  
none - dont display element  
block - display element with width that fills its parent element  
inline - display element with width only as big as content  
flex - Display elemnt's children in a flexible orientation  
grid - display this element's children in a grid orientation  
  
  div elements have a display property value of block by default.  

## meta tag  
meta tag allows an entire website to be viewable on mobile devices. Meta tag is included in head element of all HTML pages  

## Float  
moves an element to right or left of its container element and allows inline elements to wrap around it.  

## media queries  
@ media slector dynamically detects size and orientation of the device and applies CSS rules to represent the structure of HTML to accomodate.

## grid and flexbox  
Both CSS display modes that respond to screen sizes to poisition and resize thier child elements.

### grid  
This layout is useful for displaying group of child elements in a responsive grid  

### flexbox  
useful for when you want to partition your application into areas that responsively move around as the window resizes. 

# Javascript notes  

## regular expresions  
Regular expressions are built into java script. You can do it by creating a new function or doing it another way  
the other way => const literalRegex = /ab*/i;  

or: onst objRegex = new RegExp('ab*', 'i');  
commands with regular expressions:  
text.match(reg) - match returns the things in text that match the regular expression.  
text.replace(reg, something) - replace the regular expressions in text with something  
using test just returns something as true  

## Rest  
You can use a rest to create like an optional parameter in a function by putting three ... behind it

## spread 
I am not understanding this one  

## try, catch, throw
Used the same way all the other coding languages do it. Just know that finally is always executed at the end. 

## destructuring  
Destructuring is pulling items out of an array. Say 'a' is an array with like 4 numbers in it:  
const [b,c] = a;  
with that would set b and c equal to the first two numbers in the a array.  
this works also with the rest triple thing if you do this:  
const [b,c,...end] = a  
this would be the same but the end variable would be the rest of the array


## Scope  
Var describes the variable, like const or let, except that it ignores scope so it can be tricky  
### this
global this is refers to the actual environment  
this in a function refers to the object that owns the function  
in an object, this refers to the object itself.
NEED TO STUDY THIS MORE  

## arrays
Array functions:
push = add item to end of array  
pop = remove item from end of array  
slice(start, end) = return sub array  
sort = run a function to sort an array in place  
values = creates an iterator for use with a for of loop (iterate through values)  
find( i => i < 2>) = run a function on each array item  
reduce((a,c) => a + c) = run function to reduce each array item to a single item  
map(i => i+i) run function to map an array to a new array  
filter(i => i%2) = run function to remove items, removes items that do not match the filter?
every(i => i < 3) = run function to test if all items match  
some = same thing as above but if any items match  

## modules  
if you want to use a module you have created you have to export specific functions and then import the file in another file.: import { alertDisplay } from './alert.js';  
to use a module in HTML use script type="module"  
then import whatever function you want to use

## DOM
### Event listeners  
clipboard = cut copy or paste  
focus = an element gets focust  
keyboard = keys are pressed  
mouse = click event  
text selection = when text is selected  

## Promise
This lets you run things in parallel  
three states of a promise object:  
Pending  
Fulfilled  
Rejected  
to create a promise object, just call the promise object constructor: new promise(resolve, reject)  
The two parameters are the two parameters that the object takes, resolve sets it to fulfilled, reject sets sets it to rejected
set timeout function allows you to wait a set number of milliseconds until a function is done  
### Then, catch, finally
These are the three functions of a promise object: then is called when a promise is fulfilled, catch is called if a promise is rejected, and finally is always called at the end. 

## async/await
await keyword wraps execution of a promise. It will block until promise state moves to fulfilled or throws an exception if the state moves to rejected.  
async changes the function so that it returns a promise that will resolve to the value that was previously returned by the function.  
Async means that a function returns a promise. The await keyword wraps a call to async function, blocks execution utnil it is resolved and then returns the result.

# Midterm review  
There are several ways to include javascrip in your HTML file. You can just lable it as script, include it as a source file, include it as an onclick. However labeling it as javascript is not anything.  

You can import into CSS different fonts and stuff by using @import url('your url here')  

Arrow function syntax is very important. Declares a function  

Know the order of the CSS box model!!  
Margin, border, padding, content (in middle)  

CSS property padding puts space around the content of selected elements.  

TODO: FIGURE OUT WHAT COLUMNS MEANS AS OPPOSED TO ROW (columns means everthing is in the same column up and down, if it was rows then everything in the same content thing would be one row)  

There is a difference between list and unordered list. ul is unordered list, li is an ordered list.

chmod makes a script executable form the console.
TODO: READ THE INSTRUCTION PAGE ON MODULE COMMANDS

join() joins things in a list. If it has a parameter it includes it between each thing in the list.  

subdomain is everything under a root domain.  

TODO: What is TLD (top level domain)  

Await causes every thing to stop until promise resolves.  

TODO: figure out regular expressions.   

The query selector for event listeners adds the listener to only the first thing that matches the selector (just the first list if your selecting lists)  

div stands for division  

DOM text content sets the child text of an element  

Java script objects are created using colons not equals.  

a href is how to create a hyperlink in HTML  

JSON are only double quotes with a colon  

DNA record type: A record = name to IP address. TXT maps to text value. SOA is how to link up DNS record to someone else (not sure on this one). CNAME is an alias that links to different host list.   

if you use 'function' to create a function, DO NOT USE AN EQUALS SIGN, GO STRAIGHT TO CURLY BRACES  

For CSS: if no dot, that is the actual element name. After the dot it is the class name  

IF NO AWAIT AND THERE IS A PROMISE, THE THING WONT WAIT FOR THE PROMISE AND WILL CONTINUE WITH REST OF CODE.