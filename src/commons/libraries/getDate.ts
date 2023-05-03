export const getDate = (value: string) => {
  const date = new Date(value);
  const yy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  return `${yy}년 ${mm}월 ${dd}일`;
};

export const getDate2 = (value: string) => {
  const date = new Date(value);
  const yy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yy}.${mm}.${dd}`;
};
