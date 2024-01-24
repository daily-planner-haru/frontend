import './App.css';
import { useState } from 'react';
import KakaoLogin from 'react-kakao-login';

const kakaoLogin = ()=>
{
    const Rest_api_key= process.env.REACT_APP_REST_API//REST API KEY
    const redirect_uri = process.env.REACT_APP_REDIRECT_URI //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <>
    <button onClick={handleLogin}>카카오 로그인</button>
    </>
    )
}
export default kakaoLogin