//import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
// import Footer from './footer';
import Header from './header';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function MainPage() {
    const [resultFeedback, setResultFeedback] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/feedback-list')
            .then(response => {
                setResultFeedback(response.data);
            })
            .catch(error => {
                console.error('데이터 error 발생', error);
            });
    }, []);

    return (
        <div className="mainPage">
            <head>
            </head>
            <body>
            <Header/>
            <main>
                {resultFeedback && (
                    <div className='bodyWrap'>
                        <div className="container">
                            <div className="col-md-12">
                                <div className="recom-PT-title-box text-center">
                                    <span className="recom-PT-title-text">추천운동</span>
                                </div>
                                <div className="recom-PT-box text-center">
                                    <div className="PT-type1">
                                        <span className="PT-type1-text">{resultFeedback.rec_ac1}</span>
                                    </div>
                                    <div className="PT-type2">
                                        <span className="PT-type2-text">{resultFeedback.rec_ac2}</span>
                                    </div>
                                    <div className="PT-type3">
                                        <span className="PT-type3-text">{resultFeedback.rec_ac3}</span>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <span className="recom-Food-title text-center">식단표</span>
                                    <div className="text-center align-items-center">
                                        <div className='row justify-content-center'>
                                            <div className='col-md-4 col-lg-3'>
                                                <div className="recom-Food-out-box1">
                                                    <span className="Food-morning">{resultFeedback.rec_fd1}</span>
                                                    <div className="recom-Food-in-box1">
                                                        <img src="" alt=""></img>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-md-4 col-lg-3'>
                                                <div className="recom-Food-out-box2">
                                                    <span className="Food-afternoon">{resultFeedback.rec_fd2}</span>
                                                    <div className="recom-Food-in-box2">
                                                        <img src="" alt=""></img>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-md-4 col-lg-3'>
                                                <div className="recom-Food-out-box3">
                                                    <span className="Food-evening">{resultFeedback.rec_fd3}</span>
                                                    <div className="recom-Food-in-box3">
                                                        <img src="" alt=""></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='text-center'>
                                        <span className="BMI-title recom-Food-title text-center">
                                            한 주 간 BMI 측정지수
                                        </span>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div className="BMI-graphBox">
                                            <span className="BMI-text position-absolute start-0 fs-5">BMI <br></br> (%)</span>
                                            <div className="BMI-graph-section"></div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <span className="stress-title recom-Food-title text-center">스트레스 해소 방법</span>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div className="stress-box">


                                            <div className="stress-title-box">
                                                <div className="middle-line"></div>
                                                <span className="stress-food fs-3">{resultFeedback.rec_ta1}</span>

                                                <span className="stress-action fs-3">{resultFeedback.rec_ta2}</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* <div className="graph-img"></div> */}
                            </div>
                        </div>
                    </div>
                )}
            </main>
            </body>
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

