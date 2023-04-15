import Head from "next/head";
import Image from "next/image";
// 스타일링 변수 예시
import { StyleTestDiv } from "./StylesTest";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 스타일링 변수 예시 */}
      <StyleTestDiv>red</StyleTestDiv>
    </>
  );
}