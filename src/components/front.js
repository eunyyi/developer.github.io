import styled from "@emotion/styled";
import Img1 from '../images/icons/html.png';
import Img2 from '../images/icons/css.png';
import Img3 from '../images/icons/js.png';
import Img4 from '../images/icons/react.png';
import Img5 from '../images/icons/ts.png';
import Img6 from '../images/icons/styleComponent.png';
import Img7 from '../images/icons/sass.png';


const FrontDiv = styled.div`
    width: 1375px;
    height: 225px;
    border-radius:20px;
    background-color:#fff;
    margin: 0 auto;
    margin-top:70px;
    position:relative;
    align-items:center;
`;
export const Title = styled.p`
    width: 451px;
    height: 80px;
    border-radius: 20px;
    text-align:center;
    line-height:85px;
    border: 3px solid #B1CBD6;
    background-color: #fff;
    box-shadow: 4px 4px 4px 0 rgba(0,0,0,0.25);
    position: absolute;
    top:-42px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
`;
export const ImgCons = styled.div`
    width: 964px;
    height: 112px;
    align-items:center;
    justify-content:space-between;
    position:absolute;
    top:80px;
    left:50%;
    transform: translateX(-50%);
`;
export const Frontend = () => {
    return(
        <FrontDiv>
            <Title className="font3">Frontend</Title>
            <ImgCons className="row">
                <img src={Img1} style={{width:'100px', height:'100px'}}/>
                <img src={Img2} style={{width:'100px', height:'100px'}}/>
                <img src={Img3} style={{width:'112px', height:'112px'}}/>
                <img src={Img4} style={{width:'165px', height:'58px'}}/>
                <img src={Img5} style={{width:'80px', height:'80px'}}/>
                <img src={Img6} style={{width:'80px', height:'80px'}}/>
                <img src={Img7} style={{width:'105px', height:'79px'}}/>
            </ImgCons>
        </FrontDiv>
    )
}