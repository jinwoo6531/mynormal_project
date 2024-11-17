import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Main,
  Section,
  Title,
  ButtonContainer,
  SubmitButton,
  ResultTitle,
} from './Mbti.styles';
import MbtiQuestionItem from '@/components/MbtiQuestionItem/MbtiQuestionItem';
import { questions } from '@/constants/mbti';
import { Answer } from '@/types/mbti';

const Mbti: React.FC = () => {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [mbti, setMbti] = useState('');

  const handleAnswerChange = useCallback(
    (questionIndex: number, value: Answer) => {
      setAnswers((prev) => ({
        ...prev,
        [questionIndex]: value,
      }));
    },
    []
  );

  const handleFormSubmit = () => {
    const isAnsweredCheck = questions.some(
      (_, index) => answers[index] === undefined
    );

    if (isAnsweredCheck) {
      alert('모든 질문에 답변해 주세요.');
      return;
    }

    const mbtiScores = questions.reduce(
      (acc, question, index) => {
        const score = answers[index];

        if (score < 0) acc[question.disagree] += Math.abs(score);
        if (score > 0) acc[question.agree] += score;
        return acc;
      },
      { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
    );

    const mbtiResult = [
      mbtiScores.E >= mbtiScores.I ? 'E' : 'I',
      mbtiScores.N >= mbtiScores.S ? 'N' : 'S',
      mbtiScores.F >= mbtiScores.T ? 'F' : 'T',
      mbtiScores.P >= mbtiScores.J ? 'P' : 'J',
    ].join('');

    setMbti(mbtiResult);
  };

  const resetForm = () => {
    setAnswers({});
    setMbti('');
  };

  return (
    <Main>
      <Section>
        {mbti ? (
          <>
            <ResultTitle>당신의 MBTI 결과는 {mbti}입니다!</ResultTitle>
            <SubmitButton onClick={resetForm} bgColor='#000' color='#fff'>
              다시 하기
            </SubmitButton>
          </>
        ) : (
          <>
            <Title>다이어트 MBTI 테스트</Title>
            {questions.map((question, index) => (
              <MbtiQuestionItem
                key={index}
                question={question}
                index={index}
                selectedValue={answers[index]}
                onChange={handleAnswerChange}
              />
            ))}
            <ButtonContainer>
              <SubmitButton
                onClick={() => router.push('/')}
                bgColor='#fff'
                border='#000'
                color='#000'
              >
                홈으로
              </SubmitButton>
              <SubmitButton
                onClick={handleFormSubmit}
                bgColor='#000'
                color='white'
              >
                결과보기
              </SubmitButton>
            </ButtonContainer>
          </>
        )}
      </Section>
    </Main>
  );
};

export default Mbti;
