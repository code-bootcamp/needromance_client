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

export const UpdateUser = async (
  accessToken: string,
  nickname: string,
  img: string
) => {
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

export const BestUsers = async () => {
  try {
    const response = await axios.get(`${URL}/user?sort=point`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteUser = async (
  accessToken: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.delete(
      `${URL}/user/delete`,
      {
        email,
        password,
      },
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
  } catch (error) {
    console.log(error);
    return error;
  }
};
