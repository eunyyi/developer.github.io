import styled from "@emotion/styled"

const ProfileCons = styled.div`
    margin-top: 115px;
`;
const ProfileImg = styled.div`
    width: 267px;
    height: 305px;
    border-radius:50%;
    background: url('/assets/me.png') no-repeat center / contain;
    margin: 0 auto;
    margin-bottom:40px;
`;
const ProfileTxt = styled.div`
    font-size: 20px;
    text-align: center;
    line-height: 160%;
`;
const ProfileTxtCons = styled.div`

`;

export const Profile = () => {
    let cons = [
        {
            id: 1,
            text1: '이은이',
            text2: '',
            text3: '',
            image: 'user'
        },
        {
            id: 2,
            text1: '1999.03.01',
            text2: '',
            text3: '',
            image: 'birth'
        },
        {
            id: 3,
            text1: '경기도 안양시',
            text2: '',
            text3: '',
            image: 'address'
        },
        {
            id: 4,
            text1: 'https://velog.io/@dldmsdl99/posts',
            text2: '',
            text3: '',
            image: 'write'
        },
        {
            id: 5,
            text1: '총신대학교 아동학과 졸업',
            text2: '하이미디어안양 퍼블리셔 과정 수료',
            text3: '코리아IT 아카데미 프론트엔드 과정 수료',
            image: 'edu'
        },
        {
            id: 6,
            text1: '총신대학교 아동학과 졸업',
            text2: '웹디자인 기능사 자격증 취득',
            text3: '정보처리기사 자격증 취득예정(실기)',
            image: 'cer'
        },

    ]
    return(
        <div className="row" style={{width:'1037px', margin: '0 auto', justifyContent: 'space-between'}}>
            <ProfileCons>
                <ProfileImg></ProfileImg>
                <ProfileTxt>안녕하세요<br/>
                주니어 Frontend 개발자 이은이입니다:) <br/> <br/>
                대학교 강의에서 처음 코딩을 접한 후 <br/>
                여러가지 방법으로 코드를 작성할 수 있다는 점이 매력적이었고 <br/>
                결과를 통해 얻는 즐거움과 성취감이 크게 느껴져서 
                개발자의 꿈을 갖게 되었습니다. <br/>
                매일 발전하는 개발자가 되겠습니다 !</ProfileTxt>
            </ProfileCons>
            <ProfileTxtCons>
                <div style={{marginTop:'150px', marginLeft:'-255px'}}>
                    {cons.map((el)=><div key={el.id} className="row" style={{marginBottom:'30px'}}>
                    <img width={25} height={25} src={require('../images/icons/' + el.image + '.png')} style={{marginRight:'30px', marginTop:'-3px'}}/>
                    <div>
                        <p>{el.text1}</p>
                        <p style={{margin:'14px 0'}}>{el.text2}</p>
                        <p>{el.text3}</p>
                    </div>
                    </div>)}
                </div>
            </ProfileTxtCons>
        </div>
    )
}