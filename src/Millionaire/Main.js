

import React, { useEffect, useState } from 'react';
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from 'mdb-react-ui-kit';
import './main.css';
import Quiz from './Components/Quiz';
import { prizeMoney, data } from './Components/Data';
import Timer from './Components/Timer';
import Start from './Components/Start';

function Main() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeout, setTimeout] = useState(false);
  const [name, setName] = useState(null);
  const [earned, setEarned] = useState("$ 0");
  const isLastQuestion = questionNumber === data.length && earned !== "$ 0"; // Check if it's the last question and the user has earned money

  useEffect(() => {
    questionNumber > 1 && setEarned(prizeMoney.find((item) => item.id === questionNumber - 1).amount);
  }, [questionNumber]);

  return (
    <div className='App'>
      {!name ? (
        <Start setName={setName} setTimeout={setTimeout} />
      ) : (
        <MDBRow>
          <MDBCol md="9">
            <div className="main">
              {timeout ? (
                <h1 className='earned'>You Earned : {earned}</h1>
              ) : isLastQuestion ? (
                <h1 className='congratulations'>Congratulations! You won: {earned}</h1>
              ) : (
                <>
                  <div style={{ height: "50%", position: "relative" }}>
                    <Timer setTimeoutCallback={setTimeout} questionNumber={questionNumber} />
                  </div>
                  <div style={{ height: "50%" }}>
                    <Quiz
                      data={data}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                      setTimeoutCallback={setTimeout}
                    />
                  </div>
                </>
              )}
            </div>
          </MDBCol>
          <MDBCol md="3" className='money'>
            <MDBListGroup className='money-list'>
              <MDBRow>
                <span className='mb-2'>
                  <MDBBtn
                    style={{ float: "right" }}
                    className='mx-2'
                    color='light'
                    onClick={() => setTimeout(true)}>Quit
                  </MDBBtn>

                  <MDBBtn
                    style={{ float: "right" }}
                    onClick={() => {
                      setName(null);
                      setQuestionNumber(1);
                      setEarned("$ 0");
                    }}>Exit
                  </MDBBtn>
                </span>
                <MDBCol md-6>Name ; {name}</MDBCol>
                <MDBCol md-6>Total Earned ; {earned}</MDBCol>
              </MDBRow>
              <hr />
              {prizeMoney.map((item) => (
                <li key={item.id} className={questionNumber === item.id ? "item active" : "item"}>
                  <h5 className='amount'>{item.amount}</h5>
                </li>
              ))}
            </MDBListGroup>
          </MDBCol>
        </MDBRow>
      )}
    </div>
  );
}

export default Main;
