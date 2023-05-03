export interface IBoardsType {
  id: number;
  title: string;
  contents: string;
  createdAt: string;
  hashtags: string[];
  user: {
    id: string;
    email: string;
    nickname: string;
    userImg: string;
    password: string;
    point: number;
    state: boolean;
  };
  views: string;
  answers: object[];
}
