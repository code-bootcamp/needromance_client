import axios from "axios";
import config from "./config";
const URL = "https://need-romance.site";

axios.defaults.withCredentials = true;

export const checkDuplicateEmail = async (email: string) => {
  try {
    const response = await axios({
      method: "get",
      url: `${URL}/user/find/email?email=${email}`,
      // headers: { Origin: "https://needromance.online" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendVerificationEmail = async (email: string) => {
  try {
    const response = await axios({
      method: "get",
      url: URL + `/user/sendtoken/?email=${email}`,
      // headers: { Origin: "https://needromance.online" },
      withCredentials: true,
    });

    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const checkVerificationEmail = async (email: string, token: string) => {
  try {
    const response = await axios({
      method: "get",
      url: URL + `/user/checktoken/?email=${email}&token=${token}`,
      // headers: { Origin: "https://needromance.online" },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const checkDuplicateNickname = async (nickname: string) => {
  try {
    const response = await axios({
      method: "get",
      url: URL + `/user/find/nickname?nickname=${nickname}`,
      // headers: { Origin: "https://needromance.online" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (inputs: {
  email: string;
  nickname: string;
  password: string;
}) => {
  const { email, nickname, password } = inputs;
  try {
    const response = await axios({
      method: "post",
      url: URL + "/user/signup",
      data: {
        email,
        nickname,
        password,
      },
      // headers: { Origin: "https://needromance.online" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axios({
      method: "post",
      url: URL + "/auth/login",
      data: {
        email,
        password,
      },
      headers: {
        "Cache-Control": "no-cache",
        Origin: "https://needromance.online",
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (accessToken: string) => {
  try {
    const response = await axios({
      method: "get",
      url: URL + "/auth/logout",
      headers: {
        Origin: "https://needromance.online",
        Authorization: `bearer ${accessToken}`,
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async (accessToken: string) => {
  try {
    const response = await axios.get(`${URL}/user/login`, {
      headers: {
        Authorization: `bearer ${accessToken}`,
        Origin: "https://needromance.online",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const resetPassword = async (email: string, password: string) => {
  try {
    const response = await axios({
      method: "patch",
      url: URL + "/user/find/password",
      data: {
        email,
        password,
      },
      headers: { Origin: "https://needromance.online" },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const googleLogin = async () => {
  try {
    const response = await axios({
      method: "get",
      url: URL + "/auth/login/google",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
