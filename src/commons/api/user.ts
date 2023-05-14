import api from "./config";

export const GetUserInfo = async (accessToken: string) => {
  try {
    const response = await api.get(`/user/login`, {
      headers: { Authorization: `bearer ${accessToken}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const BestUsers = async () => {
  try {
    const response = await api.get(`/user?sort=point`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const GetUserBoard = async (accessToken: string) => {
  try {
    const response = await api.get(`/user/boards`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const SearchUserBoard = async (accessToken: string, keyword: string) => {
  try {
    const response = await api.get(`/user/boards/search?keyword=${keyword}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const GetUserAnswer = async (accessToken: string) => {
  try {
    const response = await api.get(`/user/answers`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const UpdateUser = async (
  accessToken: string,
  nickname: string,
  formData?: File
) => {
  try {
    const response = await api.patch(`/user/update?nickname=${nickname}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
      formData,
    });
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
    const response = await api.delete(`/user/delete`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        email,
        password,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
