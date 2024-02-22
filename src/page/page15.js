import styled from "@emotion/styled";
import { Menu6 } from "../components/menu6";
import Call from "../images/icons/call.png";

const Bg14 = styled.div`
    width: 100%;
    height: 100vh;
    padding-top:75px;
    background-color: #FFFDF8;
    position: relative;
`;
const Div = styled.div`
    width: 757px;
    height: 438px;
    background-color:#E8E8E8;
    border-radius: 30px;
    margin: 0 auto;
    margin-top: 140px;
`;
const CallImg = styled.img`
    margin: 40px 250px 0;        
`

export const Page15 = () => {
    return(
        <Bg14>
            <Menu6/>
            <Div>
                <CallImg src={Call}/>
                <p style={{fontSize:'50px', textAlign: 'center'}}>dldmsdl99@gmail.com</p>
            </Div>
        </Bg14>
    );
};