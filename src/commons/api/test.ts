import axios from "axios";
import config from "./config";
const URL = "https://need-romance.site";

const server = config.backend.baseURL;

export const checkDuplicateEmail = async (email: string) => {
  try {
    const response = await axios({
      method: "get",
      url: URL + `/user/find/email?email=${email}`,
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
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (param: any) => {
  try {
    const response = await axios({
      method: "post",
      url: server + "/auth/logout",
      headers: {
        authorization: `bearer ${param.token}`,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async (accessToken: any) => {
  try {
    const response = await axios.get(`${server}/user/login`, {
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// export const getUserInfo = async (param: string) => {
//   try {
//     await axios({
//       method: "get",
//       url: server + "/user/login",
//       headers: {
//         authorization: `bearer ${param}`,
//       },
//     }).then((res) => {
//       return res;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
