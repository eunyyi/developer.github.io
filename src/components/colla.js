import styled from "@emotion/styled";
import Img1 from "../images/icons/git.png";
import Img2 from "../images/icons/github.png";
import Img3 from "../images/icons/vsc.png";
import Img4 from "../images/icons/notion.png";
import { Title } from "./front";

const ColDiv = styled.div`
    width: 628px;
    height: 318px;
    border-radius:20px;
    background-color:#fff;
    margin-top:130px;
    margin-left:119px;
    position:relative;
`;
const Img11 = styled.img`
    width: 112px;
    height: 47px;
    margin-left:58px;
    margin-bottom: 30px;
`;
const Img12 = styled.img`
    width: 194px;
    height: 62px;
    margin-bottom:35px;
`;
const Img13 = styled.img`
    width: 228px;
    height: 117px;
`;
const Img14 = styled.img`
    width: 196px;
    height: 84px;
`;
const ImgCons = styled.div`
    position:absolute;
    top: 78px;
    left: 70px;
`;

export const Collaboration = () => {
    return(
        <ColDiv>
            <Title className="font3">Collaboration</Title>
            <ImgCons className="row">
                <div>
                    <Img11 src={Img1}/>
                    <Img13 src={Img3}/>
                </div>
                <div>
                    <Img12 src={Img2}/>
                    <Img14 src={Img4}/>
                </div>
            </ImgCons>
        </ColDiv>
    );
};