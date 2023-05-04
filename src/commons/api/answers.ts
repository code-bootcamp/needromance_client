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
      {
        withCredentials: true,
        headers: { Authorization: `Bearer ${accessToken}` },
      }
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
  try {
    const response = await axios.post(
      `${URL}/answers`,
      {
        boardId,
        contents,
      },
      {
        withCredentials: true,
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
        withCredentials: true,
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
      withCredentials: true,
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
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
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
        withCredentials: true,
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
    const response = await axios.get(`${URL}/answers/best`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
