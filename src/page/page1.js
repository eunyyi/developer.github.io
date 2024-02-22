import styled from '@emotion/styled';
import Profile from '../../src/images/profile.png';


const Bg = styled.div`
    width: 100%;
    height: 100vh;
    background-color:#b1cbd6;
    position:relative;
`;
const Content = styled.div`
    width: 1400px;
    height: 700px;
    align-items:center;
    background-color:#fff;
    border-radius:30px;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;
const ProfileImg = styled.img`
    margin-left:240px;
    margin-right:110px;
`;
const ProfileTxt = styled.div`
    width: 422px;
    height: 225px;
    font-size: 100px;
    color:#1a1a1a;
    text-align:center;
`;
export const Page1 = () => {
    return(
        <Bg>
            <Content className='row'>
                <ProfileImg src={Profile}/>
                <ProfileTxt className='font1'>Eunyi Portfolio</ProfileTxt>
            </Content>
        </Bg>
    )
};  