import axios from "axios";
import { accessToken } from "./token";
import { Modal } from "antd";

const URL = "https://need-romance.site";
// axios.defaults.withCredentials = true;

export const GetBoards = async (page: number) => {
  try {
    const response = await axios.get(`${URL}/boards?page=${page}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const GetBoard = async (id: number) => {
  try {
    const response = await axios.get(`${URL}/boards/${id}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const DeleteBoard = async (id: number) => {
  try {
    const response = await axios.delete(`${URL}/boards/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response);
    if (response.status == 200) {
      Modal.success({
        content: "게시물이 성공적으로 삭제되었습니다",
      });
    }

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const SearchBoard = async (keyword: string) => {
  try {
    const response = await axios.get(
      `${URL}/boards/search?keyword=${keyword}&page=1`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
