import React, {useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import feedbackData from './mainPage';
import Header from './header';
import './login.css';
import { deleteBook } from './api';  // delete 공통 함수 : api.js
import photo from'./default_profile.png';
import axios from 'axios';

export default function MemberEdit(props)  {
    const [selectedDate, setSelectedDate] = useState(null);

    const [exercise, setExercise] = useState('');
    const [food, setFood] = useState('');
    const [feel, setFeel] = useState('');
    const [weight, setWeight] = useState('');
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();
    const [isFeedbackPopupVisible, setFeedbackPopupVisibility] = useState(false);

    const data = JSON.parse(localStorage.getItem('data')); // localStorage에서 data 값을 문자열로 가져와서 객체로 변환
    const url = `/members/${data}`; // 객체의 id 속성을 url 경로에 넣음

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    }

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                let member = response.data;
                setExercise(member.exercise);
                setFood(member.food);
                setFeel(member.feel);
                setWeight(member.weight);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);


    // 피드백 팝업 열기
    const openFeedbackPopup = () => {
        setFeedbackPopupVisibility(true);
    }

    // 피드백 팝업 닫기
    const closeFeedbackPopup = () => {
        setFeedbackPopupVisibility(false);
    }

    const closeDiaryPopup = () => {
        props.closePopup(); // CalendarPage에서 전달한 closePopup 함수 호출
    }

    const handleSave = (event) => {
        event.preventDefault();
        const newMember = {
            exercise: exercise,
            food: food,
            feel: feel

        };
        const data = JSON.parse(localStorage.getItem('data')); // localStorage에서 data 값을 문자열로 가져와서 객체로 변환
        const urls = `/members/cal/${data}`; // 객체의 id 속성을 url 경로에 넣음
        const url = `/main/${data}`; // 객체의 id 속성을 url 경로에 넣음

        axios.put(urls, newMember)
            .then((response) => {
                console.log("Book edited successfully.");
                navigate(url); // url 경로로 이동
            })
            .catch((error) => {
                console.log("Error while editing book:", error);
            });
    }

    const handleSaves = (event) => {
        event.preventDefault();
        const newMember = {
            weight: weight
        };

        const data = JSON.parse(localStorage.getItem('data')); // localStorage에서 data 값을 문자열로 가져와서 객체로 변환
        const urls = `/members/weight/${data}`; // 객체의 id 속성을 url 경로에 넣음
        const url = `/main/${data}`; // 객체의 id 속성을 url 경로에 넣음
        axios.put(urls, newMember)
            .then((response) => {
                console.log("Book edited successfully.");
                navigate(url); // url 경로로 이동
            })
            .catch((error) => {
                console.log("Error while editing book:", error);
            });
    }

    const handleSaveAndFeedback = () => {
        handleSave();
        handleSaves();
        openFeedbackPopup();
    }

    return (
        <div className="Popup-background">
            <div className="diary">
                <div className="diary-top-tool">
                    <div className="diary-top-bar"><span className="diary-top-logo">HELLENDER</span>
                        <button className="diary-close-tool" onClick={closeDiaryPopup}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="38" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>


                <div className="diary-tool">
                    <form>
                        <span className="Diary-title">오늘의 일기</span>
                        <div className="question-tool" id="exercise">
                            <label className="diary-question" htmlFor="exercise">Q. 오늘 어떤 운동을 하셨나요?</label>
                            <input
                                type="text"
                                className={'question-box'}
                                onChange={(event) => {setExercise(event.target.value)}}
                                value={exercise}
                                required>
                            </input>
                        </div>
                        <div className="question-tool" id="food">
                            <label className="diary-question" htmlFor="food">Q. 오늘의 식단은 어떻게 드셨나요?</label>
                            <input
                                type="text"
                                className={'question-box'}
                                onChange={(event) => {setFood(event.target.value)}}
                                value={food}
                                required>
                            </input>
                        </div>
                        <div className="question-tool" id="feel">
                            <label className="diary-question" htmlFor="feel">Q. 전체적으로 어떤 기분인가요?</label>
                            <input
                                type="text"
                                className={'question-box'}
                                onChange={(event) => {setFeel(event.target.value)}}
                                value={feel}
                                required>
                            </input>
                        </div>
                        <button onClick={handleSave} type="button" className="save-btn">
                            저장
                        </button>
                        <div className="question-tool" id="weight">
                            <label className="diary-question" htmlFor="weight">Q. 현재 체중은 몇인가요?<span className="weightAlert">(*주의: 체중은 수정이 불가하오니 기입 후 바로 피드백받기를 눌러주세요.)</span></label>
                            <input
                                type="text"
                                className={'question-box'}
                                onChange={(event) => {setWeight(event.target.value)}}
                                value={weight}
                                required>
                            </input>
                        </div>
                        <button className="feedback-btn" onClick={handleSaveAndFeedback}><span>피드백 받기</span></button>
                        <span className="Diary-title" id="diary-feedback">피드백</span>
                        <input
                            type="text" /*ai 답변*/
                            className={'feedback-box'}
                            value={feedbackData.rec_pd}
                            onChange={handleFeedbackChange}
                        />
                    </form>
                </div>
            </div>

        </div>
    );
}