import axios from "axios";
import config from "./config";

const server = config.backend.baseURL;

export const getUser = async (data: any) => {
  const response = await axios({
    method: "get",
    url: server + "/admin/users/" + data.uid,
    headers: { Authorization: "Bearer " + data.token },
  });

  console.log(response.data.data);
  return response.data.data;
};
