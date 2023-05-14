import axios from "axios";
import api from "./config";
import { SiteInfo } from "../../components/units/main/Main.types";

export const getSiteInfo = async (): Promise<SiteInfo> => {
  try {
    const response = await api.get("/user/total");

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
