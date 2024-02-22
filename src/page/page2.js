import styled from "@emotion/styled";
import { Menu } from "../components/menu";
import { Profile } from "../components/profile";

const Bg2 = styled.div`
    width: 100%;
    height: 100vh;
    padding-top:75px;
    background-color:#FFFDF8;
    position:relative
`;
export const Page2 = () => {
    return(
        <Bg2>
            <Menu/>
            <Profile/>
        </Bg2>
    );
};