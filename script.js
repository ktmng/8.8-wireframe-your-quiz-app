//DATABASE
const STORE = {
    allQuestions: [
    {
      question: 'What other name do betta fish go by?',
      answer1: 'Alpha Fish',
      answer2: 'Gamma Fish',
      answer3: 'Siamese Fighting Fish', 
      answer4: 'Kissing Gouramis',
      correctAnswer: 'Siamese Fighting Fish'
    },
    {
      question: 'On average, how long do betta fish live in captivity?',
      answer1: '1-2 years',
      answer2: '3-5 years',
      answer3: '6-9 years',
      answer4: '10+ years',
      correctAnswer: '3-5 years'
    },
    {
      question: 'Betta fish are bred around the world for their amazing colors and diverse fins! They are often identified and referred to by the shape of their tails. Which of the following is not a common betta tail type?',
      answer1: 'Feathertail', 
      answer2: 'Veiltail',
      answer3: 'Spadetail',
      answer4: 'Eclipsetail',
      correctAnswer: 'Eclipsetail'
    }, 
    {
      question: 'What is the name of the nests that male betta fish create at the surface of the water?',
      answer1: 'Spit Nests',
      answer2: 'Bubble Nests',
      answer3: 'Baby Betta Nests', 
      answer4: 'Floating Nests',
      correctAnswer:'Bubble Nests'
    },
    {
      question: 'What organ allows betta fish to breathe air and survive in waters with low-oxygen content and out of water for short periods?',
      answer1: 'Swim Bladder', 
      answer2: 'Gills',
      answer3: 'Labyrinth Organ',
      answer4: 'Air Sac Organ',
      correctAnswer: 'Labyrinth Organ'
    },
    {
      question: 'What kind of container should betta fish be kept in if you were to house one?',
      answer1: 'The cups they come in at the pet store', 
      answer2: 'A vase with a live plant that’s kept in the kitchen',
      answer3: 'A fishbowl like the one Dorothy has on Elmo’s World',
      answer4: 'A tank that is at least 2.5 gallons',
      correctAnswer: 'A tank that is at least 2.5 gallons'
    },
    {
      question: 'Betta fish are tropical fish, naturally found in the warm waters at lower altitudes. What water temperatures should betta fish be kept in?',
      answer1: '65-70°F (18.3-21.1°C)', 
      answer2: '72-75°F (22.2-25.0°C)',
      answer3: '78-80°F (25.6-26.5°C)',
      answer4: '81-86°F (27.2-30.0°C)',
      correctAnswer: '78-80°F (25.5-26.5°C)'
    },
    {
      question: 'Although typically an agressive species, it is possible for betta fish to have tank mates. However, you have to be careful especially when introducing them. Which tank mates would be an appropriate choice for betta fish?',
      answer1: 'Other betta fish', 
      answer2: 'Cichlids',
      answer3: 'Schooling Fish',
      answer4: 'Corydoras Catfish',
      correctAnswer: 'Corydoras Catfish'
    },
    {
      question: 'What tank decor is inappropriate for betta fish?',
      answer1: 'Seashells and Coral', 
      answer2: 'Marimo Balls',
      answer3: 'Live Plants',
      answer4: 'Smooth Rocks',
      correctAnswer: 'Seashells and Coral'
    }, 
    {
      question: 'Betta fish love to eat and beg for more food! Be careful not to overfeed them! Which of the following is least appropriate for betta fish to consume?',
      answer1: 'Fish Flakes', 
      answer2: 'Betta Pellets',
      answer3: 'Blood Worms',
      answer4: 'Brine Shrimp',
      correctAnswer: 'Fish Flakes'
    }, 
    ],
    quizOnOff: 'off',
    questionNumber: 0,
    score: 0 
  };
  
  //GENERATE FUNCTIONS: literally make wtv i need  --------------------------------------
  
  //fxn generateStartingScreen: makes what is displayed when page is loaded
  function generateStartingScreen() { 
    return`
    <section class="questionBox">
      <span class="question">Test your knowledge about betta fish and how to care for them!</span>
      <button class="startButton">Start</button>
    </section>`;
  }
  
  //fxn generateQuestion: makes a template for: question + answers + submit answer button 
  function generateQuestion (question, answer1, answer2, answer3, answer4) {
    return`
    <section class="questionBox">
      <form>
      <fieldset>
        <legend class='question'>${question}</legend>
        <label for='answer1'><input type='radio' class='answer' required>${answer1}</label>
        <label for='answer2'><input type='radio' class='answer' required>${answer2}</label>
        <label for='answer3'><input type='radio' class='answer' required>${answer3}</label>
        <label for='answer4'><input type='radio' class='answer' required>${answer4}</label>
      </fieldset>
      <button type='submit' class='submitAnswer'>Submit</button>
      </form>
    </section>`;
  }
  
  //fxn generateCorrectAnswer: makes what's displayed when user is correct
  function generateCorrectAnswer() {
    return`
    <section class='correctAnswer'>
      <span>That's Correct!</span>
      <button class='nextQuestion'>Next Question</button>
    </section>`;
  }
  
  //fxn generateWrongAnswer: makes what's displayed when user is wrong
  function generateWrongAnswer() { //how to add correctAnswer?
    return`
    <section class='wrongAnswer'>
      <span>Sorry, That's Not It</span>
      <button class='nextQuestion'>Next Question</button>
    </section>`;
  }
  
  //fxn generateQuestionAndScoreUpdater: updates what q user is on and what score they have
  function generateQuestionAndScoreUpdater() {
    return`
    <section class='currentQuestionAndScore'>
      <ul>
      <li>Question: ${STORE.questionNumber+1}/5</li>
      <li>Score: ${STORE.score}/5</li>
      </ul>
    </section>`;
  }
  
  //fxn generateFinalScore: makes what's displayed when user is done with quiz + retake button
  function generateFinalScore() {
    let results = '';
      if (STORE.score = 10) {
        results = 'Wow! You got them all!';
      } else if (STORE.score >= 8) {
        results = 'Nice Job!';
      } else if (STORE.score >= 6) {
        results = 'Good Try. Read up a little more on Betta Fish!';
      } else {
        results = 'Please don\'t own a betta fish until you\'ve done more research!';
      }  
    return `
    <section class='finalScore'>
      <span>Your final score is ${STORE.score}/5</span>
      <span>${results}</span>
    </section>
    <button type='reset' class='retake'>Retake The Quiz</button>`;  
  }
  
  
  //RENDER FUNCTIONS: add respecting fxns in the HTML --------------------------------------
  
  
  function renderStartingScreen() {
    const addToHtml = generateStartingScreen();
    $('.main').html(addToHtml);
  }
  
  function renderQuestion() { //arrayName[item#]
    question = STORE.question[questionNumber],
    answer1 = STORE.answer1[questionNumber], 
    answer2 = STORE.answer2[questionNumber],
    answer3 = STORE.answer3[questionNumber],
    answer4 = STORE.answer4[questionNumber],
    addToHtml = generateQuestion(question, answer1, answer2, answer3, answer4);
    $('.main').html(addToHtml);
  }
  
  function renderCorrectAnswer() { 
    const addToHtml = generateCorrectAnswer();
    $('.main').html(addToHtml);
  }
  
  function renderWrongAnswer() {
    const addToHtml = generateWrongAnswer();
    $('.main').html(addToHtml);
  }
  
  function renderQuestionAndScoreUpdater() {
    const addToHtml = generateQuestionAndScoreUpdater();
    $('.main').html(addToHtml);
  }
  
  function renderFinalScore() {
    const addToHtml = generateFinalScore();
    $('.main').html(addToHtml);
  }
  
  //EVENT HANDLING: do stuff when user does stuff  --------------------------------------
  
  //fxn handleStartingQuiz: when user clicks start button --> turn on quiz --> display first question --> update q# and score
  function handleStartingButton() {
    $('.main').on('click', '.startButton', function(event) {
      STORE.quizOnOff = 'on';
      renderQuestion();
      renderQuestionAndScoreUpdater();
    });
  }
  
  //fxn handleSubmitButton: when user clicks submit button --> check if answer is correct(increase score by 1) or wrong --> display proper response --> update q# and score
  function handleSumbitButton() {
    $('.main').on('click', '.submitAnswer', function(event) {
      if ($('input'.val()) === STORE.correctAnswer[questionNumber]) {
        STORE.score++;
        renderCorrectAnswer();
      } else {
        renderWrongAnswer();
      }
    renderQuestionAndScoreUpdater()
    });
  }
  
  //fxn handleNextQuestion: when user clicks next button --> if not done: increase questionNumber by 1 + generate next question + update q# and score OR! if done: generate final score
  function handleNextQuestionButton() {
    $('.main').on('click', '.nextQuestion', function(event) {
      if (STORE.questionNumber = 5) {
        renderFinalScore();
      } else {
        STORE.questionNumber++;
        renderQuestion();
        renderQuestionAndScoreUpdater();
      }
    });  
  }
  
  //fxn handleRetakeButton: when user clicks retake quiz button --> turn off the quiz --> reset q# and score values back to 0 --> load starting screen --> update q# and score
  function handleRetakeButton() {
    $('.main').on('click', '.retake', function(event) {
      STORE.quizOnOff = 'off';
      STORE.questionNumber = 0;
      STORE.score = 0;
      renderStartingScreen();
      renderQuestionAndScoreUpdater();
    });
  }
  
  
  //MAKE ALL THE FXNS DO THEIR THING!!!  --------------------------------------
  
  //fxn doEverything: 1. load starting screen 2. user clicks start 3. user clicks submit 4. load final score (already in 3) 5. user retakes quiz
  function doEverything() {
    renderStartingScreen();
    handleStartingButton();
    handleSumbitButton();
    handleRetakeButton();
  }