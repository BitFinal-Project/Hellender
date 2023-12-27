import React from 'react';

const LoginPage = () => {
    const handleKakaoLoginClick = () => {
        window.location.href = 'http://localhost:8080/oauth/kakao';
    };

    const handleGoogleLoginClick = () => {
        window.location.href = 'http://localhost:8080/oauth/google'; // Replace with your Google login URL
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                <button
                    onClick={handleKakaoLoginClick}
                    style={{ padding: '10px 20px', fontSize: '18px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}
                >
                    카카오톡 로그인
                </button>
                <button
                    onClick={handleGoogleLoginClick}
                    style={{ padding: '10px 20px', fontSize: '18px', borderRadius: '5px', cursor: 'pointer' }}
                >
                    구글 로그인
                </button>
            </div>
        </div>
    );
};

export default LoginPage;