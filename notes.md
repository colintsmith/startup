# things I learned from creating my repository:
I learned that I can manage my repository from a console on my computer and how to push files to my online repository which is really helpful
I am also in the process of learning formatting syntax in these notes which I think is really interesting and am super hopeful that this works.

# notes on the history of the internet
First iteration of the internet was the ARPANET used for communicating between universities in preparation for a nuclear attack. In this two computers communicated directly without a single authority connecting them.  
Two big organizations manage the internet: the IETF and ICANN  
IETF = internet engineering task force  
ICANN = the Internet corporationof assigned names and numbers  


# Consol commands  
echo = ouptut something  
cd = change directory  
mkdir = make directory  
rmdir = remove directory  
rm = remove a file  
mv = move a file  
cp = copy file  
ls = list files  
curl = command line client URL browser  
grep = regular expression search  
find = find files  
top = View running processes with CPU and memory usage  
df = view disk statistics  
cat = output the contents of a file  
less = interactively output the contents of a file  
wc = word count  
ps = view currently running processes  
kill = stop a currently running process  
sudo = Execute a command as a super user (admin)  
ssh = Create a secure shell on a remote computer  
scp = Securely copy files to a remote computer  
history = show command history  
pint = check if a websiete is up  
tracert = race the connections to a website  
dig = Show the DNS information for a domain  
man = Look up a command in the manual  
You can chain commands together | is a pipe that passes one caommand to the other. > overwrites something. >> appends something.  control C kills a command.  

# VI commands  
:h - help  
i - insert mode  
u- undo  
ctrl-r - redo  
gg - go to beginning of file  
G - go to end  
/ - search for what you type after  
n - next search match  
N - previous search match  
v - visually select text  
y - yank or copy  
p - paste  
ctrl -wv - split window vertically
ctrl -ww - toggle windows  
ctrl -wq - close current window  
:e - open a file  
:w - write file (save)  
:q - quit  



# HTML notes
We separate HTML into elements and tags. Text is okay and can be used as an element. A tag can enclose an element to specify what it is.  
Every HTML element can have attributes. Attributes go in tag brackets and the actual attribute can have quotation marks around it.  
Comments are surrounded by two dashes.  

## Common elements:  
html - page container  
head - header info  
title - title of page  
meta - metadat for page  
script - javascript reference  
include - external content reference  
body - the entire content body of the page  
header - header of the main content  
footer - footer  
nav - naviagtational inputs  
main - main content  
section - section of the main content  
aside - aside form the main content  
div - block division of content  
span - inline span of content  
h<> - text heading 1-9  
p - paragraph  
b - bring attention  
table - table  
tr - table row  
th - table ehader  
td - table data  
ol, ul - ordered or unordered list  
li - list item  
a - anchor the text to a hyperlink  
img - graphical image reference  
dialog - interactive component such as a confirmation  
form - a collection of user input  
input - user input field  
audio - audio content  
video - video content  
svg - scalable vector graphic content  
iframe - inline fram of another HTML page  

## user input elements  
form - input container and submission  
fieldset - labeled input grouping  
input - multiple types of user input  
select - dropdown  
optgroup - grouped selection dropdown  
option - selection option  
textarea - multiline text input  
label - individual input label  
output - output of input  
meter - display value with a known range  

### common attributes for user input elements  
name - name of the input  
disabled  
value  
required  

# CSS notes  

## combinators  
descendents: body section  
child: section > p  
General sibling: div ~ p  
adjacent sibling: div + p  

## selectors  
class selectors is .  
ID selector is #  
units can be in pixels, inches, percentages, minimum viewport dimension, or multiplier of size of letter m (em).

## animation  
label it in the brackets with animation-name, then at the bottom you can add @keyframse _____ (the name). In the brackets you can put from {} and to {}. you can add percentage with brackets if like halfway you wanted to add soemthing else.

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

count tells you how many time a code is called.  

you can add javascript to HTML by using the script or by using script src=.  Also if you do onclick and put it in quotes.  

let and const declare variables. Const means you cant change the variable.  

## primitve types in javascript  
Null - has not been assigned  
Undefined - has not been defined  
Boolean  
Number  
BigInt  
String  
Symbol - unique value  

The difference between == and === is that the == will show equal between different types, === has to be the exact same type of things.  
and and or 

## object types in javascript  
Object - collection of properties  
function - object that has the ability to be called  
Date - calendar dates and times  
Array - an ordered sequence of any type  
Map - A collection of key balue pairs  
JSON - data interchange format  

## string functions  
Length - number of characters in the string  
indexOf() = the starting index of a given substring  
split() - split the string into an array on the given delimiter string  
startsWith = true if the string has a given prefix
endsWith = same
toLowerCase = converts all characters to lowercase  

## function stuff  
If parameter is not provided, it is labeled as undefined  

## arrow functions  
if no curly braces, then no return keyword is needed. If there are curly braces then you have to return something or just make it a background function.

