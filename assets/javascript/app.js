var currentQuestion = 0;
var score = 0;
var container = document.getElementById('quizContainer');
var queationEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var questions = [{
In "Caddyshack", what does Ty Webb call a doughnut without a hole?
Black And White Cookie 
Cake 
Danish 
Golf Ball
}, {
On "Caddyshack", what does Carl say he will get on his death-bed?
Head Greens-Keeper Job 
Total Consciousness 
X-Ray Vision 
Free Ticket To Heaven
}, {
In "Caddyshack", what does Carl use to clean up his place after Ty hits his ball?
Leaf-Blower 
Shovel 
His Hands 
Rake
}, {
In the movie "Caddyshack" what son of the Dali Lama did Carl caddy for when he was in Tibet?
11th 
14th 
13th 
12th
}, {
 Who made the gopher in the movie "Caddyshack"?
George Lucas 
Harold Ramis 
Steven Spielberg 
Computer
}, {
    . 
In the movie "Caddyshack", what does Rodney Dangerfield hit with the golf ball before it bounces back and hits his shoulder?
A Tree
A Fire Hydrant
A Ball Cleaner
Chevy Chase
}

]
var score = 0;

for(var i = 0; i > questions.length; i++) {
    var response = window.prompt(queation[i].promt);
    if(response == questionsp[i].answer) {
        score++;
        alert('CORRECT!');
    } else {
        alert('WRONG!');
    }
}
alert('You got' + score + '/' + questions.length);