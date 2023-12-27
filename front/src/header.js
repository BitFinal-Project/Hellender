//import React, { useState, useEffect } from 'react';
//import { useNavigate, useLocation } from 'react-router-dom';
//import { Link } from 'react-router-dom';
//import photo from'./default_profile.png';
//import axios from 'axios';
////import './login.css';
//
//function Header() {
//    const navigate = useNavigate();
//    const location = useLocation();
//    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
//    const [isProfileVisible, setIsProfileVisible] = useState(true); // 프필 박스가 보이는 게 기본
//    const [isMobileNavIconClose, setIsMobileNavIconClose] = useState(false);
//    const data = JSON.parse(localStorage.getItem('data')); // localStorage에서 data 값을 문자열로 가져와서 객체로 변환
//    const url = `/view/${data}`; // 마이페이지
//    const urls = `/cal/${data}`; // 캘린더
//    const urlss = `/members/${data}`; // 캘린더 값 가져오기
//    const [isFirstVisit, setIsFirstVisit] = useState(true); // 처음 마이페이지를 눌렀는지 여부
//    const  [member, setMember] = useState({profile_image:'', nickname_m: ''});
//
//    const toggleMobileNav = () => {
//        setIsMobileNavVisible(!isMobileNavVisible);
//        setIsMobileNavIconClose(!isMobileNavIconClose);
//
//        if (isProfileVisible) {
//            setIsProfileVisible(false);
//        }
//    };
//
//    const toggleProfileBox = () => {
//        setIsProfileVisible(!isProfileVisible);
//    };
//
//    const HomeButton = () => {
//        const currentPath = location.pathname;
//
//        if (currentPath === '/main/${data}' || currentPath === '/myPage/${data}') {
//            navigate('/main/${data}');
//        } else {
//            alert("페이지를 찾을 수 없습니다.");
//        }
//    };
//
//    useEffect(() => {
//        // 화면 크기가 변경될 때 발생하는 이벤트
//        const handleResize = () => {
//            // 화면 크기에 따라 로직 처리
//            if (window.innerWidth <= 1279) {
//                setIsMobileNavVisible(true);
//                setIsProfileVisible(false); // 프필 박스 숨김
//            } else {
//                setIsMobileNavVisible(false);
//                setIsProfileVisible(true);
//            }
//        };
//
//        // 처음 한 번 호출
//        handleResize();
//
//        // 이벤트 등록
//        window.addEventListener('resize', handleResize);
//
//        // 컴포넌트가 안 쓰일 때 이벤트 지움
//        return () => {
//            window.removeEventListener('resize', handleResize);
//        };
//    }, []);
//
//    const handleMyPageClick = () => {
//    // 처음 마이페이지를 누름
//    if (isFirstVisit) {
//        navigate(`/edit/${data}`); // myPageone
//    } else {
//        navigate('/view/${data}'); // myPagetwo
//    }
//    // 이후는 isFirstVisit 상태를 false로 업데이트해서 막기
//    setIsFirstVisit(false);
//    };
//
//
//    useEffect(() => {
//        axios.get(urlss)
//            .then((response) => {
//                setMember(response.data);
//            })
//            .catch((error) => {
//                console.log("Error while geting book:", error);
//            })
//    }, []);
//
//
//    return (
//        <header className="header2">
//            <link
//                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
//                rel="stylesheet"
//                integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
//                crossOrigin="anonymous"
//            ></link>
//            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css" />
//
//            <script
//                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
//                integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
//                crossOrigin="anonymous"
//            ></script>
//
//            <div className="header-line2 d-flex justify-content-between align-items-center">
//                <Link to="/main/{data}" className="logo d-flex align-items-center">
//                    <h1 className="header-title">HELLENDER</h1>
//                </Link>
//
//                <i className={`mobile-nav-toggle ${isMobileNavVisible ? 'mobile-nav-hide' : 'mobile-nav-show'} bi ${isMobileNavIconClose ? 'bi-x' : 'bi-list-ul'} fs-1`}
//                    onClick={() => {
//                        toggleMobileNav();
//                        toggleProfileBox();
//                    }}
//                ></i>
//
//                {/* 화면이 클 때 표시되는 마이페이지와 캘린더 버튼 */}
//                <div className={`navbar ml-auto ${isMobileNavVisible ? 'mobile-nav-hide' : ''}`}>
//                    <Link
//                        to='/myPage/${data}' style={{ textDecoration: "none" }}
//                        className={location.pathname === '/myPage/${data}' ? 'active' : ''}
//                        onClick={handleMyPageClick}>
//                        <span className="myPage-text fs-4 fw-bold">마이페이지</span>
//                    </Link>
//                    <Link
//                        to="/calendar" style={{ textDecoration: "none" }}
//                        className={location.pathname === '/calendar' ? 'active' : ''}>
//                        <span className="calendarPage-text fs-4 fw-bold mr-3">캘린더</span>
//                    </Link>
//                </div>
//
//                {/* 프로필 팝업 */}
//                {isProfileVisible && (
//                    <div className="profile-box align-items-center">
//                        <div className="prf-img"><img src={member.profile_image} width={120} height={150}
//                            alt="profile_image" className="main-logo"/></div>
//                        <span className="prf-name">&nbsp;&nbsp;&nbsp;{member.nickname_m} 님</span>
//                        <button className="myPage-btn"
//                            onClick={() => { window.location.href = url; }}>
//                            <span
//                                className="myPage-text text-start fs-5 mr-3 text-secondary">
//                                마이페이지</span>
//                        </button>
//                        <button className="calendar-btn"
//                            onClick={() => { window.location.href = urls; }}>
//                            <span
//                                className="calendarPage-text text-start fs-5 mr-3 text-secondary">
//                                캘린더</span>
//                        </button>
//                        <span className="logout-btn">로그아웃</span>
//                        <i class="bi bi-house-door-fill"></i>
//                    </div>
//                )}
//            </div>
//        </header>
//    );
//}
//
//export default Header;





