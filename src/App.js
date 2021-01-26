import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Question from "./components/Question";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import { LoremIpsum } from "lorem-ipsum";
import ResultModal from "./components/ResultModal";

var randomNumber = require("random-number");

function App() {
  let [questionsAndOptions, setQuestionsAndOptions] = useState([]);
  let [numberOfQuestions] = useState(10);
  let [numberOfOptions] = useState(4);
  let [numberOfAnsweredQuestions, setNumberOfAnsweredQuestions] = useState(0);
  let [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);

  useEffect(() => {
    createQuestionAndOptions();
  }, []);

  function createQuestionAndOptions() {
    const questionLorem = new LoremIpsum({
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    });
    const optionLorem = new LoremIpsum({
      wordsPerSentence: {
        max: 3,
        min: 1,
      },
    });

    let questionsAndOptionsGenerated = [...Array(numberOfQuestions)].map(
      (question, questionIndex) => {
        let questionGenerated = {
          _id: questionIndex,
          name: questionLorem.generateSentences(1).slice(0, -1) + "?",
          trueOption: randomNumber({
            min: 1,
            max: 4,
            integer: true,
          }),
          selectedOption: "",
        };

        let optionsGenerated = [...Array(numberOfOptions)].map(
          (option, optionIndex) => {
            let optionGenerated = {
              _id: optionIndex + 1,
              name: optionLorem.generateSentences(1),
            };
            return optionGenerated;
          }
        );
        return {
          ...questionGenerated,
          options: optionsGenerated,
        };
      }
    );

    setQuestionsAndOptions(questionsAndOptionsGenerated);
  }

  function checkOption(questionId, optionId) {
    let updatedQuestionAndOptions = questionsAndOptions.map((question) => {
      if (question._id === questionId) {
        question.selectedOption = optionId;
        setNumberOfAnsweredQuestions(numberOfAnsweredQuestions + 1);
        if (question.selectedOption === question.trueOption) {
          setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1);
        }
      }
      return question;
    });
    setQuestionsAndOptions(updatedQuestionAndOptions);
  }

  function testAgain() {
    window.location.reload();
  }

  return (
    <div className="app">
      {numberOfAnsweredQuestions === numberOfQuestions ? (
        <ResultModal
          correct={numberOfCorrectAnswers}
          incorrect={numberOfQuestions - numberOfCorrectAnswers}
          testAgain={testAgain}
        />
      ) : null}
      <Navbar collapseOnSelect expand="lg" bg={"light"} fixed={"top"}>
        <Navbar.Brand href="#home">Test your luck</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="#deets" className="number">
            {numberOfAnsweredQuestions}/{numberOfQuestions}
          </Nav.Link>
        </Nav>
      </Navbar>

      <Container>
        {questionsAndOptions.map((question) => {
          return (
            <Question
              question={question}
              checkOption={(questionId, optionId) =>
                checkOption(questionId, optionId)
              }
            />
          );
        })}
      </Container>
    </div>
  );
}
export default App;
