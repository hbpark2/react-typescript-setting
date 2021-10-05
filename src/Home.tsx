import { SetStateAction, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Components/Modal";
import ModalInner from "./Components/ModalInner";
import { CurrentContext } from "./Context/ContextStore";

const Container = styled.main`
  min-height: 100vh;
`;
const ListWrap = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const UnorderList = styled.ul`
  margin: 0 auto;
  width: 600px;
  min-width: 300px;
`;

const ListItem = styled.li`
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #fff;
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

type ListData = {
  listType: string;
  value1Data: string;
  value2Data: string;
};

const Home = () => {
  const { modal } = useContext(CurrentContext);
  const [value1Data, setValue1Data] = useState<string>("");
  const [value2Data, setValue2Data] = useState<string>("");
  const listData: Array<ListData> = [];

  const onChangeInputData = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: number
  ) => {
    switch (type) {
      case 1:
        setValue1Data(e.target.value);
        break;
      case 2:
        setValue2Data(e.target.value);
        break;
      default:
        break;
    }
  };

  //TODO: listItem 업데이트
  const listItem =
    localStorage.getItem("data1" || "") &&
    JSON.parse(localStorage.getItem("data1" || "") || "");

  return (
    <Container>
      {modal && (
        <Modal>
          <ModalInner
            value1Data={value1Data}
            value2Data={value2Data}
            orginListData={listItem}
            listData={listData}
            onChangeInputData={onChangeInputData}
          />
        </Modal>
      )}
      <ListWrap>
        <UnorderList>
          {listItem?.map((item: ListData, index: number) => {
            console.log(item);
            return (
              <ListItem key={index}>
                <ListTitle>{item.listType}</ListTitle>
                <ul>
                  <li>Title</li>
                  <li>{item.value1Data}</li>
                </ul>
                <ul>
                  <li>
                    {((item.listType === "IMAGE" ||
                      item.listType === "VIDEO") &&
                      "Url") ||
                      ((item.listType === "NOTE" || item.listType === "TODO") &&
                        "Body")}
                  </li>
                  {(item.listType === "IMAGE" && (
                    <img src={item.value2Data} alt="" />
                  )) ||
                    (item.listType === "VIDEO" && (
                      <iframe src={item.value2Data} />
                    )) ||
                    ((item.listType === "NOTE" || item.listType === "TODO") && (
                      <span>{item.value2Data}</span>
                    ))}
                </ul>
              </ListItem>
            );
          })}
        </UnorderList>
      </ListWrap>
    </Container>
  );
};

export default Home;
