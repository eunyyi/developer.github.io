import styled from "@emotion/styled";
import Dip1 from "../images/dipMain.png";
import Dip2 from "../images/dipSub1.png";
import Dip3 from "../images/dipSub2.png";
import Dip4 from "../images/dipModal.png";

const Bg5 = styled.div`
    width: 100%;
    height: 100vh;
    padding-top:75px;
    background-color: #A9958A;
    position: relative;
`;
const Img = styled.img`
    width: 178px;
    margin-bottom: 20px;
`;
export const Title = styled.p`
    width: fit-content;
    height: 45px;
    line-height: 45px;
    padding: 0 30px;
    font-weight: bold;
    font-size: 24px;
    border-radius: 20px;
    background-color: #fff;
    color: #555;
    margin: 0 auto;
`;
export const DetailCons = styled.div`
    width: 623px;
    border-radius: 30px 0 30px 0;
    padding: 35px 30px;
    background-color: #FFFDF8;
`;
export const TxtP = styled.p`
    font-size: 20px;
    margin-bottom:10px;
`;
export const TxtPp = styled.p`
    font-size: 18px;
    line-height: 160%;
`;
export const DetailDiv = styled.div`
    height: 850px;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top:50px;
    right: 100px;
`;
export const Page6 = () => {
    return(
        <Bg5>
            <div>
                <div style={{position:'absolute', top:'30px', left:'135px'}}>
                    <Img src={Dip1}/>
                    <Title >MainPage</Title>
                </div>
                <div style={{position:'absolute', top:'63px', left:'410px'}}>
                    <Img src={Dip2}/>
                    <Title>SubPage1</Title>
                </div>
                <div style={{position:'absolute', top:'60px', left:'671px'}}>
                    <Img src={Dip3}/>
                    <Title>SubPage2</Title>
                </div>
                <div style={{position:'absolute', top:'709px', left:'453px'}}>
                    <Img src={Dip4} style={{width:'339px'}}/>
                    <Title>Modal</Title>
                </div>
            </div>
            <DetailDiv className="row">
                <DetailCons>
                    <TxtP>[프로젝트 소개]</TxtP>
                    <TxtPp>평소 좋아하던 브랜드 Diptyque의 자사 사이트가 있으면 좋을 것 같다는 생각으로 제작해보았습니다.
                    <strong>Diptyque의 브랜드 컬러</strong>를 사용하여 자연적인 느낌과 포근함을 나타내었습니다.</TxtPp>
                </DetailCons>
                <DetailCons>
                    <TxtP>[개발과정]</TxtP> 
                    <TxtPp>기존의 Diptyque 파리 홈페이지를 바탕으로 대중적이면서도 화려하지 않는 분위기를 추구하였고 <strong>사용자의 편리함을 고려한 UI</strong>를 디자인해보았습니다. <br/>
                    <strong>Swiper, Aos 등의 라이브러리</strong>를 사용해서 페이지의 동적인 기능을 추가하였고 <strong>scroll, click, mouseenter 등의 Javascript 이벤트</strong>로 
                    화면의 다양한 기능을 구현하여 사용자들이 사이트를 더욱 편리하게 탐색할 수 있도록 하였습니다. <br/>
각각의 html 페이지를 연결하고 Offline탭으로 modal 창을 구현하여 모든 페이지에서 사용자가 원하는 정보에 쉽게 접근할 수 있도록 하였습니다. </TxtPp>
                </DetailCons>
                <DetailCons>
                    <TxtP>[느낀점]</TxtP>
                    <TxtPp>처음으로 모든 디자인과 개발까지 완료한 프로젝트여서 더 큰 의미가 있었던 것 같습니다. <strong>사용자의 니즈가 무엇인지 파악</strong>하며 
                    어떤 웹사이트를 만들어야하는지 고민하는 시간을 가졌고 <strong>Media Query를 사용하여 반응형 웹을 시도</strong>해보았습니다. 
                    이론으로만 배웠던 <strong>Javascript의 여러 문법들을 적용</strong>해보며
변화하는 코딩 사회에서 새로운 기술과 문법을 배우는 것이 필요하다는 것을 느꼈습니다.</TxtPp>
                </DetailCons>
            </DetailDiv>
        </Bg5>
    );
};