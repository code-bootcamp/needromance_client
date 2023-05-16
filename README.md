## 로맨스가 필요해

#### 프로젝트 기간 : 2023.04.10 ~ 2023.05.12

#### 프로젝트 리팩토링 : 2023.05.15 ~ 2023.05.22

---

## 배포 사이트: https://needromance.online

---

## 역할소개

**포지션** : `front-end`

**역할** : `Leader` `front deploy`

**사용기술** : `next.js` `Typescript` `AWS EC2` `emotion.js` `REST-API & axios` `Recoil` `git` `Antd` `eslint`

---

## 구현설명

#### 1. 메인페이지

- fade-in, out 방식의 이미지 슬라이더 구현

- 프로젝트 홈페이지의 강조하고 싶은 부분은 스크롤을 내리다가 브라우저 창에 보이게 요소가 보이게 되면 애니메이션이 작동하도록 구현

#### 2. chat-GPT 채팅페이지

- 카카오톡과 같은 채팅 UI 기능 구현

- API 요청에 따른 로딩 구현

#### 3. 관리자 페이지

- Antd를 활용하여 table 형태의 유저, 게시글 관리 페이지네이션 구현

- 유저 ban 기능을 구현하여 악성유저에 관한 제재 조치

- 게시글의 광고, 음란, 도배 등 사이트 운영정책에 위반하는 게시글 삭제 기능 구현

- 사용자 UX, UI를 고려하여 검색 Input 초기화시 유저리스트 refetch, keyPress, clearButton 적용

#### 4. 공통 컴포넌트, axios default, globalstyle, 반응형 디자인 구현, eslint & TOASTUI 코드 컨벤션 적용

- 공통컴포넌트인 검색 input, 선택형 modal(+Antd), button 을 구현하여 재사용성 확보

```tsx
// src/components/commons/search/CustomSearchInput.tsx

// ...

interface IInputProps {
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
  onClickClear: () => void;
}

const CustomSearchInput = (props: IInputProps) => {
  return (
    <SearchWrapper>
      <SearchBox>
        <SearchInput
          value={props.value}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onKeyPress={props.onKeyPress}
        />
        <BtnWrap>
          {props.value && <ResetBtn onClick={props.onClickClear} />}
          <SearchIcon onClick={props.onClick} />
        </BtnWrap>
      </SearchBox>
    </SearchWrapper>
  );
};

export default CustomSearchInput;
```

- axios default 설정을 통한 일관적이고 가독성 좋은 API 요청

```ts
// src/commons/api/config.ts

import axios, { AxiosInstance } from "axios";

const config = {
  backend: {
    baseURL: process.env.NEXT_PUBLIC_BACKEND,
  },
};

const server = config.backend.baseURL;

const api: AxiosInstance = axios.create({
  baseURL: server,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
```

- 스타일 전역변수, web-font를 적용하여 일관된 스타일 적용

```ts
// src/commons/styles/globalStyles.ts

export const globalStyles = css`
  :root {
    --main-bg-color: #f8f3eb;
    --sub-bg-color: #f0e9e0;
    --point-color-beige: #cfbbae;
    --point-color-brown: #433b32;
    --point-color-green: #5f795a;
    --point-color-light-green: #296a02;
    --font-size-lg: 1.875rem;
    --font-size-md: 1.25rem;
    --font-size-sm: 0.875rem;
    --font-mobile-size-lg: 1.286rem;
    --font-mobile-size-md: 1.143rem;
    --font-mobile-size-sm: 0.714rem;
    --base-font: "GowunDodum-Regular";
    --logo-font: "TAEBAEKmilkyway";
    --eng-font: "Poppins";
    --btn-radius-lg: 3.125rem;
    --btn-radius-sm: 0.5rem;
    --btn-radius: 3.125rem;
    --btn-padding: 7px 15px;
    --btn-font-size: 0.875rem;
    --btn-width-md: 110px;
    --btn-width-lg: 312px;
    --btn-height: 40px;
  }

  /* ... */

  @font-face {
    font-family: "GowunDodum-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  // 로고 폰트
  @font-face {
    font-family: "TAEBAEKmilkyway";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/TAEBAEKmilkyway.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;

    // 영어 폰트
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  }
`;
```

- breakPoint를 tablet, mobile을 적용하여 사용자 UX, UI 개선

```ts
// src/commons/styles/media.ts

export const breakPoints = {
  tablet: "(min-width: 376px) and (max-width: 768px)",
  mobile: "(max-width: 375px)",
};
```

```ts
// src/components/units/main/seaction2/MainSection2.styles.ts

export const TopBox = styled.div<AnimationStyle>`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation-name: ${({ inView }) => inView && fadeIn};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => delay || 0}s;

  div:nth-of-type(1) {
    display: flex;
    align-items: center;
    font-size: var(--font-size-lg);
    span {
      margin-left: 10px;
      font-size: var(--font-size-md);
    }
    @media ${breakPoints.mobile} {
      font-size: var(--font-mobile-size-lg);
      span {
        font-size: var(--font-mobile-size-md);
      }
    }
    @media ${breakPoints.tablet} {
      font-size: var(--font-size-md);
      span {
        font-size: var(--font-size-md);
      }
    }
  }

  div:nth-of-type(2) {
    font-size: var(--font-size-lg);
    color: var(--point-color-green);
    @media ${breakPoints.mobile} {
      font-size: var(--font-mobile-size-lg);
    }
    @media ${breakPoints.tablet} {
      font-size: var(--font-size-md);
    }
  }
