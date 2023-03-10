$(document).ready(() => {
    const quizeDB = [{
            'question': "Which of the following tag is used to embed css in html page?",
            'a': '<css>',
            'b': '<!DOCTYPE html>',
            'c': '<script>',
            'd': '<style>',
            'Correct': 'd',
        },
        {
            'question': 'Which of the following CSS style property is used to specify an italic text ? ',
            'a': 'style',
            'b': 'font',
            'c': 'font-style',
            'd': '@font-face',
            'Correct': 'c',
        },
        {
            'question': 'Which of the following CSS framework is used to create a responsive design?',
            'a': 'django',
            'b': 'rails',
            'c': 'bootstrap',
            'd': 'larawell',
            'Correct': 'c',
        },

        {
            'question': "Which of the following function defines a linear gradient as a CSS image?",
            'a': 'gradient()',
            'b': 'linear-gradient()',
            'c': 'grayscale()',
            'd': 'image()',
            'Correct': 'b',
        },
    ]

    let question = $("#question");
    let optionOne = $("#optionOne");
    let optiontwo = $("#optionTwo");
    let optionthree = $("#optionThree");
    let optionfour = $("#optionFour");
    let submit = $("#submit");
    let answers = document.querySelectorAll(".answer");
    let questionCount = 0;
    let questionList = quizeDB[questionCount];
    let total = quizeDB.length;
    // console.log(total)
    let right = 0,
        wrong = 0;

    const getanswer = () => {
        let ans;
        answers.forEach((currentAnsEle) => {
            if (currentAnsEle.checked) {
                ans = currentAnsEle.value
                $(".option_wrapper").addClass('active');
            } else {
                $(".alert").removeClass('d-none');
            }
        });
        return ans;
    }

    submit.click(function() {
        questionList = quizeDB[questionCount];
        const checkedAnswer = getanswer();
        if (checkedAnswer == questionList.Correct) {
            right++;
        } else {
            wrong++;
        }
        questionCount++;
        loadQuestion();
        return;
    })

    // load all question and option
    const loadQuestion = () => {
        if (questionCount === total) {
            return EndQuiz()
        }
        reset();
        let questionList = quizeDB[questionCount];
        question.text(`Q${questionCount + 1}) ${questionList.question}`)
        optionOne.text(questionList.a);
        optiontwo.text(questionList.b);
        optionthree.text(questionList.c);
        optionfour.text(questionList.d);
    }

    // uncheck the radio button
    const reset = () => {
        answers.forEach((currentAnsEle) => {
            if (currentAnsEle.checked) {
                currentAnsEle.checked = false;
            }
        });
    }
    loadQuestion();

    // end quiz 
    const EndQuiz = () => {
        $(".quiz_cont").addClass('d-none');
        // $(".quiz_cont").addClass('d-none');
        let result_div = $(".showScore");
        result_div.removeClass('d-none')

        result_div.html(`
        <div>
            <h3 class="text-center"><i class="fa-solid fa-square-poll-vertical score_icon mx-2"></i>Your Score</h3>
        </div>
        <div class="d-flex align-items-center justify-content-center flex-column">
            <div class="user_wrap d-flex align-items-center justify-content-center flex-column">
                <i class="fa-regular fa-user user mt-3 text-center"></i>
                <p class="score my-3">You Scored: ${right}/${total}</p>
            </div>
            <div class="d-flex align-items-center justify-content-center py-3">
                <button class="Restart_btn" onclick="location.reload()"><i class="fa-brands fa-google-play mx-2"></i>Play Again</button>
            </div>
        </div>
        `);
    }


    // counter
    // startCounter
    const startCounter = () => {
        let count = 0;
        setInterval(() => {
            $("#counter").html(`${count}`);
            // console.log(count)
            count++
        }, 1000);
    }


})