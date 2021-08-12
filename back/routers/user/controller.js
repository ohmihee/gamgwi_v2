const { User } = require('../../models')
const chash = require('../../chash')
const token = require('../../jwt')

// 로컬로그인 대신에 구글이랑 카카오 로그인 하기로 했는데 여기에 그러면 우리가 받는 건 오직 nickname?==============================
// 고민유형 받는 건?==========================================


let login = (req, res) => {
    res.send('login 입니다')
}

let login_success = async (req, res) => {
    let userid = req.body.userid
    let userpw = req.body.userpw
    console.log(userid, userpw);
    let hash = chash(userpw);
    let ctoken = token(userpw, userid);
    let login_info = await User.findOne({
        where: { userid, userpw }
    });
    let result = {}

    if (login_info !== undefined) {
        result = {
            result: 'OK',
            msg: '글 작성 성공'
        }
        let test = { login_info, ctoken, result }
        //res.clearCookie('SeongjinToken');
        res.cookie('AccessToken', ctoken, { httpOnly: true, secure: true, })
        res.json(test)

    } else {
        result = {
            result: 'Fail',
            msg: '글 작성 실패'
        }
        let test = { result }
        res.json(test)
    }

    // try{
    //     result = {
    //         result : 'OK',
    //         msg : '글 작성 성공'
    //     }
    //     let test = {login_info,ctoken,result}
    // res.json(test)

    // }catch{
    //     result = {
    //         result: 'Fail',
    //         msg: '글 작성 실패'
    //     }
    //     res.json(result)
    // }


    console.log(req.cookies);
}

let join_success = async (req, res) => {
    let userid = req.body.userid
    let userpw = req.body.userpw
    console.log(userid, userpw);
    let result = await User.create({
        userid, userpw
    })
    res.json(result)
}

let join = (req, res) => {
    res.send('회원가입 입력하는 란')
}

let info = async (req, res) => {
    // let {idx} = 
    // let res = await User.findAll({where:{id:idx}})
    res.send('info')
}

let info_modify = (req, res) => {
    res.send('info_modify')
}

module.exports = {
    login,
    join,
    info,
    info_modify,
    login_success,
    join_success,
}