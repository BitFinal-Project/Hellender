import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

const KakaoRedirectPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem('data')); // localStorage에서 data 값을 문자열로 가져와서 객체로 변환
    const urls = `/members/${data}`; // 객체의 id 속성을 url 경로에 넣음
    const url = `/main/${data}`; // 객체의 id 속성을 url 경로에 넣음

    const handleOAuthKakao = async (code) => {
        try {
            // 카카오로부터 받아온 code를 서버에 전달하여 카카오로 회원가입 & 로그인한다
            const response = await axios.get(`http://localhost:8080/oauth/login/kakao?code=${code}`);
            const data = response.data; // 응답 데이터
            //alert("로그인 성공: " + data)
            localStorage.setItem('data', JSON.stringify(data));
            //navigate("/main");
            // if (data.oauth_server_id) {
            //     alert("로그인 성공: " + data)
            //     navigate("/success");
            // }
            // // db에 oauth_server_id가 없는 경우
            // else {
            //     alert("회원가입이 필요합니다.")
            //     navigate("/join");
            // }
        } catch (error) {
            navigate(`/main/${data}`);
        }
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get('code');  // 카카오는 Redirect 시키면서 code를 쿼리 스트링으로 준다.
        if (code) {
            //alert("CODE = " + code)
            handleOAuthKakao(code);
        }
    }, [location]);

    return (
        <div>
            <div>Processing...</div>
        </div>
    );
};

export default KakaoRedirectPage;