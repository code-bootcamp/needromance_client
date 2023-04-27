import * as S from "./CommunityWrite.styles";

import dynamic from "next/dynamic";
import { createRef, useState } from "react";

//
import { Editor } from "@toast-ui/react-editor";
import Tag from "../../../commons/tag/Tag";
import BorderInput from "../../../commons/input/Input";
import useAuth from "../../../commons/hooks/customs/useAuth";

const ToastEditor = dynamic(() => import("../../../commons/toast-ui/Toast"), {
  ssr: false,
});

export default function CommunityWrite() {
  const editorRef = createRef<Editor>();

  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);

  const onChangeContent = () => {
    const inputs = editorRef.current?.getInstance().getHTML();
    // setValue("content", inputs);
  };

  useAuth();
  return (
    <S.Wrapper>
      <S.Title>게시글 작성/수정</S.Title>
      <S.TitleInputWrapper>
        <S.InfoTitle>제목</S.InfoTitle>
        <S.InputWrapper>
          <BorderInput />
        </S.InputWrapper>
      </S.TitleInputWrapper>

      <S.ContentBox>
        <S.InfoTitle>내용</S.InfoTitle>
        <ToastEditor
          defaultValue="하하"
          editorRef={editorRef}
          onChangeContent={onChangeContent}
        />
      </S.ContentBox>

      <S.TitleInputWrapper>
        <S.InfoTitle>태그</S.InfoTitle>
        <Tag
          tagItem={tagItem}
          setTagItem={setTagItem}
          tagList={tagList}
          setTagList={setTagList}
          // editData={editData}
        />
      </S.TitleInputWrapper>
    </S.Wrapper>
  );
}