## regular expresions  
Regular expressions are built into java script. You can do it by creating a new function or doing it another way  
the other way => const literalRegex = /ab*/i;  

or: onst objRegex = new RegExp('ab*', 'i');  
commands with regular expressions:  
text.match(reg) - match returns the things in text that match the regular expression.  
text.replace(reg, something) - replace the regular expressions in text with something  
using test just returns something as true  

Deeper reading: reg expressions are enclosed within /s. * means 0 or more of preceding symbol. Backslash makes special symbol literal symbols ex: \* just searches for an actual *. Letters after slashes are descriptors:  
d -generate indices for matches  
g - global search  
 i - case insensitive  
 m - allows ^ and $ to match to newline caharacters  
 s - allows . to match newline characters  
 u - unicode; treat a pattern as a sequence of unicode  
 v - an upgrade to u mode with more unicode features  
 y - perform a sticky search starting at the current position in the target string.

## Rest  
You can use a rest to create like an optional parameter in a function by putting three ... behind it. It can signify multiple or no parameters

## spread 
When the three dots are in the call of the function, then it can be expanded to the amount of parameters needed.  

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

## JSON formats
String, number, boolean, array, object {"a":1, "b":"someithng"}, null  

## object and classes  
object can be created with a cal too Object() like this:  
cost obj = new Object({a:3});  
obj['b'] = 'fish;
obj.c = [1,2,3];
obj.hello = fucntion () {
  console.log('something');
}
All valid  
You can call for entries, keys, and values to see the lists.
Any function that returns an object is a constructor  




## modules  
if you want to use a module you have created you have to export specific functions and then import the file in another file.: import { alertDisplay } from './alert.js';  
On the Java side you have to label it has an export function
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

TODO: What is TLD (top level domain) - last part of a domain name  

Await causes every thing to stop until promise resolves.    

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

# The internet

## TCP/IP layers  

Applicatoin - HTTPS  
Transport - TCP  
Internet - IP  
Link - fiber  

## URL  

scheme - https  
domain name - byu.edu  
port - 3000  
Path -/something/something  
parameter - filter=names&highlight=intro,summary  
anchor - summary  

## ports

20	File Transfer Protocol (FTP) for data transfer
22	Secure Shell (SSH) for connecting to remote devices
25	Simple Mail Transfer Protocol (SMTP) for sending email
53	Domain Name System (DNS) for looking up IP addresses
80	Hypertext Transfer Protocol (HTTP) for web requests
110	Post Office Protocol (POP3) for retrieving email
123	Network Time Protocol (NTP) for managing time
161	Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers
194	Internet Relay Chat (IRC) for chatting
443	HTTP Secure (HTTPS) for secure web requests

## Express  
Express provides support for:  
Routing requests for service endpoints  
Manipulating HTTP requests with JSON body content  
Generating HTTP responses  
Using middleware to add functionality  


## SOP notes and CORS  
Same origin policy - only allows JavaScript to make requests to a domain if it is the same domain that the user is currently viewing.  
Cross origin research sharing -  allows the client to specify the origin of a request and then let the server respond with what origins are allowed.  
access-control-allow-origin: * - means anybody can send an HTTP request

## Service daemons and PM 2  
Daemon means that it runs even while the console is off. PM 2 helps you do that  
pm2 ls-	List all of the hosted node processes  
pm2 monit-	Visual monitor  
pm2 start index.js -n simon-	Add a new process with an explicit name  
pm2 start index.js -n startup -- 4000	Add a new process with an explicit name and port parameter  
pm2 stop simon-	Stop a process  
pm2 restart simon-	Restart a process  
pm2 delete simon-	Delete a process from being hosted  
pm2 delete all-	Delete all processes  
pm2 save-	Save the current processes across reboot  
pm2 restart all-	Reload all of the processes  
pm2 restart simon --update-env	Reload process and update the node version to the current environment definition  
pm2 update-	Reload pm2  
pm2 start env.js --watch --ignore-watch="node_modules"-	Automatically reload service when index.js changes  
pm2 describe simon-	Describe detailed process information  
pm2 startup-	Displays the command to run to keep PM2 running after a reboot.  
pm2 logs simon-	Display process logs  
pm2 env 0-	Display environment variables for process. Use pm2 ls to get the process ID  


## Data services  
Mongo DB is a non sql language that we are going to use for data services. Json object is core data model.no rigid structure.
find all houses: db.house.find();

find houses with two or more bedrooms: db.house.find({ beds: { $gte: 2 } });

find houses that are available with less than three beds: db.house.find({ status: 'available', beds: { $lt: 3 } });

find houses with either less than three beds or less than $1000 a night: db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

find houses with the text 'modern' or 'beach' in the summary: db.house.find({ summary: /(modern|beach)/i });


## Authorization 
For authorization you usually store an auth token as a cookie. SSO means you use one sign on for multiple applications (like asking google sign on for some random application)

## account creation and login
Usually this requires two service endpoints: one to create authenticaiton credential, and the other to authenticat efor future visits. getMe endpoint suually gives information about currently authenticated user.