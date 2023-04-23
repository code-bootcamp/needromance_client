import NextAuth, { User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import GitHubProvider from "next-auth/providers/github";
import NaverProvider from "next-auth/providers/naver";

export default NextAuth({
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
    }),
    // 원하는 소셜 provider를 같은 방식으로 추가
  ],
  // pages: {
  //   signIn: "/signin",
  //   signOut: "/auth/signout",
  //   error: "/auth/error", // Error code passed in query string as ?error=
  //   verifyRequest: "/auth/verify-request", // (used for check email message)
  //   newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
});
