import config from "./config";
import axios from "axios";

const testServer = config.backend.baseURL;
export const test = async (data: any) => {
  const response = await axios({
    method: "get",
    url: testServer + `/test?offset=${data.queryString}&limit=10`,
  });
  console.log(config.chatGPT.apiKey);
};

// export const getItemList = async (data) => {
//   try {
//     const response = await axios({
//       method: "get",
//       url:
//         gascServer +
//         `/market/items?offset=${data.offset}&limit=10&sort=${
//           !data.sort ? "DESC" : data.sort
//         }&type=${!data.type ? "created_at" : data.type}&rarity=${
//           !data.rarity ? "" : data.rarity
//         }&ability=${!data.flex ? "" : "flex," + data.flex + "-"}${
//           !data.bmr ? "" : "bmr," + data.bmr + "-"
//         }${!data.clubby ? "" : "clubby," + data.clubby + "-"}${
//           !data.luck ? "" : "luck," + data.luck + "-"
//         }${!data.inner_peace ? "" : "inner_peace," + data.inner_peace}&level=${
//           !data.level ? "" : data.level
//         }`,
//       headers: { Authorization: "Bearer " + data.token },
//     });
//     return response.data.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// export const getItem = async (data) => {
//   try {
//     const response = await axios({
//       method: "get",
//       url: gascServer + `/market/items/${data.id}`,
//       headers: { Authorization: "Bearer " + data.token },
//     });
//     return response.data.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };
