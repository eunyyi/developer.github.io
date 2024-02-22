import styled from "@emotion/styled";
import { TxtDiv, TxtDivP, Txtcons } from "./page7";
import Gyeong7 from "../images/Gyeong7.png";
import Gyeong8 from "../images/Gyeong8.png";
import Gyeong9 from "../images/Gyeong9.png";
import Gyeong10 from "../images/Gyeong10.png";


const Bg9 = styled.div`
    width: 100%;
    height: 100vh;
    padding-top:75px;
    background-color: #FFFDF8;
    position: relative;
`;
const TitleP = styled.p`
    width: fit-content;
    border-radius: 20px;
    padding: 5px 30px;
    font-size: 24px;
    font-weight: bold;
    background-color: #B1CBD6;
    color: #555;
    position: absolute;
    top: 50px;
    left: 60px;
`;
const Img = styled.img`
    position: absolute;
`;


export const Page11 = () => {
    return(
        <Bg9>
            <TitleP>React</TitleP>
            <TxtDiv style={{top:'123px', left:'70px'}}>
                <TxtDivP>#react-slick 라이브러리를 활용한 슬라이드 구현</TxtDivP>
                <p style={{fontSize:'20px', lineHeight:'160%'}}>각각의 room 탭에 여러 이미지들을 배치하여 클릭하면 확대한 이미지로 <br/>
                볼 수 있도록 하였습니다.</p>
            </TxtDiv>
            <Img src={Gyeong7} style={{top:'322px', left:'69px'}}/>
            <div style={{position:'absolute', top:'120px', right:'318px'}}>
                <TxtDivP>#formik, yup 라이브러리를 활용한 유효성 검사</TxtDivP>
                <p style={{fontSize:'20px', lineHeight:'160%'}}>로그인과 회원가입시  <strong>유효성 검사가 작동</strong>되도록 하여 <br/>
폼 입력값을 검증하고, 필요한 경우 사용자에게 오류 메시지를 표시하였습니다.</p>
            </div>
            <Img src={Gyeong8} style={{width:'309px', top:'279px', right:'615px'}}/>
            <Img src={Gyeong9} style={{width:'519px', top:'279px', right:'53px'}}/>
            <Img src={Gyeong10} style={{width:'269px', top:'720px', right:'629px'}}/>

        </Bg9>
    );
};