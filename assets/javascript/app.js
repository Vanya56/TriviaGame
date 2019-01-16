// Question loads but does not go on to the next question. I'm not sure what's qrong :(


var currentQuestion = 0;
var score = 0;
var t = 200;
var questions = [{
    'question': 'What does Ty Webb call a doughnut without a hole?',
    'option1': 'Black And White Cookie',
    'option2': 'Cake',
    'option3': 'Danish',
    'option4': 'Golf Ball',
    'answer': '3'
}, {
    'question': 'What does Carl say he will get on his death-bed?',
    'option1': 'Head Greens-Keeper Job',
    'option2': 'Total Consciousness',
    'option3': 'X-Ray Vision',
    'option4': 'Free Ticket To Heaven',
    'answer': '2'
}, {
    'question': 'What does Carl use to clean up his place after Ty hits his ball?',
    'option11': 'Leaf-Blower',
    'option2': 'Shovel',
    'option3': 'His Hands',
    'option4': 'Rake',
    'answer': '1'
}, {
    'question': 'What son of the Dali Lama did Carl caddy for when he was in Tibet?',
    'option1': '11th',
    'option2': '14th',
    'option3': '13th',
    'option4': '12th',
    'answer': '3'
}, {
    'question': 'Who made the gopher in the movie Caddyshack?',
    'option1': 'George Lucas',
    'option2': 'Harold Ramis',
    'option3': 'Steven Spielberg',
    'option4': 'Computer',
    'answer': '1'
}, {
    'question': 'What does Rodney Dangerfield hit with the golf ball before it bounces back and hits his shoulder?',
    'option1': 'A Tree',
    'option2': 'A Fire Hydrant',
    'option3': 'A Ball Cleaner',
    'option4': 'Chevy Chase',
    'answer': '1'
}]
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var totalQuestions = questions.length;
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');


function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '.' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption) {
        alert('Select your answer!');
        return;
    }
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score++;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    if (currentQuestion == totalQuestions) {
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'your score' + score;
        return;
    }

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        number--;
        $("#time").html("<text>" + number + "<text>");
        if (number === 0) {
            stop();
            alert("Times Up!");
        }
        run(t);
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);