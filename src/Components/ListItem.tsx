import React from "react";
import styled from "styled-components";
const Container = styled.li`
  margin: 30px auto;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #fff;
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.shadow_2};
  span {
    display: block;
  }
  ul {
    margin: 10px 0;
  }
`;

const ListTitle = styled.span`
  text-align: center;
  font-weight: 600;
`;

const DeleteBtn = styled.button`
  cursor: pointer;
`;

interface IListItemProps {
  idx: number;
  onDeleteBtnClick: (idx: number) => void;
  listType: string;
  value1Data: string;
  value2Data: string;
}

const ListItem: React.FC<IListItemProps> = ({
  idx,
  onDeleteBtnClick,
  listType,
  value1Data,
  value2Data,
}) => {
  return (
    <Container>
      <DeleteBtn onClick={() => onDeleteBtnClick(idx)}>삭제</DeleteBtn>
      <ListTitle>{listType}</ListTitle>
      <ul>
        <li>Title</li>
        <li>{value1Data}</li>
      </ul>
      <ul>
        <li>
          {((listType === "IMAGE" || listType === "VIDEO") && "Url") ||
            ((listType === "NOTE" || listType === "TODO") && "Body")}
        </li>
        {(listType === "IMAGE" && <img src={value2Data} alt="" />) ||
          (listType === "VIDEO" && <iframe src={value2Data} />) ||
          ((listType === "NOTE" || listType === "TODO") && (
            <span>{value2Data}</span>
          ))}
      </ul>
    </Container>
  );
};

export default ListItem;
