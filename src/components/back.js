import styled from "@emotion/styled";
import Img from "../images/icons/express1.png";
import { Title } from "./front";

const BackDiv = styled.div`
    width: 628px;
    height: 160px;
    border-radius:20px;
    background-color:#fff;
    margin-top:70px;
    margin-left:160px;
    position:relative;
`;
const BackImg = styled.img`
    width: 172px;
    position:absolute;
    top: 66px;
    left: 50%;
    transform:translateX(-50%);
`;

export const Backend = () => {
    return(
        <BackDiv>
            <Title className="font3">Backend</Title>
            <BackImg src={Img}/>
        </BackDiv>
    );
};