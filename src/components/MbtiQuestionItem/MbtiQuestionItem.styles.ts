import styled from 'styled-components';

export const QuestionContainer = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  padding: 10px 0;
`;

export const QuestionNumber = styled.span`
  font-weight: bold;
`;

export const QuestionText = styled.p`
  margin: 10px 0;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  font-size: 1em;
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CustomRadio = styled.span`
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
