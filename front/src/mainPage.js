import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
// import Footer from './footer';
import Header from './header';
import mainImage from './mainImage.jpg';
import wbb from './week-bmi-btn.png';
import rfb from './recom-food-btn.png';
import sb from './stress-btn.png';
import rpb from './recom-pt-btn.png';
import axios from 'axios';

function MainPage() {

    const [isProfileVisible, setIsProfileVisible] = useState(true); // 프필 박스가 보이는 게 기본
    const [isYouMember, setIsYouMember] = useState(false);
    const [isBirthday, setIsBirthday] = useState();

    const  [member, setMember] = useState({profile_image:'', nickname_m: ''});
    const data = JSON.parse(localStorage.getItem('data')); // localStorage에서 data 값을 문자열로 가져와서 객체로 변환
    const urls = `/members/${data}`; // 객체의 id 속성을 url 경로에 넣음
    const url = `/view/${data}`; // 객체의 id 속성을 url 경로에 넣음

    const COOKIE_KEY = window.LOGIN_KEY;
    const logoutURL = window.LOGIN_SESSION_KEY_URL + '/logout?redirect_uri=${window.location.origin}';
    const [, , removeCookie] = useCookies([COOKIE_KEY]);
    const loginPageURL = '/';

    const handleLogout = () => {
        removeCookie(COOKIE_KEY, {path: '/'});
        window.location.href = logoutURL;
        window.location.href = loginPageURL;
    }

    const [resultFeedback,setResultFeedback]=useState({});

    useEffect(() => {
        axios.get('/members')
            .then((response) => {
                setIsBirthday(response.data);
            })
            .catch((error) => {
                console.log("Error while fetching books:", error);
            });
        axios.get('http://localhost:8000/api/feedback-list')
            .then(response => {
                setResultFeedback(response.data);
            })
            .catch((error)=>{
                console.log("Error ",error);
            })
    }, []);

    useEffect(() => {
        setIsYouMember(!!isBirthday); // isBirthday가 trut이면 true, false면 false
    }, [isBirthday]);

        useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth <= 1279) {
                    setIsProfileVisible(false); // 프필 박스 숨김
                } else {
                    setIsProfileVisible(true);
                }
            };

            handleResize();

            window.addEventListener('resize', handleResize);

            // 컴포넌트가 안 쓰일 때 이벤트 지움
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);



    const scrollToWeekBMI = () => {
        const weekBMISection = document.querySelector('.hidden-line');
        if (weekBMISection) {
            weekBMISection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToRecomFood = () => {
        const recomFoodSection = document.querySelector('.PT-type3-text');
        if (recomFoodSection) {
            recomFoodSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToStress = () => {
        const stressSection = document.querySelector('.stress-release');
        if (stressSection) {
            stressSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToRecomPt = () => {
        const recomPTSection = document.querySelector('.phrase-line');
        if (recomPTSection) {
            recomPTSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className="mainPage">
                    <Header/>
                        <div className='bodyWrap' style={{ backgroundImage: `url(${mainImage})` }}>
                            <button className="week-bmi-btn" style={{ backgroundImage: `url(${wbb})` }} onClick={scrollToWeekBMI}></button>
                            <button className="recom-food-btn" style={{ backgroundImage: `url(${rfb})` }} onClick={scrollToRecomFood}></button>
                            <button className="stress-btn" style={{ backgroundImage: `url(${sb})` }} onClick={scrollToStress}></button>
                            <button className="recom-pt-btn" style={{ backgroundImage: `url(${rpb})` }} onClick={scrollToRecomPt}></button>
                        </div>

                        <div className="container">
                            <div class="phrase-container"><span class="phrase">All thing are difficult before they are easy
                                모든일이 그렇다 쉽기 전에는 어렵다</span>
                                <div class="phrase-line" />
                            </div>
                            <div className="col-md-12">
                                <div className="recom-pt">
                                    <div className="recom-PT-title-box text-center">
                                        <span className="recom-PT-title-text">추천운동</span>
                                    </div>
                                    <div className="recom-PT-box text-center">
                                        <div className="PT-type1-image"></div>
                                        <div className='PT-type1-textbox'>
                                            <span className="PT-type1-text">{resultFeedback.rec_ac1}</span>
                                        </div>
                                        <div className="PT-type2-image"></div>
                                        <div className='PT-type2-textbox'>
                                            <span className="PT-type2-text">{resultFeedback.rec_ac2}</span>
                                        </div>
                                        <div className="PT-type3-image"></div>
                                        <div className='PT-type3-textbox'>
                                            <span className="PT-type3-text">{resultFeedback.rec_ac3}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="recom-food">
                                    <span className="recom-Food-title text-center">식단표</span>
                                    <div className="text-center align-items-center">
                                        <div className='row justify-content-center'>
                                            <div className='col-md-4 col-lg-3'>
                                                <div className="recom-Food-out-box1">
                                                    <span className="food-time">아침</span>
                                                    <div className="recom-Food-in-box">{resultFeedback.rec_fd1}</div>
                                                </div>
                                            </div>
                                            <div className='col-md-4 col-lg-3'>
                                                <div className="recom-Food-out-box2">
                                                    <span className="food-time">점심</span>
                                                    <div className="recom-Food-in-box">{resultFeedback.rec_fd2}</div>
                                                </div>
                                            </div>
                                            <div className='col-md-4 col-lg-3'>
                                                <div className="recom-Food-out-box3">
                                                    <span className="food-time">저녁</span>
                                                    <div className="recom-Food-in-box">{resultFeedback.rec_fd3}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden-line"/>
                                <div className='week-bmi'>
                                    <span className="BMI-title recom-Food-title text-center">
                                        한 주 간 BMI 측정지수
                                    </span>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div className="BMI-graphBox">
                                            <span className="BMI-text position-absolute start-0 fs-5">BMI <br></br> (%)</span>
                                            <div className="BMI-graph-section">
                                                <img src="/bmi_graph_1.png" alt="그래프 이미지"
                                                className="BMI-graph-section" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='stress-release'>
                                    <span className="stress-title recom-Food-title text-center">스트레스 해소 방법</span>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div class="stress-title-box1"><span class="stress-food fs-3">음식</span></div>
                                        <div class="stress-title-box2"><span class="stress-action fs-3">활동</span></div>
                                        <div class="stress-box1">{resultFeedback.rec_ta2}</div>
                                        <div class="stress-box2">{resultFeedback.rec_ta1}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                <div class="m-footer">
                    <div class="footer-line">
                        <span class="footer-title">Withus</span>
                        <span class="footer-info">Contact Us 33 Seocho-daero 74-gilSeocho-gu,Seoul,
                            Korea Phone: +82 10 5589 5488 Email: bit@example.com</span>
                    </div>
                </div>
        </div>
    );
}

export default MainPage;