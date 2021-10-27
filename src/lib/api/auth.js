// api 호출 파일

import axios from "axios";

export const localRegister = ({id, email, password}) => axios.post('/auth/register', null);
export const localLogin = ({id, password}) => axios.post('/auth/login', null);

export const logout = () => axios.post('/auth/logout');