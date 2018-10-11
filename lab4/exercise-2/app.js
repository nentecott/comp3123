const say = require('say')

//Use deafult system voice and speed
say.speak('Hello!')

//Stop the text currently being spoken
say.stop()

//More complex (with an OS X voice) and slow speed
say.speak("Hello?", 'Alex', 0.5)

//function made to contain a say.speak
var sorryDave = function(){
    say.speak("I'm sorry Dave", 'Alex', 1)
}
sorryDave();

//using the setTimeOut function say "Hell?" followed by "Hello Alex"

function sayHello(greeting, name){
    (phrase + ', ' + name);
}
setTimeout(sayHello, 5000, "Hello", "Alex");