// api 호출 파일

import axios from "axios";

export const localRegister = ({id, email, password}) => axios.post('/auth/register/', {
    headers:{
        "Content-Type": "application/json",
    },
    body:JSON.stringify({
        'username':id,
        'email':email,
        'password':password
    })
    }
);
export const localLogin = ({id, password}) => axios.post('/auth/login', {
    params:{
        'id':id,
        'password':password
    }
});

export const logout = () => axios.post('/auth/logout');