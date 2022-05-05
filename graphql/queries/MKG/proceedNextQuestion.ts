import { gql } from '@apollo/client';

const PROCEED_NEXT_QUESTION = gql`
  query ProceedNextQuestion($input: ProceedNextQuestionInput) {
    proceedNextQuestion(input: $input) {
      mKGQuestion {
        id
        questionType
        displayQuestion
        mKGAnswers {
          id
          displayAnswer
          answerDescription
        }
      }
      index
    }
  }
`;

export default PROCEED_NEXT_QUESTION;
