import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ArrayItem } from '@/types/shift';

const shiftArrayElements = (data: number[], selected: number[]): number[] => {
  const result = [...data];

  selected.forEach((item) => {
    const index = result.indexOf(item);
    console.log('result[index] 현재 선택된 요소', result[index]);
    console.log('result[index - 1] 왼쪽요소', result[index - 1]);

    // index가 0보다 크고 왼쪽 요소가 selected에 포함되지 않은 경우에만 스왑
    if (index > 0 && !selected.includes(result[index - 1])) {
      [result[index - 1], result[index]] = [result[index], result[index - 1]];
    }
  });

  return result;
};

const Shift = () => {
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
        <Title>배열 요소 이동</Title>
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
            순서 올리기
          </SubmitButton>
        </ButtonContainer>
      </Section>
    </Main>
  );
};

export default Shift;

const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Section = styled.section`
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
    margin-right: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin: 30px auto 0;
`;

const SubmitButton = styled.button<{
  bgColor: string;
  border?: string;
  color?: string;
}>`
  display: block;
  padding: 15px 30px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border: 1px solid ${({ border }) => border || 'transparent'};
  border-radius: 5px;
  cursor: pointer;
`;