`;
```

- eslint & prettier를 활용하여 일관된 코드스타일 적용

**.eslintrc.json**

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "react", "react-hooks"],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "no-console": "warn",
    "no-var": "error",
    "sort-vars": "warn",
    "curly": "error",
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "var", "next": "return" }
    ]
  }
}
```

**.prettierrc.json**

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "printWidth": 80,
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "curly": true,
  "object-curly-newline": ["error", { "multiline": true }]
}
```

---

## 폴더 구조 트리 (구현한 부분)

```
src
├── commons
│   ├── api
│   │   ├── admin.ts            // 어드민 페이지 API
│   │   ├── answers.ts
│   │   ├── boards.ts
│   │   ├── chatGPT.ts
│   │   ├── config.ts           // 초기 axios default 설정
│   │   ├── main.ts             // 메인페이지 정보 API
│   │   ├── signup.ts
│   │   └── user.ts
│   ├── libraries
│   │   ├── getAccessToken.ts
│   │   ├── getDate.ts
│   │   └── validation.ts
│   ├── store
│   │   └── atoms.ts
│   └── styles
│       ├── globalStyles.ts     // 글로벌 스타일 설정
│       ├── icons.ts
│       └── media.ts            // 반응형 breakPoint 설정
└── components
    ├── commons
    │   ├── buttons
    │   │   └── CustomBtn.tsx   // 버튼 공통컴포넌트
    │   ├── hashtag
    │   │   └── HashTag.tsx
    │   ├── hooks
    │   │   └── customs
    │   │       ├── useAuth.tsx
    │   │       └── useMoveToPage.tsx
    │   ├── input
    │   │   └── Input.tsx
    │   ├── layouts
    │   │   ├── footer
    │   │   │   └── LayoutFooter.tsx
    │   │   ├── header
    │   │   │   └── LayoutHeader.tsx
    │   │   ├── index.tsx
    │   │   ├── navigation
    │   │   │   └── LayoutNavigation.tsx
    │   │   └── topheader
    │   │       └── LayoutTopHeader.tsx
    │   ├── loader
    │   │   └── Loader.tsx
    │   ├── modals
    │   │   ├── CustomModal.styles.ts       // 모달 공통컴포넌트 Style
    │   │   ├── CustomModal.tsx             // 모달 공통컴포넌트
    │   │   └── PopupModal.tsx
    │   ├── search
    │   │   └── CustomSearchInput.tsx       // 검색 input 공통컴포넌트
    │   ├── tag
    │   │   └── Tag.tsx
    │   └── toast-ui
    │       └── Toast.tsx
    └── units
        ├── admin
        │   ├── Admin.container.tsx         // 관리자페이지 Container
        │   ├── Admin.presenter.tsx         // 관리자페이지 View
        │   ├── Admin.styles.ts             // 관리자페이지 Style
        │   └── Admin.types.ts              // 관리자페이지 Type
        ├── boards
        │   ├── Boards.types.ts
        │   ├── answer
        │   │   └── answer.tsx
        │   ├── detail
        │   │   ├── CommunityDetail.container.tsx
        │   │   └── CommunityDetail.style.ts
        │   ├── list
        │   │   ├── CommunityList.styles.ts
        │   │   └── CommunityList.tsx
        │   ├── medal
        │   │   └── medal.tsx
        │   ├── write
        │   │   ├── CommunityWrite.styles.ts
        │   │   └── CommunityWrite.tsx
        │   └── writing
        │       └── Writing.tsx
        ├── chatGPT
        │   ├── ChatGPT.container.tsx       // chat-GPT Container
        │   ├── ChatGPT.presenter.tsx       // chat-GPT View
        │   ├── ChatGPT.styles.ts           // chat-GPT Style
        │   └── ChatGPT.types.ts            // chat-GPT Type
        ├── communityComment
        │   ├── Comment.types.ts
        │   ├── list
        │   │   ├── CommunityCommentList.container.tsx
        │   │   └── CommunityCommentList.style.ts
        │   └── write
        │       ├── CommunityCommentWrite.container.tsx
        │       └── CommunityCommentWrite.style.ts
        ├── findid
        │   ├── FindID.styles.ts
        │   └── FindID.tsx
        ├── findpw
        │   ├── FindPw.styles.ts
        │   ├── FindPw.tsx
        │   └── FindPwSuc.tsx
        ├── main
        │   ├── Main.container.tsx                  // 메인페이지 전체 Container
        │   ├── Main.presenter.tsx                  // 메인페이지 전체 View
        │   ├── Main.types.ts                       // 메인페이지 내 하위 컴포넌트 Type
        │   ├── section1
        │   │   ├── MainSection1.styles.ts          // 메인페이지 첫번째 컴포넌트 Style
        │   │   └── MainSection1.tsx                // 메인페이지 첫번째 컴포넌트 Container & view
        │   ├── section2
        │   │   ├── MainSection2.styles.ts          // 메인페이지 두번째 컴포넌트 Style
        │   │   └── MainSection2.tsx                // 메인페이지 두번째 컴포넌트 Container & view
        │   └── section3
        │       ├── MainSection3.styles.ts          // 메인페이지 세번째 컴포넌트 Style
        │       └── MainSection3.tsx                // 메인페이지 세번째 컴포넌트 Container & view
        ├── myPage
        │   ├── MyPage.container.tsx
        │   ├── MyPage.style.ts
        │   ├── MyPage.type.ts
        │   ├── User.types.ts
        │   ├── body
        │   │   ├── MyPage.body.style.ts
        │   │   ├── MyPage.body.tsx
        │   │   ├── board
        │   │   │   ├── MyPageBoard.container.tsx
        │   │   │   └── MyPageBoard.style.ts
        │   │   ├── comment
        │   │   │   ├── MyPageComment.container.tsx
        │   │   │   └── MyPageComment.style.ts
        │   │   ├── notification
        │   │   │   ├── MyPageNotification.container.tsx
        │   │   │   └── MyPageNotification.style.ts
        │   │   ├── profile
        │   │   │   ├── MyPageProfile.container.tsx
        │   │   │   ├── MyPageProfile.style.ts
        │   │   │   ├── detail
        │   │   │   │   └── MyPageProfile.detail.container.tsx
        │   │   │   └── edit
        │   │   │       └── MyPageProfile.edit.container.tsx
        │   │   └── withdrawal
        │   │       └── MyPageWithdrawal.Modal.tsx
        │   └── nav
        │       ├── MyPageNav.style.ts
        │       └── MyPageNav.tsx
        ├── signIn
        │   ├── GoogleSignIn.tsx
        │   ├── SignIn.styles.ts
        │   └── SignIn.tsx
        └── signup
            ├── SignUp.styles.ts
            ├── SignUp.tsx
            └── google
                ├── SignUpGoogle.styles.ts
                └── SignUpGoogle.tsx
```

