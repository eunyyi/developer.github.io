import styled from "@emotion/styled";
import SkyWh from "../images/icons/skyWh.png";

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
export const Menu5 = () => {
    return(
        <>
            <MenuCons className="row">
                <MenuDiv>
                    <img src={SkyWh}/>
                    <MenuP className="font2" style={{color:'#E7B5BD'}}>About</MenuP>
                </MenuDiv>
                <MenuDiv>
                    <img src={SkyWh}/>
                    <MenuP className="font2" style={{color:'#E7B5BD'}}>Skill</MenuP>
                </MenuDiv>
                <MenuDiv>
                    <img src={SkyWh}/>
                    <MenuP className="font2">Project</MenuP>
                </MenuDiv>
                <MenuDiv>
                    <img src={SkyWh}/>
                    <MenuP className="font2" style={{color:'#E7B5BD'}}>Contact</MenuP>
                </MenuDiv>
            </MenuCons>
        </>
    )
}