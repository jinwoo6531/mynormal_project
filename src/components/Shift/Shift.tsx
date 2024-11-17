import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Main,
  Section,
  Title,
  Item,
  ButtonContainer,
  SubmitButton,
} from './Shift.styles';
import { ArrayItem } from '@/types/shift';
import { shiftArrayElements } from '@/utils/shiftUils';

const Shift: React.FC = () => {
  const router = useRouter();
  const [items, setItems] = useState<ArrayItem[]>([
    { id: 0, value: 1, isSelected: false },
    { id: 1, value: 2, isSelected: false },
    { id: 2, value: 3, isSelected: false },
  ]);

  const handleCheckboxChange = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const handleShift = () => {
    const selectedArray = items
      .filter((item) => item.isSelected)
      .map((item) => item.value);

    const newItemArray = shiftArrayElements(
      items.map((item) => item.value),
      selectedArray
    );

    setItems(
      newItemArray.map((value, index) => ({
        id: index,
        value,
        isSelected: false,
      }))
    );
  };

  return (
    <Main>
      <Section>
        <Title>순서 올리기</Title>
        {items.map((item) => (
          <Item key={item.id}>
            <input
              type='checkbox'
              checked={item.isSelected}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <span>{item.value}</span>
          </Item>
        ))}
        <ButtonContainer>
          <SubmitButton
            onClick={() => router.push('/')}
            bgColor='#fff'
            color='#000'
            border='#000'
          >
            홈으로
          </SubmitButton>
          <SubmitButton onClick={handleShift} bgColor='#000' color='#fff'>
            올리기
          </SubmitButton>
        </ButtonContainer>
      </Section>
    </Main>
  );
};

export default Shift;
