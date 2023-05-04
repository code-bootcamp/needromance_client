import axios from "axios";
import config from "./config";

const server = config.backend.baseURL;
axios.defaults.withCredentials = true;

interface IUserQestionData {
  accessToken: string;
  text: string;
}

export const postUserQuestion = async (
  data: IUserQestionData
): Promise<string> => {
  const { accessToken, text } = data;
  try {
    const response = await axios({
      withCredentials: true,
      method: "post",
      url: `${server}/consult/question`,
      headers: { Authorization: `Bearer ${accessToken}` },
      data: { question: text },
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
