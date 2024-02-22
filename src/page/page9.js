import styled from "@emotion/styled";
import Gyeong1 from "../images/gyeongMain.png";
import Gyeong2 from "../images/gyeongSub1.png";
import Gyeong3 from "../images/gyeongSub2.png";
import { DetailCons, DetailDiv, Title, TxtP, TxtPp } from "./page6";

const Bg8 = styled.div`
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

export const Page9 = () => {
    return(
        <Bg8>
            <div>
                <div style={{position:'absolute', top:'30px', left:'135px'}}>
                    <Img src={Gyeong1}/>
                    <Title style={{backgroundColor: '#e8e8e8', color: '#000'}}>MainPage</Title>
                </div>
                <div style={{position:'absolute', top:'63px', left:'410px'}}>
                    <Img src={Gyeong2}/>
                    <Title style={{backgroundColor: '#e8e8e8', color: '#000'}}>SubPage1</Title>
                </div>
                <div style={{position:'absolute', top:'60px', left:'671px'}}>
                    <Img src={Gyeong3}/>
                    <Title style={{backgroundColor: '#e8e8e8', color: '#000'}}>SubPage2</Title>
                </div>
            </div>
            <DetailDiv className="row" style={{height:'830px'}}>
                <DetailCons style={{backgroundColor:'#e8e8e8'}}>
                    <TxtP>[프로젝트 소개]</TxtP> <strong></strong>
                    <TxtPp>저의 취미인 여행을 계획하던 중에 경원재 호텔 사이트에 접하게 되었습니다. 경원재 앰버서더 인천을 중점으로 리뉴얼하여 기존 사이트와 차별점을 두었습니다.</TxtPp>
                </DetailCons>
                <DetailCons style={{top:'283px', backgroundColor:'#e8e8e8'}}>
                    <TxtP>[개발과정]</TxtP> 
                    <TxtPp>기존 사이트와는 다르게 컨텐츠를 다양하게 구성하여 다채로운 화면을 제공하였습니다.<br/>
또한, <strong>자주 사용되는 요소들을 Component로 제작</strong>하여 코드의 재사용성을 높이고, <strong>React Router를 활용하여 페이지 간의 이동 효과</strong>를 부여하였습니다.<br/>
객실예약시 <strong>Check-In/Check-Out 날짜가 선택가능</strong>하고 객실조회시 화면이 전환되도록 구현하였으며 <strong>로그인과 회원가입 시 유효성 검사를 시행</strong>하여 사용자가 올바르게 정보를 입력할 수 있도록 하였습니다.</TxtPp>
                </DetailCons>
                <DetailCons style={{top:'623px', backgroundColor:'#e8e8e8'}}>
                    <TxtP>[느낀점]</TxtP>
                    <TxtPp>React를 배우고 처음 적용한 프로젝트를 통해 여러 시행착오를 겪었지만, 공식 문헌과 <br/>다양한 사이트를 참고하여 프로젝트에 적용해보며 전문성을 키울 수 있었습니다.<br/>
                    <strong>Component를 분리하여 만들고 재사용하는 방법</strong>부터 <strong>JavaScript와는 다른 <br/>JSX의 문법들을 학습</strong>할 수 있었습니다.
                        이러한 경험은 React와 프론트엔드 개발에 대한 이해를 높이고, 실무에서 유용하게 활용할 수 있는 기술을 익힐 수 있었다고 생각합니다. </TxtPp>
                </DetailCons>
            </DetailDiv>
        </Bg8>
    );
};