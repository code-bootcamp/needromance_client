import axios from "axios";
import { AllBoards, AllUsers } from "../../components/units/admin/Admin.types";
import config from "./config";

const server = config.backend.baseURL;

interface ISearchInputData {
  keyword: { user?: string; board?: string };
  accessToken: string;
}
interface IBanData {
  id: string;
  accessToken: string;
}
interface IDeleteBoardData {
  id: number;
  accessToken: string;
}
export const getAllUsers = async (accessToken: string): Promise<AllUsers[]> => {
  try {
    const response = await axios({
      method: "get",
      url: server + "/admin/users",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data || error.message);
    } else {
      console.log(error);
    }
    // 에러발생시 빈 배열로 리턴시키기
    return [];
  }
};

export const getSearchUser = async (data: ISearchInputData) => {
  const { keyword, accessToken } = data;

  try {
    const response = await axios({
      method: "get",
      url: server + `/admin/user/search?keyword=${keyword.user}`,
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data || error.message);
      // 검색결과가 없다면 error status 422 code를 받아 alert modal 호출
      return error.response;
    } else {
      console.log(error);
      return [];
    }
  }
};
export const patchUserState = async (data: IBanData) => {
  const { accessToken, id } = data;

  try {
    const response = await axios({
      method: "patch",
      url: server + "/admin/user/status",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      data: { id },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data || error.message);
    } else {
      console.log(error);
    }
    return [];
  }
};

export const getAllBoards = async (accessToken: string) => {
  try {
    const response = await axios({
      method: "get",
      url: server + "/admin/boards",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data || error.message);
    } else {
      console.log(error);
    }
    // 에러발생시 빈 배열로 리턴시키기
    return [];
  }
};
export const getSearchBoard = async (
  data: ISearchInputData
): Promise<AllBoards[]> => {
  const { keyword, accessToken } = data;

  try {
    const response = await axios({
      method: "get",
      url: server + `/admin/boards/search?keyword=${keyword.board}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
export const deleteUserBoard = async (data: IDeleteBoardData) => {
  const { accessToken, id } = data;

  try {
    const response = await axios({
      method: "delete",
      url: server + `/admin/boards/${id}`,
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data || error.message);
      return error.response;
    } else {
      console.log(error);
      throw new Error();
    }
  }
};
