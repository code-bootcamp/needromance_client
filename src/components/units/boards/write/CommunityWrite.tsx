import * as S from "./CommunityWrite.styles";
import { useFormik } from "formik";
import { EditBoard, WriteBoard } from "../../../../commons/api/boards";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  authModalState,
} from "../../../../commons/store/atoms";

import dynamic from "next/dynamic";
import { createRef, useEffect, useState } from "react";
import * as yup from "yup";
// type
import { Editor } from "@toast-ui/react-editor";

import useAuth from "../../../commons/hooks/customs/useAuth";

// components
import Tag from "../../../commons/tag/Tag";
import BorderInput from "../../../commons/input/Input";
import CustomModal from "../../../commons/modals/CustomModal";
import { useRouter } from "next/router";
import CustomBtn from "../../../commons/buttons/CustomBtn";
const ToastEditor = dynamic(() => import("../../../commons/toast-ui/Toast"), {
  ssr: false,
});

const schema = yup.object({
  title: yup.string().required("제목을 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),
  hashTags: yup.array(),
});

export default function CommunityWrite({
  isEdit,
  editData,
}: {
  isEdit: boolean;
  editData?: any;
}) {
  const router = useRouter();

  const [isAuthModalOpen] = useRecoilState(authModalState);
  const [accessToken] = useRecoilState(accessTokenState);
  const editorRef = createRef<Editor>();

  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: editData?.title || "",
      contents: editData?.contents || "",
      hashTags: editData?.hashTags || [],
    },
    validationSchema: schema,
    onSubmit: () => {
      isEdit ? onSubmitEditForm() : onSubmitForm();
    },
    enableReinitialize: true,
  });

  // 기존 태그
  useEffect(() => {
    if (editData?.hashTags?.length > 0) {
      setTagList(editData.hashTags);
    }
  }, []);

  // toast editor HTML 보기
  useEffect(() => {
    editorRef.current?.getInstance().setHTML(editData?.contents);
  }, [editData]);

  // edit
  const onSubmitEditForm = async () => {
    event?.preventDefault();

    // 기존의 데이터를 요청보낼 데이터에 넣기
    if (editData.title) {
      formik.setValues(editData.title);
    }
    if (editData.contents) {
      formik.setValues(editData.contents);
    }

    formik.setFieldValue("hashTags", tagList);

    const data = await EditBoard(router.pathname, formik.values, accessToken);
    console.log(data);
  };

  // write
  const onSubmitForm = async () => {
    event?.preventDefault();

    if (!formik.values.title || !formik.values.contents) {
      setIsLoginModalOpen(true);
      return;
    }
    formik.setFieldValue("hashTags", tagList);

    const data = await WriteBoard(formik.values, accessToken).then((res) => {
      router.push(`/boards/${res?.data?.id}`);
    });
  };

  const onChangeContent = () => {
    const inputs = editorRef.current?.getInstance().getHTML();
    if (!inputs) return;

    formik.setFieldValue("contents", inputs);
  };

  useAuth();
  console.log(formik.values);
  console.log(formik.errors);
  console.log(isAuthModalOpen);

  return (
    <S.Wrapper>
      <form>
        <S.Title>게시글 {isEdit ? "수정" : "작성"}</S.Title>
        <S.TitleInputWrapper>
          <S.InfoTitle>제목</S.InfoTitle>
          <S.InputWrapper>
            <BorderInput
              name="title"
              value={formik.values.title}
              defaultValue={editData?.title}
              onChange={formik.handleChange}
            />
            {formik.errors.title && (
              <S.AlertTitle>{formik.errors.title}</S.AlertTitle>
            )}
          </S.InputWrapper>
        </S.TitleInputWrapper>
        <S.ContentBox>
          <S.InfoTitle>내용</S.InfoTitle>
          {formik.errors.contents && (
            <S.AlertContent>{formik.errors.contents}</S.AlertContent>
          )}
          <ToastEditor
            defaultValue={editData?.contents}
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
        <S.SubmitBtnWrapper>
          <S.SubmitBtn type="button" onClick={onSubmitForm}>
            {isEdit ? "수정하기" : "작성하기"}
          </S.SubmitBtn>
        </S.SubmitBtnWrapper>
      </form>
      {isAuthModalOpen && (
        <CustomModal
          icontype="warning"
          openModal={isAuthModalOpen}
          text="로그인"
          ok="닫음"
          onClickOk={() => setIsLoginModalOpen(false)}
        ></CustomModal>
      )}
    </S.Wrapper>
  );
}
