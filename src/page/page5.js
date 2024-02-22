import styled from "@emotion/styled";
import { Menu4 } from "../components/menu4";
import { Txt } from "./page4";
import Monitor from "../images/monitor.png";
import Page11 from "../images/page11.png";
import Export from "../images/export.png";

const Bg4 = styled.div`
    width: 100%;
    height: 100vh;
    padding-top:75px;
    background-color: #FFFDF8;
    position: relative;
`;
export const TxtBottom = styled.p`
    font-size: 20px;
    color: #626262;
    position:absolute;
    top: 327px;
    left: 50%;
    transform: translateX(-50%);
`;
export const MonitorDiv = styled.img`
    width: 534px;
    height: 470px;
    margin-right: 177px;
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
export const ExportImg = styled.img`
    position: absolute;
`


export const Page5 = () => {
    let txtCons = [
        {
            id:1,
            txt1:'기간:',
            txt2:'2023.06'
        },
        {
            id:2,
            txt1:'역할:',
            txt2:'디자인, 마크업, 스타일링, 동적 기능 구현'
        },
        {
            id:3,
            txt1:'기술스택:',
            txt2:'Figma, Html5, Css3, Javascript'
        },
        {
            id:4,
            txt1:'소스코드:',
            txt2:'https://github.com/eunyyi/main/tree/diptique'
        },
        {
            id:5,
            txt1:'배포링크:',
            txt2:'http://eunyi-developer.com/딥티크/'
        }
    ]
    return(
        <Bg4>
            <Menu4/>
            <Txt style={{position:'absolute', top:'238px', left:'50%', transform:'translateX(-50%)'}}>딥티크 웹사이트 리뉴얼 프로젝트</Txt>
            <TxtBottom>개인 프로젝트</TxtBottom>
            <Cons className="row">
                <div>
                    <MonitorImg src={Page11}/>
                </div>
                <TxtDiv>
                    {
                        txtCons.map((el)=><div className="row">
                            <p style={{fontSize:'20px', marginRight:'10px'}}>{el.txt1}</p>
                            <p style={{fontSize:'20px'}}>{el.txt2}</p>
                        </div>)
                    }
                </TxtDiv>
                <ExportImg src={Export} style={{top:'327px', right:'109px'}} 
                onClick={()=>window.open("http://eunyi-developer.com/%eb%94%a5%ed%8b%b0%ed%81%ac/","_black")}/>
            </Cons>
        </Bg4>
    );
};