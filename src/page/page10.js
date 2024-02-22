import styled from "@emotion/styled";
import { TxtDiv, TxtDivP, Txtcons } from "./page7";
import Gyeong1 from "../images/Gyeong1.png";
import Gyeong2 from "../images/Gyeong2.png";
import Gyeong3 from "../images/Gyeong3.png";
import Gyeong4 from "../images/Gyeong4.png";
import Gyeong5 from "../images/Gyeong5.png";
import Gyeong6 from "../images/Gyeong6.png";
import Next from "../images/next.png";

const Bg9 = styled.div`
    width: 100%;
    height: 100vh;
    padding-top:75px;
    background-color: #B1CBD6;
    position: relative;
`;
const TitleP = styled.p`
    width: fit-content;
    border-radius: 20px;
    padding: 5px 30px;
    font-size: 24px;
    font-weight: bold;
    background-color: #FFFDF8;
    color: #555;
    position: absolute;
    top: 50px;
    left: 60px;
`;
const Img = styled.img`
    position: absolute;
`


export const Page10 = () => {
    return(
        <Bg9>
            <TitleP>Html5, Css3, Javascript</TitleP>
            <TxtDiv style={{top:'123px', left:'91px'}}>
                <TxtDivP>#디자인리뉴얼</TxtDivP>
                <p style={{fontSize:'20px'}}>기존 사이트의 이미지를 활용하여 <strong>다양한 레이아웃을 디자인하고 동적 기능을 구현</strong>하였습니다.</p>
            </TxtDiv>
            <Img src={Gyeong1} style={{width:'304px', top: '260px', left:'81px'}}/>
            <Img src={Gyeong2} style={{width:'326px', top: '244px', left:'463px'}}/>
            <Img src={Gyeong3} style={{width:'231px', bottom: '62px', left:'135px'}}/>
            <Img src={Gyeong4} style={{width:'234px', bottom: '51px', left:'444px'}}/>
            <div style={{position:'absolute', top:'120px', right:'200px'}}>
                <TxtDivP>#calendar 커스텀</TxtDivP>
                <p style={{fontSize:'20px', lineHeight:'160%'}}><strong>React-Calendar 라이브러리를 활용</strong>하여 Check-In/Check-Out 기능을 구현하고 <br/>
기존 캘린더를 커스텀해보았습니다.</p>
            </div>
            <div className="row" style={{position:'absolute', top: '355px', right:'83px', width:'750px', justifyContent:'space-between',height:'424px', alignItems:'center'}}>
                <img src={Gyeong5} style={{width:'198px'}}/>
                <img src={Next}/>
                <img src={Gyeong6} style={{width:'390px'}}/>
            </div>
        </Bg9>
    );
};