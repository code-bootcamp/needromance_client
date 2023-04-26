import axios from "axios";
import { accessToken } from "./token";
import { Modal } from "antd";

const URL = "https://need-romance.site";

export const GetUserInfo = async (accessToken: any) => {
  try {
    const response = await axios.get(`${URL}/user/login`, {
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const UpdateUser = async (nickname: string, img: string) => {
  try {
    const response = await axios.patch(
      `${URL}/user/update`,
      {
        nickname,
        img,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response.data);
    if (response.status === 200) {
      Modal.success({ content: "정보가 수정되었습니다." });
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const GetUserboard = async () => {
  try {
    const response = await axios.get(`${URL}/user/board`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const GetUserAnswer = async () => {
  try {
    const response = await axios.get(`${URL}/user/answer`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const BestUsers = async () => {
  try {
    const response = await axios.get(`${URL}/user?sort=point`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
