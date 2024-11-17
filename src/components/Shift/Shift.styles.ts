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
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
    margin-right: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin: 30px auto 0;
`;

export const SubmitButton = styled.button<{
  bgColor: string;
  border?: string;
  color?: string;
}>`
  padding: 15px 30px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border: 1px solid ${({ border }) => border || 'transparent'};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
