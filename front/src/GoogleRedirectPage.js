//import React, {useEffect} from 'react';
//import {useLocation, useNavigate} from 'react-router-dom';
//import axios from 'axios';
//
//const GoogleRedirectPage = () => {
//    const location = useLocation();
//    const navigate = useNavigate();
//
//    const handleOAuthGoogle = async (code) => {
//        try {
//            // 구글로부터 받아온 code를 서버에 전달하여 구글로 회원가입 & 로그인한다
//            const response = await axios.get(`http://localhost:8080/oauth/login/google?code=${code}`);
//            const data = response.data; // 응답 데이터
//            alert("로그인 성공: " + data)
//            navigate("/success");
//        } catch (error) {
//            navigate("/fail");
//        }
//    };
//
//    useEffect(() => {
//        const searchParams = new URLSearchParams(location.search);
//        const code = searchParams.get('code');  // 구글은 Redirect 시키면서 code를 쿼리 스트링으로 준다.
//        if (code) {
//            alert("CODE = " + code)
//            handleOAuthGoogle(code);
//        }
//    }, [location]);
//
//    return (
//        <div>
//            <div>Processing...</div>
//        </div>
//    );
//};
//
//export default GoogleRedirectPage;