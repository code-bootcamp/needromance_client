import axios from "axios";

const URL = "https://need-romance.site";

export const GetBoards = async (page: number) => {
  try {
    const response = await axios.get(`${URL}/boards?page=${page}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const GetBoard = async (id: number) => {
  try {
    const response = await axios.get(`${URL}/boards/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const DeleteBoard = async (accessToken: string, id: number) => {
  try {
    const response = await axios.delete(`${URL}/boards/${id}`, {
      withCredentials: true,
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
      `${URL}/boards/search?keyword=${keyword}&page=1`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const WriteBoard = async (
  params: {
    title: string;
    contents: string;
    hashTags?: any[];
  },
  accessToken: string
) => {
  try {
    const response = await axios.post(
      `${URL}/boards`,
      {
        title: params.title,
        contents: params.contents,
        hashTags: params.hashTags,
      },
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const EditBoard = async (
  id: string,
  params: { title: string; contents: string; hashTags?: string[] },
  accessToken: string
) => {
  const response = await axios.patch(
    `${URL}/boards/:${id}`,
    {
      title: params.title,
      contents: params.contents,
      hashTags: params.hashTags,
    },
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
