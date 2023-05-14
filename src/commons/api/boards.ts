import api from "./config";

export const GetBoards = async (page: number) => {
  try {
    const response = await api.get(`/boards?page=${page}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const GetBoard = async (id: number) => {
  try {
    const response = await api.get(`/boards/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteBoard = async (accessToken: string, id: number) => {
  try {
    const response = await api.delete(`/boards/${id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const SearchBoard = async (keyword: string) => {
  try {
    const response = await api.get(`/boards/search?keyword=${keyword}&page=1`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const WriteBoard = async (
  params: { title: string; contents: string; hashTags?: string[] },
  accessToken: string
) => {
  try {
    const response = await api.post(`/boards`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      title: params.title,
      contents: params.contents,
      hashTags: params.hashTags,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const EditBoard = async (
  params: {
    title: string;
    contents: string;
    hashTags?: string[];
  },
  id: string,
  accessToken: string
) => {
  try {
    await api.patch(`/boards/${id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      title: params.title,
      contents: params.contents,
      hashTags: params.hashTags,
    });
  } catch (error) {
    console.log(error);
  }
};
