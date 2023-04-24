import axios from "axios";
const URL = "http://need-romance.site:3100";

export const checkDuplicateEmail = async (email: string) => {
  const response = await axios({
    method: "get",
    url: URL + "/user/find/email",
    data: {
      email,
    },
  });
  return response;
};
