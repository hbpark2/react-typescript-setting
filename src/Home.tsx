import { SetStateAction, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { isTemplateTail } from "typescript";
import ListItem from "./Components/ListItem";
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

// const ListItem = styled.li`
//   margin: 30px auto;
//   padding: 10px 20px;
//   background-color: rgba(255, 255, 255, 0.5);
//   border: 1px solid #fff;
//   border-radius: 15px;
//   box-shadow: ${(props) => props.theme.shadow_2};
//   span {
//     display: block;
//   }
//   ul {
//     margin: 10px 0;
//   }
// `;

// const ListTitle = styled.span`
//   text-align: center;
//   font-weight: 600;
// `;

export type ListData = {
  listType: string;
  value1Data: string;
  value2Data: string;
};

const Home = () => {
  const { modal } = useContext(CurrentContext);
  const [value1Data, setValue1Data] = useState<string>("");
  const [value2Data, setValue2Data] = useState<string>("");
  const [listData, setListData] = useState(
    localStorage.getItem("data1" || "") &&
      JSON.parse(localStorage.getItem("data1" || "") || "")
  );

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

  const listItem =
    localStorage.getItem("data1" || "") &&
    JSON.parse(localStorage.getItem("data1" || "") || "");

  const onDeleteBtnClick = (idx: number) => {
    listItem.splice(idx, 1);
    localStorage.setItem("data1", JSON.stringify(listItem));
    setListData(listItem);
  };

  useEffect(() => {
    setListData(listItem);
    return () => setListData(listItem);
  }, [modal]);

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
          {listData?.map((item: ListData, index: number) => {
            return (
              <ListItem
                key={index}
                idx={index}
                onDeleteBtnClick={onDeleteBtnClick}
                listType={item.listType}
                value1Data={item.value1Data}
                value2Data={item.value2Data}
              />
            );
          })}
        </UnorderList>
      </ListWrap>
    </Container>
  );
};

export default Home;
