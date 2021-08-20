import Styled from 'styled-components'

export const WriteWrap = Styled.div`
width : 100%;
height : 70vh;
margin : 0;

& > div > label {
    display: block;
    margin-bottom: 10px;
}
`

export const InputTitle = Styled.input`
width : 100%;
height : 35px;
border : 1px solid lightgray;
border-radius: 5px;
font-size : 20px;
font-family: 'IM_Hyemin-Bold';

:focus {
    outline:none;
}
@media only screen and (min-width:768px){
    width: 99.5%;
}

`
export const InputContent = Styled.textarea`
width: 100%;
/* height: 320px; */
height: 170px;
margin: 30px 0;
border : 1px solid lightgray;
border-radius: 5px;
font-size : 20px;
font-family: 'IM_Hyemin-Bold';

:focus {
    outline:none;
}

@media only screen and (min-width:768px){
    width: 99.5%;
    height : 340px;
}
`

export const ButtonBox = Styled.div`
text-align: right;
padding-top: 40px;
box-sizing: border-box;

& > button,
& > a
{
    width: 70px;
    height: 32px;
    background: black;
    border: none;
    color: white;
    border-radius: 12px;
    padding-top: 3px;
    box-sizing: border-box;
    cursor : pointer;
}
& > a{
    display : inline-block;
    text-align: center;
}

& > button{
    margin-left : 10px;
}

& > button > svg {
    font-size : 25px;
}
& > a > svg {
    font-size : 25px;
}

@media only screen and (min-width:768px){
    height : auto;
    padding: 100px 0 0 0;


    & > button,
    & > a{
        width: 100px;
        height: 40px;
        margin-left: 10px;
        line-height: 20px;
    }

    & > button > svg {
        font-size: 33px;
    }
    & > a > svg {
        font-size : 33px;
    }
}


`