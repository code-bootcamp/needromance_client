import axios from "axios";
import api from "./config";

// const URL = "https://need-romance.site";

export const GetBoards = async (page: number) => {
  try {
    const response = await api.get(`/boards?page=${page}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const GetBoards = async (page: number) => {
//   try {
//     const response = await axios.get(`${URL}/boards?page=${page}`, {
//       // headers: { Origin: "https://needromance.online" },
//       withCredentials: true,
//     });
//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// };

export const GetBoard = async (id: number) => {
  try {
    const response = await api.get(`/boards/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const GetBoard = async (id: number) => {
//   try {
//     const response = await axios.get(`${URL}/boards/${id}`, {
//       // headers: { Origin: "https://needromance.online" },
//       withCredentials: true,
//     });
//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// };

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

// export const DeleteBoard = async (accessToken: string, id: number) => {
//   try {
//     const response = await axios.delete(`${URL}/boards/${id}`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         // Origin: "https://needromance.online",
//       },
//       withCredentials: true,
//     });
//     if (response.status == 200) {
//       return response.data;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

export const SearchBoard = async (keyword: string) => {
  try {
    const response = await api.get(`/boards/search?keyword=${keyword}&page=1`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const SearchBoard = async (keyword: string) => {
//   try {
//     const response = await axios.get(
//       `${URL}/boards/search?keyword=${keyword}&page=1`,
//       {
//         headers: {
//           // Origin: "https://needromance.online",
//         },
//         withCredentials: true,
//       }
//     );
//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// };

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

// export const WriteBoard = async (
//   params: {
//     title: string;
//     contents: string;
//     hashTags?: any[];
//   },
//   accessToken: string
// ) => {
//   try {
//     const response = await axios.post(
//       `${URL}/boards`,
//       {
//         title: params.title,
//         contents: params.contents,
//         hashTags: params.hashTags,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           // Origin: "https://needromance.online",
//         },
//         withCredentials: true,
//       }
//     );
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

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
    //boards/:${id}` <-- : 이거 들어가는게 맞나요?
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

// export const EditBoard = async (
//   id: string,
//   params: { title: string; contents: string; hashTags?: string[] },
//   accessToken: string
// ) => {
//   const response = await axios.patch(
//     `${URL}/boards/:${id}`,
//     {
//       title: params.title,
//       contents: params.contents,
//       hashTags: params.hashTags,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         // Origin: "https://needromance.online",
//       },
//       withCredentials: true,
//     }
//   );
// };
