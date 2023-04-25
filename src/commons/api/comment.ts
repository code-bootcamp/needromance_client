import axios from "axios";
import { accessToken } from "./token";
import { Modal } from "antd";

const URL = "https://need-romance.site";

export const GetComments = async (boardId: number, status: number) => {
  try {
    const response = await axios.get(
      `${URL}/answers?board-id=${boardId}&status=${status}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const PostComment = async (boardId: number, contents: string) => {
  console.log(boardId, contents);
  try {
    const response = await axios.post(
      `${URL}/answers`,
      {
        boardId,
        contents,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response, "댓글 등록");
    Modal.success({ content: "답변이 등록되었습니다." });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const EditComment = async (id: number, contents: string) => {
  try {
    const response = await axios.patch(
      `${URL}/answers/${id}`,
      {
        contents,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    Modal.success({ content: "답변이 수정되었습니다." });
    console.log(response, "댓글 수정");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteComment = async (id: number) => {
  try {
    const response = await axios.delete(`${URL}/answers/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    Modal.success({ content: "답변이 삭제되었습니다." });
    console.log(response, "댓글 삭제");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const LikeComment = async (id: number) => {
  try {
    const response = await axios.patch(`${URL}/answers/${id}/likes`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response, "댓글 좋아요");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const PickComment = async (id: number, boardId: number) => {
  try {
    const response = await axios.patch(
      `${URL}/answers/${id}/status`,
      {
        boardId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response, "댓글 픽");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
