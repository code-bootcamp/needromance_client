import axios from "axios";
import { accessToken } from "./token";
import { Modal } from "antd";

const URL = "https://need-romance.site";
// axios.defaults.withCredentials = true;
// const baseURL = "https://need-romance.site";
// const app = axios.create({
//   baseURL,
//   withCredentials: true,
// });

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
