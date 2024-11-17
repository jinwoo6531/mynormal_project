# 마이노멀컴퍼니 프론트엔드 과제

마이노멀컴퍼니 프론트엔드 사전 과제 프로젝트 입니다.

[과제 배포 링크](https://mynormal-project.vercel.app/)

## 개발 환경

- next v15.0.3
- react v18.2.0

### 개발 환경 실행

```bash
npm install
```

```bash
npm run dev
```

기본 <http://localhost:3000/> 로 접속

## 구성 및 선정 이유

- Next.js v15.0.3: Next.js는 React 프레임워크로서, B2C 서비스 특징상 SEO 최적화와 SSR과 ISR이 가능한 점을 고려하였을 때 적합한 프레임워크라고 생각하여 선택했습니다.

- React v18.3.1: React는 널리 사용되는 프론트엔드 라이브러리로 컴포넌트 기반 개발과 가독성 있는 코드 작성을 위해 선택했습니다.

- styled-components v6.1.13: styled-components은 JavaScript를 사용한 CSS-in-JS 라이브러리로, 컴포넌트 스타일링을 더욱 쉽고 유연하게 처리하기 위해 선택했습니다.

# 1번 MBTI

### 기능

- 사용자의 응답을 기반으로 4가지 지표(E-I, S-N, T-F, J-P)를 종합하여 최종 MBTI 유형을 결정합니다.

### 구현 내용

- 항목 결과값 수집
  - 질문 항목에 대한 사용자 응답 수집
- 점수 계산
  - 각 질문에 대한 응답을 바탕으로 해당 MBTI 지표의 점수 누적
  - 답변 값이 음수인 경우: disagree 속성의 지표에 절댓값을 더함
  - 답변 값이 양수인 경우: agree 속성의 지표에 해당 값을 더함

# 2번 순서 바꾸기(Shift)

### 기능

- 선택한 요소들을 위로 이동시키는 기능

### 구현 내용

- 선택 요소 수집
  - 이동을 원하는 사용자의 응답 수집
- 위로 올리기
  - 선택된 요소들의 순서를 위로 올리기 위해 선택된 요소의 바로 왼쪽에 선택되지 않은 요소가 있는 경우에만 교환이 이루어지는 알고리즘 구현.

## 파일 구조

```bash
├── /components
│ ├── /Shift
│ │ ├── Shift.tsx
│ │ ├── Shift.styles.ts
│ ├── /Mbti
│ │ ├── Mbti.tsx
│ │ ├── Mbti.styles.ts
│ └── /MbtiQuestionItem
│ ├── MbtiQuestionItem.tsx
│ ├── MbtiQuestionItem.styles.ts
├── /pages
│ ├── /mbti
│ │ └── index.tsx
│ ├── /shift
│ │ └── index.tsx
│ ├── \_app.tsx
│ ├── \_document.tsx
│ └── index.tsx
├── /public
├── /styles
│ ├── GlobalStyle.ts
├── /types
│ ├── mbti.ts
│ └── shift.ts
├── /utils
│ └── shiftUtils.ts
├── next.config.js
├── tsconfig.json
└── package.json
```
