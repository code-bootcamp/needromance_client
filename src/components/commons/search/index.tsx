import styled from "@emotion/styled";

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid var(--point-color-green);
  border-radius: 8px;
  height: 45px;
  padding: 10px;
`;

const Input = styled.input`
  width: 100%;
  margin: 5px 3px;
  color: #6b6b6b;
`;

const Search = (props: any) => {
  return (
    <Wrap>
      <Input placeholder="내가 작성한 글이 기억나지 않으면, 키워드를 검색해보세요  ex) 썸녀에게 고백하는 법" />

      <span onClick={() => console.log("검색")}>🔎</span>
    </Wrap>
  );
};

export default Search;
