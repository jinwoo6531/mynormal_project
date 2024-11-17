import React from 'react';
import {
  QuestionContainer,
  QuestionNumber,
  QuestionText,
  RadioContainer,
  RadioLabel,
  RadioInput,
  CustomRadio,
} from './MbtiQuestionItem.styles';
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

export default React.memo(MbtiQuestionItem);
