import React from 'react';
import styled from 'styled-components';
import { QuestionItemProps } from '@/types/mbti';
import { ANSWER_OPTIONS } from '@/constants/mbti';

const MbtiQuestionItem: React.FC<QuestionItemProps> = ({
  question,
  index,
  selectedValue,
  onChange,
}) => (
  <QuestionContainer>
    <QuestionNumber>Q{index + 1}</QuestionNumber>
    <QuestionText>{question.text}</QuestionText>
    <RadioContainer>
      {ANSWER_OPTIONS.map((option) => (
        <RadioLabel key={option.value}>
          <RadioInput
            type='radio'
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(index, option.value)}
          />
          <CustomRadio />
          {option.label}
        </RadioLabel>
      ))}
    </RadioContainer>
  </QuestionContainer>
);

export default MbtiQuestionItem;

const QuestionContainer = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const QuestionNumber = styled.span`
  font-weight: bold;
`;

const QuestionText = styled.p`
  margin: 10px 0;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  font-size: 1em;
`;

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const CustomRadio = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 14px;
  width: 14px;
  background-color: #eee;
  border-radius: 50%;
  border: 1px solid #ccc;

  ${RadioLabel}:hover & {
    background-color: #ddd;
  }

  ${RadioInput}:checked + & {
    background-color: #0070f3;
    border-color: #0070f3;
  }
`;