---

## 프로젝트 회고

<a href="https://velog.io/@olzlel2000/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D-1-API%ED%86%B5%EC%8B%A0-%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B3%A0%EC%B0%B0">프로젝트 회고록 - 1 API통신 에러 핸들링에 대한 고찰</a><br />
<a href="https://velog.io/@olzlel2000/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D-2-chat-GPT%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%8C%80%ED%99%94%EA%B5%AC%ED%98%84">프로젝트 회고록 - 2 chat-GPT를 활용한 대화구현</a><br />
<a href="https://velog.io/@olzlel2000/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D-3-next.js-Image-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8">프로젝트 회고록 - 3 next.js Image 컴포넌트</a><br />
<a href="https://velog.io/@olzlel2000/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D-4-AWS-docker-%EB%B0%B0%ED%8F%AC%EC%8B%9C-EC2-%EC%84%B1%EB%8A%A5-%EB%AC%B8%EC%A0%9C">프로젝트 회고록 - 4 AWS EC2 & docker 배포, EC2 성능 문제</a><br />
<a href="https://velog.io/@olzlel2000/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D-5-Axios-default-%EC%84%A4%EC%A0%95-CORS-Error">프로젝트 회고록 - 5 Axios default 설정 & CORS Error</a><br />
<a href="https://velog.io/@olzlel2000/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D-6-%EA%B3%B5%ED%86%B5-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EC%9E%AC%EC%82%AC%EC%9A%A9%EC%97%90-%EA%B4%80%ED%95%9C-%EA%B3%A0%EC%B0%B0">프로젝트 회고록 - 6 공통 컴포넌트의 재사용에 관한 고찰</a><br />
<a href="https://velog.io/@olzlel2000/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D-7-%EC%B4%88%EA%B8%B0-%EC%84%A4%EA%B3%84%EC%97%90-%EB%8C%80%ED%95%9C-%EC%A4%91%EC%9A%94%EC%84%B1%EA%B3%BC-%EA%B0%9C%EC%84%A0%ED%95%A0-%EC%A0%90">프로젝트 회고록 - 7 프로젝트 초기 설계에 대한 중요성과 개선할 점</a>
