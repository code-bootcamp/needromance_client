## 로맨스가 필요해

---

## 배포 사이트: https://needromance.online

---

## 역할소개

**포지션** : `front-end`
**역할** : `Leader` `front deploy`
**사용기술** : `next.js` `Typescript` `AWS EC2` `emotion.js` `REST-API & axios` `Recoil` `git` `Antd`

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
    │   │   ├── CustomModal.tsx             // 모달 공통컴포넌트 Container & View
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

## 구현한 부분

**1. 메인페이지**

**2. chat-GPT 채팅페이지**

**3. 관리자 페이지**

**4. 공통 컴포넌트 Button, Input, Modal, axios default 설정, globalstyle 설정**

---

## 구현 상세내용

**1. 메인페이지**

```js

```
