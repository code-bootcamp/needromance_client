import axios from "axios";
import config from "./config";

const server = config.backend.baseURL;

interface IUserQestionData {
  accessToken: string;
  text: string;
}

export const postUserQuestion = async (
  data: IUserQestionData
): Promise<string> => {
  const { accessToken, text } = data;
  console.log(accessToken);
  try {
    const response = await axios({
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