import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import photo from'./default_profile.png';
import axios from 'axios';
//import './login.css';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
    const [isMobileNavIconClose, setIsMobileNavIconClose] = useState(false);
    const data = JSON.parse(localStorage.getItem('data')); // localStorage에서 data 값을 문자열로 가져와서 객체로 변환
    const url = `/view/${data}`; // 마이페이지
    const urls = `/cal/${data}`; // 캘린더
    const urlss = `/members/${data}`; // 캘린더 값 가져오기
    const  [member, setMember] = useState({birthday:'', profile_image:'', nickname_m: ''});

    const toggleMobileNav = () => {
        setIsMobileNavVisible(!isMobileNavVisible);
        setIsMobileNavIconClose(!isMobileNavIconClose);
    };

    const HomeButton = () => {
        const currentPath = location.pathname;

        if (currentPath === '/main/${data}' || currentPath === '/myPage/${data}') {
            navigate('/main/${data}');
        } else {
            alert("페이지를 찾을 수 없습니다.");
        }
    };

    useEffect(() => {
        // 화면 크기가 변경될 때 발생하는 이벤트
        const handleResize = () => {
            // 화면 크기에 따라 로직 처리
            if (window.innerWidth <= 1279) {
                setIsMobileNavVisible(true);
            } else {
                setIsMobileNavVisible(false);
            }
        };

        // 처음 한 번 호출
        handleResize();

        // 이벤트 등록
        window.addEventListener('resize', handleResize);

        // 컴포넌트가 안 쓰일 때 이벤트 지움
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    useEffect(() => {
        axios.get(urlss)
            .then((response) => {
                setMember(response.data);
            })
            .catch((error) => {
                console.log("Error while geting book:", error);
            })
    }, []);

    // localStorage에 birthday 값이 없으면 추가
    if (!localStorage.getItem('birthday')) {
        localStorage.setItem('birthday', member.birthday);
    }







    return (
        <header className="header2">
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
                crossOrigin="anonymous"
            ></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css" />

            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
                crossOrigin="anonymous"
            ></script>

            <div className="header-line2 d-flex justify-content-between align-items-center">
                <Link to="/main/{data}" className="logo d-flex align-items-center">
                    <h1 className="header-title">HELLENDER</h1>
                </Link>

                <i className={`mobile-nav-toggle ${isMobileNavVisible ? 'mobile-nav-hide' : 'mobile-nav-show'} bi ${isMobileNavIconClose ? 'bi-x' : 'bi-list-ul'} fs-1`}
                    onClick={() => {
                        toggleMobileNav();
                    }}
                ></i>

                {/* 화면이 클 때 표시되는 마이페이지와 캘린더 버튼 */}
                <div className={`navbar ml-auto ${isMobileNavVisible ? 'mobile-nav-hide' : ''}`}>
                    <Link
                        to={localStorage.getItem('birthday') ? '/view/1' : '/mypage/1'} style={{ textDecoration: "none" }}
                        className={location.pathname === '/myPage/${data}' ? 'active' : ''}>
                        <span className="myPage-text fs-4 fw-bold">마이페이지</span>
                    </Link>


                    <Link
                        to="/calendar" style={{ textDecoration: "none" }}
                        className={location.pathname === '/calendar' ? 'active' : ''}>
                        <span className="calendarPage-text fs-4 fw-bold mr-3">캘린더</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;

