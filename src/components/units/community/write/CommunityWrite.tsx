import * as S from "./CommunityWrite.styles";

import dynamic from "next/dynamic";
import { createRef, useState } from "react";

//
import { Editor } from "@toast-ui/react-editor";
import Tag from "../../../commons/tag/Tag";
import BorderInput from "../../../commons/input/Input";

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

  return (
    <S.Wrapper>
      <span>게시글 작성/수정</span>
      <S.InputWrapper>
        <S.Title>제목</S.Title>
        <BorderInput />
      </S.InputWrapper>
      <ToastEditor
      // editorRef={editorRef}
      // onChangeContent={onChangeContent}
      />
      <div>
        <span>태그</span>
        <Tag
          tagItem={tagItem}
          setTagItem={setTagItem}
          tagList={tagList}
          setTagList={setTagList}
          // editData={editData}
        />
      </div>
    </S.Wrapper>
  );
}
