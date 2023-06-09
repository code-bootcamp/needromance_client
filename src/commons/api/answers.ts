import { Modal } from "antd";
import api from "./config";

export const GetAnswers = async (
  accessToken: string,
  boardId: number,
  status: number
) => {
  try {
    const response = await api.get(
      `/answers?board-id=${boardId}&status=${status}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    return response.data;
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
    const response = await api.post(
      `/answers`,
      { boardId, contents },
      { headers: { Authorization: `Bearer ${accessToken}` } }
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
    const response = await api.patch(
      `/answers/${id}`,
      { contents },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteAnswer = async (accessToken: string, id: number) => {
  try {
    const response = await api.delete(`/answers${id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const LikeAnswer = async (accessToken: string, id: number) => {
  try {
    const response = await api.patch(`/answers/${id}/likes`, {
      headers: { Authorization: `Bearer ${accessToken}` },
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
    const response = await api.patch(
      `/answers/${id}/status`,
      { boardId, status },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const BestAnswer = async () => {
  try {
    const response = await api.get(`/answers/best`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
