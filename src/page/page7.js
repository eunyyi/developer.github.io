import styled from "@emotion/styled";
import Dip1 from "../images/dip1.png";
import Dip2 from "../images/dip2.png";
import Dip3 from "../images/dip3.png";

const Bg6 = styled.div`
    width: 100%;
    height: 100vh;
    padding-top:75px;
    background-color: #FFFDF8;
    position: relative;
`;
const Img = styled.img`
    position: absolute;
`;
export const TxtDiv = styled.div`
    position: absolute;
    top: 70px;
    left: 652px;
`;
export const Txtcons = styled.div`
    position: absolute;
    bottom: 323px;
    left: 209px;
    text-align: right;
`;
export const TxtDivP = styled.p`
    margin-bottom: 18px;
    font-size: 30px;
    font-weight: bold;
`;
export const Page7 = () => {
    return(
        <Bg6>
            <Img src={Dip1} style={{width:'541px', top:'36px', left:'41px'}}/>
            <TxtDiv>
                <TxtDivP>#반응형</TxtDivP>
                <p style={{fontSize:'20px'}}><strong>CSS Media Query</strong>를 사용하여 <strong>Mobile, Tablet, Desktop  3가지 크기의 버전</strong>으로 웹페이지를 만들었습니다.</p>
            </TxtDiv>
            <Img src={Dip2} style={{width:'755px', bottom:'263px', right:'86px'}}/>
            <Img src={Dip3} style={{width:'877px', bottom:'29px', right:'46px'}}/>
            <Txtcons>
                <TxtDivP>#동적기능구현</TxtDivP>
                <p style={{fontSize:'20px', textAlign:'right', lineHeight:'160%'}}>버튼 클릭시 <strong>modal창 open/close 기능</strong>을 구현되고<br/>
매장찾기 버튼 활성화하여 화면 전환이 가능하도록 하였습니다. <br/>
<strong>slider 라이브러리</strong>를 활용하여 autoplay로 기능이 작동되도록 제작하였습니다. </p>
            </Txtcons>
        </Bg6>
    );
};