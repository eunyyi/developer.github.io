import styled from "@emotion/styled";
import SkyBrown from "../images/icons/skyBrown.png";

const MenuCons = styled.div`
    width: 733px;
    justify-content:space-between;
    margin: 0 auto;
`;
const MenuP = styled.p`
    font-size: 20px;
    position: absolute;
    top: 50%;;
    left: 50%;;
    transform:translate(-50%,-50%);
    color: #555;
`;
const MenuDiv = styled.div`
    position:relative;
    width: 162px;
    height: 99px;
`
export const Menu6 = () => {
    return(
        <>
            <MenuCons className="row">
                <MenuDiv>
                    <img src={SkyBrown}/>
                    <MenuP className="font2" style={{color:'#626262'}}>About</MenuP>
                </MenuDiv>
                <MenuDiv>
                    <img src={SkyBrown}/>
                    <MenuP className="font2" style={{color:'#626262'}}>Skill</MenuP>
                </MenuDiv>
                <MenuDiv>
                    <img src={SkyBrown} style={{color:'#626262'}}/>
                    <MenuP className="font2">Project</MenuP>
                </MenuDiv>
                <MenuDiv>
                    <img src={SkyBrown}/>
                    <MenuP className="font2" style={{color:'#ffffff'}}>Contact</MenuP>
                </MenuDiv>
            </MenuCons>
        </>
    )
}