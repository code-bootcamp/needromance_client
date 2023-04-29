import axios from "axios";
import { accessToken } from "./token";
import { Modal } from "antd";

const URL = "https://need-romance.site";
// axios.defaults.withCredentials = true;

export const GetBoards = async (page: number) => {
  try {
    const response = await axios.get(`${URL}/boards?page=${page}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const GetBoard = async (id: number) => {
  try {
    const response = await axios.get(`${URL}/boards/${id}`);
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
    if (response.status == 200) {
      return response.data;
    }
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
