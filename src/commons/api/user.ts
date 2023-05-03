import axios from "axios";

const URL = "https://need-romance.site";

export const GetUserInfo = async (accessToken: string) => {
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

export const BestUsers = async () => {
  try {
    const response = await axios.get(`${URL}/user?sort=point`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const GetUserBoard = async (accessToken: string) => {
  try {
    const response = await axios.get(`${URL}/user/boards`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const SearchUserBoard = async (accessToken: string, keyword: string) => {
  try {
    const response = await axios.get(
      `${URL}/user/boards/search?keyword=${keyword}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const GetUserAnswer = async (accessToken: string) => {
  try {
    const response = await axios.get(`${URL}/user/answers`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const UpdateUser = async (
  accessToken: string,
  nickname: string,
  formData?: File
) => {
  console.log(nickname, formData);
  try {
    const response = await axios.patch(
      `${URL}/user/update?nickname=${nickname}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const DeleteUser = async (
  accessToken: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.delete(`${URL}/user/delete`, {
      data: {
        email,
        password,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
