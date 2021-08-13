import Head from 'next/head'
import WebLayout from "../../component/layout/webLayout"
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FaceIcon from '@material-ui/icons/Face';
import Styled from 'styled-components'
import { useSelector } from "react-redux"

const Info = () => {
    const userInfo = useSelector(state => state.user.user_info)
    console.log(userInfo);
    return (
        <>
            <Head>
                <title>Gamgwi | 회원정보</title>
            </Head>
            <WebLayout>
                <AccountCircleWrap>
                    <FaceIcon />
                </AccountCircleWrap>
                <UserInfoWrap>
                    <div>
                        Hello, <span> {userInfo.userid} </span>
                    </div>
                    <div>
                        <p>책을 읽다가,</p>
                        <p>혹은 우연히 발견한 문구를</p>
                        <p>기록해보세요.</p>
                    </div>
                </UserInfoWrap>
            </WebLayout>
        </>
    )
}

export default Info

const AccountCircleWrap = Styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    padding: 10% 0;
    box-sizing: border-box;

    & > svg {
        width: 20vw;
        height : auto;
    }

    @media only screen and (min-width:768px){
        & > svg {
            width: 15vw;
        }
    }
`
const UserInfoWrap = Styled.div`
    width : 100%;
    height : auto;

    & > div:nth-child(1) {
        font-size: 35px;
        padding: 5%;
        height: 120px;
        text-align: center;
    }

    & > div:nth-child(1) > span {
        color : #45c9ce;
    }

    & > div:nth-child(2){
        padding: 0 16%;
        text-align: center;
        font-size: 17px;
        color: #666;
    }
    & > div:nth-child(2) > p {
        padding : 10px 0;
    }
`


