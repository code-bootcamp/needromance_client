import api from "./config";

export const checkDuplicateEmail = async (email: string) => {
  try {
    const response = await api.get(`/user/find/email?email=${email}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendVerificationEmail = async (email: string) => {
  try {
    const response = await api.get(`/user/sendtoken/?email=${email}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const checkVerificationEmail = async (email: string, token: string) => {
  try {
    const response = await api.get(
      `/user/checktoken/?email=${email}&token=${token}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const checkDuplicateNickname = async (nickname: string) => {
  try {
    const response = await api.get(`/user/find/nickname?nickname=${nickname}`);

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
    const response = await api.post(`/user/signup`, {
      email,
      nickname,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post(`/auth/login`, {
      headers: { "Cache-Control": "no-cache" },
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (accessToken: string) => {
  try {
    const response = await api.get(`/auth/logout`, {
      headers: { Authorization: `bearer ${accessToken}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async (accessToken: string) => {
  try {
    const response = await api.get(`/user/login`, {
      headers: { Authorization: `bearer ${accessToken}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const resetPassword = async (email: string, password: string) => {
  try {
    const response = await api.patch(`/user/find/password`, {
      email,
      password,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const googleLogin = async () => {
  try {
    const response = await api.get(`/auth/login/google`);

    return response;
  } catch (error) {
    console.log(error);
  }
};
