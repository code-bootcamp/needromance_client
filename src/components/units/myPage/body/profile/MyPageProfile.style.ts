import styled from "@emotion/styled";

export const ProfileWrap = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const ListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const List = styled.li`
  height: 80px;
  display: flex;
  align-items: center;

  position: relative;
`;

export const Input = styled.input`
  height: 40px;
  width: 312px;
  line-height: 40px;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 10px;
  font-family: inherit;
`;

export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

export const IconWrap = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--point-color-light-green);
  font-size: 10px;
  text-align: center;
  line-height: 24px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  position: absolute;
  top: 0;
  left: 60px;
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
`;

const Button = styled.button`
  font-size: 14px;
  height: 40px;
  padding: 7px 15px;
  border-radius: 50px;
  font-family: inherit;
  width: 110px;
`;

export const Btn = styled(Button)`
  background-color: var(--point-color-green);
  color: #fff;
`;

export const Btn_line = styled(Button)`
  border: 1px solid var(--point-color-green);
  color: var(--point-color-green);
`;
