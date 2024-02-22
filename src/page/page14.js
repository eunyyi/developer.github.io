import styled from "@emotion/styled";
import { TxtDiv, TxtDivP } from "./page7";
import Lily1 from "../images/lily1.png";
import Lily2 from "../images/lily2.png";
import Lily3 from "../images/lily3.png";
import Lily4 from "../images/lily4.png";

const Bg13 = styled.div`
    width: 100%;
    height: 100vh;
    padding-top:75px;
    background-color: #E7B5BD;
    position: relative;
`;
const Img = styled.img`
    position: absolute;
`;
export const Page14 = () => {
    return(
        <Bg13>
            <TxtDiv style={{top:'46px', left:'101px'}}>
                <TxtDivP>#장바구니 기능</TxtDivP>
                <p style={{fontSize:'20px', lineHeight:'160%'}}>장바구니에 상품을 추가하고 변경 및 삭제할 수 있는 기능을 구현하고 <br/>
장바구니 항목 가격 합계 계산, 총금액 계산, 배송비 계산 기능을 추가하여 완성도를 높였습니다.  </p>
            </TxtDiv>
            <Img src={Lily1} style={{top:'221px', left:'91px', zIndex:999}}/> 
            <Img src={Lily2} style={{top:'279px', left:'287px', zIndex:998}}/>
            <Img src={Lily3} style={{top:'86px', right:'453px', zIndex:997}}/>
            <Img src={Lily4} style={{right:'72px', bottom:'50px', zIndex:996}}/>
        </Bg13>
    );
};