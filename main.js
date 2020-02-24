const app = new Vue({
    el: document.querySelector('main'),
    data: {
        questions: [{
                prompt: "Vilken av följande artister låg inte på Service?",
                options: ["The Embassy", "Jose Gonzalez", "Jens Lekman", "TTA"],
                answer: "Jose Gonzalez",
                guess: null
            },
            {
                prompt: "Vart arrangerades 'Indieboda'?",
                options: ["Lönsboda", "Pålsboda", "Emmaboda", "Hultsfred"],
                answer: "Emmaboda",
                guess: null
            },
            {
                prompt: "Vilket år kommer BD - Saturday night engine ut?",
                options: ["1994", "1995", "1996", "1997"],
                answer: "1995",
                guess: null
            },
            {
                prompt: "Vilket community hittade man indiebilder2.0 på?",
                options: ["Lunarstorm", "Helgon.net", "Skunk", "Blandband.nu"],
                answer: "Skunk",
                guess: null
            },
            {
                prompt: "Vilken grupp slog rapparen Frej Larsson igenom med?",
                options: ["Pluxus", "Snok", "Slagsmålsklubben", "Monster & Maskiner"],
                answer: "Slagsmålsklubben",
                guess: null,
            }
        ]
    },
    computed: {
        // Find the score by counting the number of questions where the guess matches the answer.
        score: function() {
            return this.questions.filter(q => q.guess === q.answer).length;
        },
        // There are questions left if there is at least one question left where the guess is null.
        questionsRemain: function() {
            const guessedQuestions = this.questions.filter(q => q.guess !== null).length;
            return guessedQuestions < this.questions.length;
        }
    },
    methods: {
        makeGuess: function(question, option) {
            question.guess = option;
        },
        // The following two methods are needed to create unique IDs for our <label> elements.
        questionId: function(question) {
            const questionIndex = this.questions.indexOf(question);
            return 'question-' + questionIndex;
        },
        optionId: function(question, option) {
            const questionIndex = this.questions.indexOf(question);
            const optionIndex = question.options.indexOf(option);
            return 'question-' + questionIndex + '-option-' + optionIndex;
        }
    }
});