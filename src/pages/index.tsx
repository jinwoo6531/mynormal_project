import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>MyNormal 프론트엔드 과제 테스트</title>
        <meta name='description' content='MyNormal 프론트엔드 과제 테스트' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main>
        <Section>
          <ButtonContainer>
            <SubmitButton onClick={() => router.push('/mbti')}>
              1번 MBTI
            </SubmitButton>
            <SubmitButton onClick={() => router.push('/shift')}>
              2번 순서 바꾸기
            </SubmitButton>
          </ButtonContainer>
        </Section>
      </Main>
    </>
  );
};

export default Home;

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
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin: 30px auto 0;
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
`;
