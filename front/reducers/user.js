const initalState = {
    loading: false,
    IsLogin: false,
}

const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR"
// const USER_LOGOUT = "USER_LOGOUT"

const USER_JOIN_REQUEST = "USER_JOIN_REQUEST"
const USER_JOIN_SUCCESS = "USER_JOIN_SUCCESS"
const USER_JOIN_ERROR = "USER_JOIN_ERROR"
export const UserLogin_REQUEST = data => {
    console.log("reduser+++++++", data);
    return {
        type: USER_LOGIN_REQUEST,
        data,
    }
}

export const UserJoin_REQUEST = data => {
    console.log("join reduser++++++",data);
    return {
        type: USER_JOIN_REQUEST,
        data
    }
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            console.log('로그인 성공1');
            return {
                ...state,
                loadding: true,
            }


        case USER_LOGIN_SUCCESS:
            console.log('로그인 성공2');
            return {
                ...state,
                IsLogin: true,
                loadding: false,
            }
        case USER_LOGIN_ERROR:
            console.log('로그인 실패');
            return {
                ...state,
                loadding: false,
            }

        case USER_JOIN_REQUEST:
            console.log('가입 성공');
            return {
                ...state,
                loadding: true,
            }
        case USER_JOIN_SUCCESS:
            console.log('완전 가입 성공');
            return {
                ...state,
                loadding: false,
            }

        case USER_JOIN_ERROR:
            console.log('가입 실패');
            return {
                ...state,
                loadding: false,
            }
        // case USER_LOGOUT:
        //     return {
        //         ...state,
        //         IsLogin:false,
        //     }
        default:
            return state
    }
}

export default reducer