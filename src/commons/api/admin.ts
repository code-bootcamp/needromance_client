import axios from "axios";
import { AllUsers } from "../../components/units/admin/Admin.types";
import config from "./config";

const server = config.backend.baseURL;

export const getAllUsers = async (): Promise<AllUsers[]> => {
  try {
    const response = await axios({
      method: "get",
      url: server + "/admin/users",
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJuaWNrbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkByb21hbmNlLmNvbSIsInN1YiI6MSwiaWF0IjoxNjgyNTA5MDMxLCJleHAiOjE2ODI1MTYyMzF9.b2LHqe0zX2FhoQZJXDAEUdiSXfrAfPCAiABe0u9Wkx8",
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

// export const getSearchUser = async (data: any) => {
//   try {
//     const response = await axios({
//       method: "get",
//       url:
//         server + `/admin/users?search=${data.keyword}&category=${data.filter}`,
//       headers: {
//         Authorization:
//           "Bearer " +
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJuaWNrbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkByb21hbmNlLmNvbSIsInN1YiI6MSwiaWF0IjoxNjgyNDc3MDI4LCJleHAiOjE2ODI0ODQyMjh9.mpUEC2JubYVXdKtGSCed13FAmngHm6akR-w7PPsvCw0",
//       },
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log(error.response?.data || error.message);
//     } else {
//       console.log(error);
//     }
//   }
// };

export const getAllBoards = async () => {
  try {
    const response = await axios({
      method: "get",
      url: server + "/admin/boards",
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJuaWNrbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkByb21hbmNlLmNvbSIsInN1YiI6MSwiaWF0IjoxNjgyNTA5MDMxLCJleHAiOjE2ODI1MTYyMzF9.b2LHqe0zX2FhoQZJXDAEUdiSXfrAfPCAiABe0u9Wkx8",
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
