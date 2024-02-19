import styled from "styled-components";
import colors from "../../styles/color";

const StyleItem = styled.div`
    width: 100%;
    margin-top: 1vw;
`

const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.5vw;
  background-color: white;
  border: 1px solid var(--Gray-Gray-200, #eee);
  border-bottom: none; // 하단 테두리 제외

  &:last-child {
    border-bottom: 1px solid var(--Gray-Gray-200, #eee);
  }
`;

const RowContainer = styled.div`
  background: var(--Gray-Gray-50, #fafafa);
  width: 8.05vw;
  /* height: 2.393vw; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const GraphP = styled.p`
  color: var(--Gray-Gray-500, #9e9e9e);
  text-align: center;

  /* Body/Body/medium */
  font-family: Pretendard;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1vw;
  letter-spacing: -0.3px;
`;

const CellContainer = styled.div`
  display: flex;
  padding-left: 1.2vw;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ValueP = styled.p`
  border-radius: 2.5vw;
  background: #FFE7E7;
  color: var(--Gray-Gray-500, #9e9e9e);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.3px;
  padding: 0.3vw 0.7vw;
  display: flex; // flex 컨테이너로 만듦
  justify-content: center; // 자식 요소를 중앙에 수평 정렬
  align-items: center;
`;

const DefaultValueP = styled.p`
  color: var(--Gray-Gray-500, #9e9e9e);
  font-family: Pretendard;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.3px;
  display: flex; // flex 컨테이너로 만듦
  justify-content: center; // 자식 요소를 중앙에 수평 정렬
  align-items: center;
  text-align: center;
`;

const ItemBlood = (props) => {
    const { id, type, date } = props;

    return (
        <StyleItem key={id}>
            <GraphContainer>
                <RowContainer>
                  <GraphP>헌혈 종류</GraphP>
                </RowContainer>
                <CellContainer style={{gap: "0.3vw"}}>
                  <ValueP style={{background: type === 'WB' ? '#FFB2B5' : '', color: type === 'WB' ? '#17191A' : ''}}>전헐</ValueP>
                  <ValueP style={{background: type === 'PB' ? '#FFB2B5' : '', color: type === 'PB' ? '#17191A' : ''}}>혈소판</ValueP>
                  <ValueP style={{background: type === 'PLB' ? '#FFB2B5' : '', color: type === 'PLB' ? '#17191A' : ''}}>혈장</ValueP>
                </CellContainer>
              </GraphContainer>
              <GraphContainer>
                <RowContainer>
                  <GraphP>헌혈 일자</GraphP>
                </RowContainer>
                <CellContainer>
                  <DefaultValueP>{date}</DefaultValueP>
                </CellContainer>
              </GraphContainer>
        </StyleItem>
    )
}

export default ItemBlood;