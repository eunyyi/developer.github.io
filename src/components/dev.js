import styled from "@emotion/styled";
import Img from "../images/icons/mysql.png";
import { Title } from "./front";

const DevDiv = styled.div`
    width: 628px;
    height: 170px;
    border-radius:20px;
    background-color:#fff;
    margin-top:70px;
    margin-left:160px;
    position:relative;
`;
const DevImg = styled.img`
    width: 146px;
    position:absolute;
    top: 60px;
    left: 50%;
    transform:translateX(-50%);
`;

export const Dev = () => {
    return(
        <DevDiv>
            <Title className="font3">DevOps</Title>
            <DevImg src={Img}/>
        </DevDiv>
    );
};