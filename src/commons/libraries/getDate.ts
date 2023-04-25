export const getDate = (value: string) => {
  const date = new Date(value);
  const yy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  return `${yy}년 ${mm}월 ${dd}일`;
};
