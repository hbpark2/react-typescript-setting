import { useContext } from "react";
import styled from "styled-components";
import { ArrayTypeNode } from "typescript";
import { CurrentContext } from "../Context/ContextStore";

const Container = styled.div`
  padding: 10px 15px;
`;

const Header = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 24px;
`;

const Content = styled.div`
  margin-top: 20px;
`;

const InputWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  width: 80%;

  span {
    display: block;
    margin-bottom: 3px;
  }
  input {
    display: block;
    width: calc(100% - 14px);
    padding: 5px 7px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const SaveBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin: 100px auto 0;
  padding: 20px 10px;
  background-color: #ccc;
  border-radius: 5px;

  cursor: pointer;
`;

interface IModalInnerProps {
  value1Data: string;
  value2Data: string;
  listData: Array<Object>;
  onChangeInputData: Function;
  orginListData: Array<Object>;
}

const ModalInner: React.FC<IModalInnerProps> = ({
  value1Data,
  value2Data,
  onChangeInputData,
  orginListData,
}) => {
  const { modalState, onCloseModal } = useContext(CurrentContext);

  const onSaveBtnClick = (listType: string) => {
    let dataJson = {
      listType,
      value1Data: value1Data,
      value2Data: value2Data,
    };

    let listObj = orginListData;
    if (orginListData) {
      listObj.push(dataJson);
    } else {
      listObj = [];
      listObj.push(dataJson);
    }

    localStorage.setItem("data1", JSON.stringify(listObj));
    onCloseModal();
  };

  return (
    <Container>
      <Header>{modalState}</Header>

      <Content>
        <InputWrap>
          <Label>
            <span>Title</span>
            <input
              value={value1Data}
              onChange={(e) => onChangeInputData(e, 1)}
            />
          </Label>
        </InputWrap>
        <InputWrap>
          <Label>
            <span>
              {((modalState === "IMAGE" || modalState === "VIDEO") && "Url") ||
                ((modalState === "NOTE" || modalState === "TODO") && "Body")}
            </span>
            <input
              value={value2Data}
              onChange={(e) => onChangeInputData(e, 2)}
            />
          </Label>
        </InputWrap>
        <SaveBtn onClick={() => onSaveBtnClick(modalState || "")}>저장</SaveBtn>
      </Content>
    </Container>
  );
};

export default ModalInner;
