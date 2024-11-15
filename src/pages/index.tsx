import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>MyNormal 프론트엔드 과제 테스트</title>
        <meta name='description' content='MyNormal 프론트엔드 과제 테스트' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <main>
          <div>
            <button onClick={() => router.push('/mbti')}>MBTI</button>

            <button onClick={() => router.push('/shift')}>SHIFT</button>
          </div>
        </main>
      </div>
    </>
  );
}
