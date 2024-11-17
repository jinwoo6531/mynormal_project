import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Section = styled.section`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin: 30px auto 0;
`;

export const SubmitButton = styled.button`
  padding: 15px 30px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
