export type MBTIType = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export type Answer = -2 | -1 | 0 | 1 | 2;

export enum OptionValues {
  STRONGLY_DISAGREE = -2,
  DISAGREE = -1,
  NEUTRAL = 0,
  AGREE = 1,
  STRONGLY_AGREE = 2,
}

export interface Question {
  disagree: MBTIType;
  agree: MBTIType;
  text: string;
}

export interface QuestionItemProps {
  question: Question;
  index: number;
  selectedValue: number | Answer;
  onChange: (index: number, value: Answer) => void;
}

export interface Option {
  text: string;
  value: OptionValues;
}
