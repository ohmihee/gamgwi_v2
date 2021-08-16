import useInput from '../../hooks/useInput'
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded'
import { useDispatch, useSelector } from 'react-redux'
import { PostInsert_REQUEST } from '../../reducers/post'
import { useEffect, useState } from 'react'
import TodayWeather from './TodayWeather'
import Link from 'next/link'
import { WriteWrap, InputTitle, InputContent, ButtonBox } from './TextAreaCss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const TextArea = () => {
    const dispatch = useDispatch()
    const userinfo = useSelector(state=>state.user.user_info)
    console.log(userinfo.userIdx)
    console.log(userinfo.userpw)
    console.log(userinfo.userid)
    
    /* 글 작성 */
    const writeTitle = useInput('')
    const writeContent = useInput('')

    /* 오늘 날씨 */
    const [todayWeather, setTodayWeather] = useState('')
    const weatherChange = (e) => {
        console.log(e.target.value);
        setTodayWeather(e.target.value)
    }

    const hadleSubmit = (e) => {
        e.preventDefault()

        const data = {
            todayWeather: todayWeather,
            writeTitle: writeTitle.value,
            writeContent: writeContent.value,
            useridx:userinfo.userIdx,
            userpw:userinfo.userpw,
            userid:userinfo.userid
        }

        dispatch(PostInsert_REQUEST(data))
    }

    return (
        <>
            <form onSubmit={hadleSubmit}>
                <TodayWeather weatherChange={weatherChange} />
                <WriteWrap>
                    <div>
                        <InputTitle type="text"  {...writeTitle} />
                        <InputContent  {...writeContent} />
                    </div>

                    <ButtonBox>
                        <Link href="/board/list">
                            <a><ArrowBackIcon /></a>
                        </Link>
                        <button type='submit'>
                            <DoneOutlineRoundedIcon />
                        </button>
                    </ButtonBox>
                </WriteWrap>
            </form>
        </>
    )
}

export default TextArea
