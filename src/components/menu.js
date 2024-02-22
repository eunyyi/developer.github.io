import styled from "@emotion/styled";
import Sky from "../images/sky.png";

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
export const Menu = () => {
    return(
        <>
            <MenuCons className="row">
                <MenuDiv>
                    <img src={Sky}/>
                    <MenuP className="font2">About</MenuP>
                </MenuDiv>
                <MenuDiv>
                    <img src={Sky}/>
                    <MenuP className="font2" style={{color:'#FFFDF8'}}>Skill</MenuP>
                </MenuDiv>
                <MenuDiv>
                    <img src={Sky}/>
                    <MenuP className="font2" style={{color:'#FFFDF8'}}>Project</MenuP>
                </MenuDiv>
                <MenuDiv>
                    <img src={Sky}/>
                    <MenuP className="font2" style={{color:'#FFFDF8'}}>Contact</MenuP>
                </MenuDiv>
            </MenuCons>
        </>
    )
}