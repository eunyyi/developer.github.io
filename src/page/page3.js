import styled from "@emotion/styled";
import { Menu2 } from "../components/menu2";
import { Frontend } from "../components/front";
import { Backend } from "../components/back";
import { Dev } from "../components/dev";
import { Collaboration } from "../components/colla";

const Bg3 = styled.div`
    width: 100%;
    height: 100vh;
    padding-top:75px;
    background: linear-gradient(180deg, rgba(255,253,248,1) 20%, rgba(177,203,214,1) 100%);
`;

export const Page3 = () => {
    return(
        <Bg3>
            <Menu2/>
            <Frontend/>
            <div className="row">
                <div>
                    <Backend/>
                    <Dev/> 
                </div>
                <Collaboration/>
            </div>
        </Bg3>
    );
};