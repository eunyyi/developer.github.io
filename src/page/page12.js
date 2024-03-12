import styled from "@emotion/styled";
import { Menu4 } from "../components/menu4";
import { Txt } from "./page4";
import Monitor from "../images/monitor.png";
import Page122 from "../images/page12.png";
import Export from "../images/export.png";
import Home from "../images/homepage.svg";
import { Menu5 } from "../components/menu5";
import { ExportImg, TxtBottom } from "./page5";

const Bg11 = styled.div`
    width: 100%;
    height: 100vh;
    padding-top:75px;
    background-color: #E8E8E8;
    position: relative;
`;
const MonitorImg = styled.img`
    width: 504px;
    margin-right: 177px;
    z-index: 98;
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

export const Page12 = () => {
    let txtCons = [
        {
            id:1,
            txt1:'기간:',
            txt2:'2024.01'
        },
        {
            id:2,
            txt1:'역할:',
            txt2:'디자인, 마크업, 스타일링, 동적 기능 구현'
        },
        {
            id:3,
            txt1:'기술스택:',
            txt2:'React ,Styled-Components'
        },
        {
            id:4,
            txt1:'소스코드:',
            txt2:'https://github.com/eunyyi/project.github.io'
        },
        {
            id:5,
            txt1:'배포링크:',
            txt2:'https://eunyyi.github.io/project.github.io/'
        }
    ]
    return(
        <Bg11>
            <Menu5/>
            <Txt style={{position:'absolute', left:'50%', transform:'translateX(-50%)', top:'238px', backgroundColor:'#E7B5BD', color:'#fff'}}>릴리바이레드 리액트 프로젝트</Txt>
            <TxtBottom>팀 프로젝트</TxtBottom>
            <Cons className="row">
                <div>
                    <MonitorImg src={Page122}/>
                </div>
                <TxtDiv>
                    {
                        txtCons.map((el)=><div className="row">
                            <p style={{fontSize:'20px', marginRight:'10px'}}>{el.txt1}</p>
                            <p style={{fontSize:'20px'}}>{el.txt2}</p>
                        </div>)
                    }
                </TxtDiv>
                <ExportImg src={Export} style={{top:'255px', right:'40px'}} 
                onClick={()=>window.open("https://github.com/eunyyi/project.github.io","_black")}/>
                <ExportImg src={Home} style={{width:'40px', top:'325px', right:'50px'}} 
                onClick={()=>window.open("https://eunyyi.github.io/project.github.io/","_black")}/>
            </Cons>
        </Bg11>
    );
};