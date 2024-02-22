import styled from "@emotion/styled";
import Lily1 from "../images/lilyMain.png";
import Lily2 from "../images/lilyCart.png";
import Lily3 from "../images/lilyJoin.png";
import Lily4 from "../images/lilyLogin.png";
import { DetailCons, DetailDiv, Title, TxtP, TxtPp } from "./page6";

const Bg12 = styled.div`
    width: 100%;
    height: 100vh;
    padding-top:75px;
    background-color: #FFFDF8;
    position: relative;
`;
const Img = styled.img`
    width: 178px;
    margin-bottom: 20px;
`;
export const Page13 = () => {
    return(
        <Bg12>
            <div>
                <div style={{position:'absolute', top:'66px', left:'80px'}}>
                    <Img src={Lily1} style={{width:'178px'}}/>
                    <Title style={{backgroundColor:"#E8E8E8"}}>MainPage</Title>
                </div>
                <div style={{position:'absolute', top:'118px', left:'301px'}}>
                    <Img src={Lily2} style={{width:'288px'}}/>
                    <Title style={{backgroundColor:"#E8E8E8"}}>CartPage</Title>
                </div>
                <div style={{position:'absolute', top:'78px', left:'631px'}}>
                    <Img src={Lily3} style={{width:'245px'}}/>
                    <Title style={{backgroundColor:"#E8E8E8"}}>JoinPage</Title>
                </div>
                <div style={{position:'absolute', top:'600px', left:'453px'}}>
                    <Img src={Lily4} style={{width:'231px'}}/>
                    <Title style={{backgroundColor:"#E8E8E8"}}>LoginPage</Title>
                </div>
            </div>
            <DetailDiv className="row" style={{right:'80px'}}>
                <DetailCons style={{backgroundColor:'#E7B5BD'}}>
                    <TxtP>[프로젝트 소개]</TxtP>
                    <TxtPp>좋아하는 뷰티 브랜드 lilybyred의 웹사이트를 React를 활용하여 클론코딩한 프로젝트입니다. </TxtPp>
                </DetailCons>
                <DetailCons style={{backgroundColor:'#E7B5BD'}}>
                    <TxtP>[개발과정]</TxtP> 
                    <TxtPp>클론코딩 프로젝트를 통해 lilybyred의 브랜드 이미지와 사용자 경험을 재현하고, 필요한 기능들을 구현해보았습니다. 
<strong> 주요한 프론트엔드 기능으로는 장바구니 기능, 유효성 검사가 작동되는 간단한 회원가입 기능</strong>을 만들어보았습니다. <br/>
장바구니 기능을 구현하는 과정에서 제품 정보를 관리하는데 <strong>JSON 파일을 사용</strong>하고, <strong>axios</strong>를 통해 데이터를 가져오며, 
<strong>JavaScript의 map 함수를 활용</strong>하여 화면에 동적으로 <br/>표시하였습니다. 
또한,  장바구니에 담은 상품을 <strong>localstorage에 저장</strong>하여 사용자가 사이트를 나가더라도 장바구니 정보가 유지되도록 하였습니다.</TxtPp>
                </DetailCons>
                <DetailCons style={{backgroundColor:'#E7B5BD'}}>
                    <TxtP>[느낀점]</TxtP>
                    <TxtPp>기존 사이트를 클론코딩하면서 디자인하는 시간을 줄이고, 대신 프론트엔드 기술을 학습하고 적용하는 데 많은 시간을 투자하였습니다.<br/>
맡은 역할인 장바구니 기능 구현을 위해 <strong>axios, localstorage 등 새로운 기술들을 학습</strong>하고 <strong>props로 데이터를 전달</strong>하는 연습을 많이 할 수 있었습니다. <br/>
또한, 함께 했던 프론트엔드 개발자와 함께 <strong>GitHub로 협업</strong>하여 자주 사용되는 컴포넌트를 함께 활용하고 개발 상황을 공유하면서 서로의 지식을 공유하고 성장하는데도 도움이 될 수 있었던 시간이었습니다.</TxtPp>
                </DetailCons>
            </DetailDiv>
        </Bg12>
    );
};