import styled from "@emotion/styled";
import { Txt } from "./page4";
import Monitor from "../images/monitor.png";
import Page22 from "../images/page22.png";
import { Menu3 } from "../components/menu3";
import { ExportImg, TxtBottom } from "./page5";
import Export from "../images/export.png";

const Bg7 = styled.div`
    width: 100%;
    height: 100vh;
    padding-top:75px;
    background-color: #B1CBD6;
    position: relative;
`;
const MonitorImg = styled.img`
    width: 504px;
`;
const TxtDiv = styled.div`
    width: 525px;
    height: 305px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 50px;
`;
const Cons = styled.div`
    position: absolute;
    bottom: 115px;
    left: 50%;
    transform: translateX(-50%);
`;

export const Page8 = () => {
    let txtCons = [
        {
            id:1,
            txt1:'기간:',
            txt2:'2023.07-08'
        },
        {
            id:2,
            txt1:'역할:',
            txt2:'디자인, 마크업, 스타일링, 동적 기능 구현'
        },
        {
            id:3,
            txt1:'기술스택:',
            txt2:'Figma, Html5, Css3, Javascript, React'
        },
        {
            id:4,
            txt1:'소스코드:',
            txt2:'https://github.com/eunyyi/main'
        },
        {
            id:5,
            txt1:'배포링크:',
            txt2:'http://eunyi-developer.com/경원재/'
        }
    ]
    return(
        <Bg7>
            <Menu3/>
            <Txt style={{position:'absolute', left:'50%', transform:'translateX(-50%)', top:'238px', backgroundColor: '#FFFDF8', color: '#555'}}>경원재 웹사이트 리뉴얼 프로젝트</Txt>
            <TxtBottom>개인 프로젝트</TxtBottom>
            <Cons className="row">
                <TxtDiv>
                    {
                        txtCons.map((el)=><div className="row">
                            <p style={{fontSize:'20px', marginRight:'10px'}}>{el.txt1}</p>
                            <p style={{fontSize:'20px'}}>{el.txt2}</p>
                        </div>)
                    }
                </TxtDiv>
                <div>
                    <MonitorImg src={Page22}/>
                </div>
            </Cons>
            <ExportImg src={Export} style={{top:'730px', right:'945px'}} 
                onClick={()=>window.open("https://eunyyi.github.io/","_black")}/>
        </Bg7>
    );
};