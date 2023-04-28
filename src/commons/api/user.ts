import axios from "axios";
import { accessToken } from "./token";

const URL = "https://need-romance.site";

export const GetUserInfo = async (accessToken: any) => {
  try {
    const response = await axios.get(`${URL}/user/login`, {
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    });
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
    if (response.status === 200) {
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
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteUser = async (email: string, password: string) => {
  try {
    const response = await axios.delete(`${URL}/user/delete`, {
      email,
      password,
    });
    console.log(response);
    if (response.status === 200) return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
