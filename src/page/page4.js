import styled from "@emotion/styled";
import { Menu3 } from "../components/menu3";
import Img1 from "../images/page1.png";
import Img2 from "../images/page2.png";
import Img3 from "../images/page3.png";
import Img4 from "../images/page4.png";

const Bg4 = styled.div`
    width: 100%;
    height: 100vh;
    padding-top:75px;
    background-color:#B1CBD6;
`;
const PageCons = styled.div`
    width: 500px;
    height: 353px;
    border-radius:30px;
    overflow: hidden;
    position: relative;
    background-color: #799AA0;
    /* justify-content:space-between; */
`;
const Img = styled.img`
    width: 500px;
    height: 270px;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    /* border-radius:30px; */
`;
export const Txt = styled.p`
    width: fit-content;
    margin: 15px auto 0;
    padding: 15px 30px;
    font-size: 23px;
    border-radius: 20px;
    background-color:#A9958A;
    color: #fff;
    text-align: center;
    position: relative;
    z-index:99;
`;

export const Page4 = () => {
    return(
        <Bg4>
            <Menu3/>
            <div className="row" style={{width: '1218px', margin:'0 auto', justifyContent:'space-between', marginTop:'45px'}}>
            `   <PageCons style={{marginBottom: '30px'}}>
                    <Txt>딥티크 웹사이트 리뉴얼 프로젝트</Txt>
                    <Img src={Img1}/>
                </PageCons>
            `   <PageCons style={{marginBottom: '30px', backgroundColor:'#20263D'}}>
                    <Txt style={{backgroundColor: '#fff', color: '#000'}}>경원재 웹사이트 리뉴얼 프로젝트</Txt>
                    <Img src={Img2}/>
                </PageCons>
            </div>
            <div className="row" style={{width: '1218px', margin:'0 auto', justifyContent:'space-between'}}>
            `   <PageCons style={{marginBottom: '30px', backgroundColor: '#E9B4BD'}}>
                    <Txt style={{backgroundColor: '#ebebeb', color: '#555'}}>릴리바이레드 리액트 프로젝트</Txt>
                    <Img src={Img3}/>
                </PageCons>
            `   <PageCons style={{backgroundColor:'#FFFDF8'}}>
                    <Txt style={{backgroundColor: '#EDBBC5', color: '#000'}}>포트폴리오 프로젝트</Txt>
                    <Img src={Img4}/>
                </PageCons>
            {/* `   <PageCons style={{margin:'0 50px'}}>
                    <Txt>typescript 연습</Txt>
                </PageCons>
            `   <PageCons>
                    <Txt>next.js 연습</Txt>
                </PageCons> */}
            </div>
        </Bg4>
    );
};