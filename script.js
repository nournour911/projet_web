const quizData = [
    {
        question: "Que signifie HTML ?",
        a: "HyperText Markup Language",
        b: "HighTech Modern Language",
        c: "HyperTool Markup Language",
        d: "HyperText Markdown Language",
        correct: "a",
    },
    {
        question: "Quel attribut HTML définit un lien hypertexte ?",
        a: "<link>",
        b: "<a>",
        c: "<href>",
        d: "<url>",
        correct: "b",
    },
    {
        question: "Que signifie CSS ?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Colorful Style System",
        d: "Creative Style Standards",
        correct: "b",
    },
    {
        question: "Quelle propriété CSS est utilisée pour changer la couleur du texte ?",
        a: "color",
        b: "font-color",
        c: "text-color",
        d: "background-color",
        correct: "a",
    },
    {
        question: "Quel élément HTML est utilisé pour insérer une image ?",
        a: "<img>",
        b: "<image>",
        c: "<picture>",
        d: "<src>",
        correct: "a",
    },
    {
        question: "Quelle balise HTML est utilisée pour créer un paragraphe ?",
        a: "<para>",
        b: "<p>",
        c: "<paragraph>",
        d: "<text>",
        correct: "b",
    },
    {
        question: "Quelle propriété CSS contrôle l'espacement autour d'un élément ?",
        a: "padding",
        b: "margin",
        c: "spacing",
        d: "border-spacing",
        correct: "b",
    },
    {
        question: "Quelle balise HTML permet de créer une liste ordonnée ?",
        a: "<ul>",
        b: "<ol>",
        c: "<li>",
        d: "<list>",
        correct: "b",
    },
    {
        question: "Quel attribut CSS permet de définir une image de fond ?",
        a: "background-image",
        b: "image",
        c: "background-url",
        d: "background-src",
        correct: "a",
    },
    {
        question: "Quelle est la balise HTML correcte pour le plus grand titre ?",
        a: "<heading>",
        b: "<h6>",
        c: "<h1>",
        d: "<head>",
        correct: "c",
    },
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

// Charger la première question
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// Décocher les réponses sélectionnées
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// Récupérer la réponse sélectionnée
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// Gérer le bouton Submit
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // Afficher le score final et la liste des réponses correctes
            const correctAnswers = quizData.map((item, index) => {
                return `<p><strong>Question ${index + 1}:</strong> ${item.question} <br>
                Réponse correcte : <strong>${item[item.correct]}</strong></p>`;
            }).join('');

            quiz.innerHTML = `
                <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions.</h2>
                <h3>Réponses correctes :</h3>
                <div>${correctAnswers}</div>
                <button onclick="location.reload()">Recommencer</button>
            `;
        }
    }
});
