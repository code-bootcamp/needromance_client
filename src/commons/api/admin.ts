import axios from "axios";
import { AllBoards, AllUsers } from "../../components/units/admin/Admin.types";
import api from "./config";

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
    const response = await api.get("/admin/users", {
      headers: { Authorization: "Bearer " + accessToken },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      throw {
        message: response?.data?.message || "Server Error",
        status: response?.status || 500,
        data: response?.data,
      };
    } else {
      throw error;
    }
  }
};

export const getSearchUser = async (
  data: ISearchInputData
): Promise<AllUsers[]> => {
  const { keyword, accessToken } = data;
  try {
    const response = await api.get(
      `/admin/user/search?keyword=${keyword.user}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      throw {
        message: response?.data?.message || "Server Error",
        status: response?.status || 500,
        data: response?.data,
      };
    } else {
      throw error;
    }
  }
};

export const patchUserState = async (data: IBanData): Promise<AllUsers> => {
  const { accessToken, id } = data;

  try {
    const response = await api.patch(
      "/admin/user/status",
      { id },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      throw {
        message: response?.data?.message || "Server Error",
        status: response?.status || 500,
        data: response?.data,
      };
    } else {
      throw error;
    }
  }
};

export const getAllBoards = async (
  accessToken: string
): Promise<AllBoards[]> => {
  try {
    const response = await api.get("/admin/boards", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      throw {
        message: response?.data?.message || "Server Error",
        status: response?.status || 500,
        data: response?.data,
      };
    } else {
      throw error;
    }
  }
};

export const getSearchBoard = async (
  data: ISearchInputData
): Promise<AllBoards[]> => {
  const { keyword, accessToken } = data;
  try {
    const response = await api.get(
      `/admin/boards/search?keyword=${keyword.board}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      throw {
        message: response?.data?.message || "Server Error",
        status: response?.status || 500,
        data: response?.data,
      };
    } else {
      throw error;
    }
  }
};

export const deleteUserBoard = async (
  data: IDeleteBoardData
): Promise<void> => {
  const { accessToken, id } = data;

  try {
    await api.delete(`/admin/boards/${id}`, {
      headers: { Authorization: "Bearer " + accessToken },
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      throw {
        message: response?.data?.message || "Server Error",
        status: response?.status || 500,
        data: response?.data,
      };
    } else {
      throw error;
    }
  }
};
