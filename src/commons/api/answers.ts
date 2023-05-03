import axios from "axios";
import { Modal } from "antd";

const URL = "https://need-romance.site";

export const GetAnswers = async (
  accessToken: string,
  boardId: number,
  status: number
) => {
  try {
    const response = await axios.get(
      `${URL}/answers?board-id=${boardId}&status=${status}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const PostAnswer = async (
  accessToken: string,
  boardId: number,
  contents: string
) => {
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
    Modal.success({ content: "답변이 등록되었습니다." });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const UpdateAnswer = async (
  accessToken: string,
  id: number,
  contents: string
) => {
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
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const DeleteAnswer = async (accessToken: string, id: number) => {
  try {
    const response = await axios.delete(`${URL}/answers/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const LikeAnswer = async (accessToken: string, id: number) => {
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

export const PickAnswer = async (
  accessToken: string,
  id: number,
  boardId: number,
  status: boolean
) => {
  try {
    const response = await axios.patch(
      `${URL}/answers/${id}/status`,
      {
        boardId,
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const BestAnswer = async () => {
  try {
    const response = await axios.get(`${URL}/answers/best`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
