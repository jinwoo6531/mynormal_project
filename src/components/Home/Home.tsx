import React from 'react';
import { useRouter } from 'next/router';
import { Main, Section, ButtonContainer, SubmitButton } from './Home.styles';

const Home: React.FC = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <Main>
      <Section>
        <ButtonContainer>
          <SubmitButton onClick={() => navigateTo('/mbti')}>
            1번 MBTI
          </SubmitButton>
          <SubmitButton onClick={() => navigateTo('/shift')}>
            2번 순서 바꾸기
          </SubmitButton>
        </ButtonContainer>
      </Section>
    </Main>
  );
};

export default Home;
