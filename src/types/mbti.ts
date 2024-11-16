type MBTIType = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export type Answer = -2 | -1 | 0 | 1 | 2;

interface Question {
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
