import React, {useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from './header';
import './login.css';
import { deleteBook } from './api';  // delete 공통 함수 : api.js
import photo from'./default_profile.png';
import axios from 'axios';

export default function MemberEdit() {
    //const [uid, setUid] = useState(useParams().uid);

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [health_Level, setHealth_Level] = useState('');
    const [flavor, setFlavor] = useState('');
    const [purpose, setPurpose] = useState('');
    const [health_Time, setHealth_Time] = useState('');
    const [health_Num, setHealth_Num] = useState('');
    const [location_Num, setLocation_Num] = useState('');
    const [etc_Hist, setEtc_Hist] = useState('');

    const data = JSON.parse(localStorage.getItem('data')); // localStorage에서 data 값을 문자열로 가져와서 객체로 변환
    const url = `/members/${data}`; // 객체의 id 속성을 url 경로에 넣음

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                let member = response.data;
                setHeight(member.height);
                setWeight(member.weight);
                setHealth_Level(member.health_Level);
                setFlavor(member.flavor);
                setPurpose(member.purpose);
                setHealth_Time(member.health_Time);
                setHealth_Num(member.health_Num);
                setLocation_Num(member.location_Num);
                setEtc_Hist(member.etc_Hist);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const navigate = useNavigate();

    const handleSave = (event) => {
        event.preventDefault();
        const newMember = {
            height: height,
            weight: weight,
            health_Level: health_Level,
            flavor: flavor,
            purpose: purpose,
            health_Time: health_Time,
            health_Num: health_Num,
            location_Num: location_Num,
            etc_Hist: etc_Hist
        };
        const data = JSON.parse(localStorage.getItem('data')); // localStorage에서 data 값을 문자열로 가져와서 객체로 변환
        const urls = `/members/${data}`; // 객체의 id 속성을 url 경로에 넣음
        const url = `/view/${data}`; // 객체의 id 속성을 url 경로에 넣음
        axios.put(urls, newMember)
            .then((response) => {
                console.log("Book edited successfully.");
                navigate(url); // url 경로로 이동
            })
            .catch((error) => {
                console.log("Error while editing book:", error);
            });
    }

    return (
        <div className="regist2">
            <div className="header">
                <div className="header-line">
                    <span className="header-title">HELLENDER</span>
                </div>
            </div>

            <span className='regist2-notice'>프로필 작성을 위해 정보를 입력해주세요</span>
            <div id="hib-box" className="hib">
                    <form>
                        <div className="hib-info1">
                            <label className="info-question" htmlFor="height">1. 키를 적어주세요.</label>
                            <input
                                onChange={(event) => {setHeight(event.target.value)}}
                                value={height}
                                type="text"
                                className="hweight-text"
                                required>
                            </input>
                            <span className="hib-hweight">M</span>
                        </div>

                        <div className="hib-info2">
                            <label htmlFor="weight">2. 몸무게를 적어주세요.</label>
                            <input
                                onChange={(event) => {setWeight(event.target.value)}}
                                value={weight}
                                type="text"
                                className="hweight-text"
                                required>
                            </input>
                            <span className="hib-hweight">kg</span>
                        </div>
                        <div className="hib-info3">
                            <label className="info-question" htmlFor="health_Level">3. 현재 신체 활동 수준은 어떤가요?</label>
                            <select
                                onChange={(event) => {setHealth_Level(event.target.value)}}
                                value={health_Level}
                                type="text"
                                className="choose-box" required>
                                <option value="가벼움">가벼움</option>
                                <option value="보통">보통</option>
                                <option value="강함">강함</option>
                            </select>
                        </div>
                        <div className="hib-info4">
                            <label className="info-question" htmlFor="flavor">4. 어떤 종류의 운동을 선호하나요?</label>
                            <select
                                onChange={(event) => {setFlavor(event.target.value)}}
                                value={flavor}
                                type="text"
                                className="choose-box" required>
                                <option value="유산소 운동">유산소 운동</option>
                                <option value="근력 훈련">근력 훈련</option>
                                <option value="유연성 향상">유연성 향상</option>
                                <option value="균형 및 안정성 향상">균형 및 안정성 향상</option>
                                <option value="신체 활동 및 레저 스포츠">신체 활동 및 레저 스포츠</option>
                            </select>
                        </div>
                        <div className="hib-info5">
                            <label className="info-question" htmlFor="purpose">5. 운동을 하는 목적은 무엇인가요?</label>
                            <select
                                onChange={(event) => {setPurpose(event.target.value)}}
                                value={purpose}
                                type="text"
                                className="choose-box" required>
                                <option value="체중 감량">체중 감량</option>
                                <option value="근력 강화">근력 강화</option>
                                <option value="스트레스 해소">스트레스 해소</option>
                                <option value="취미">취미</option>
                                <option value="건강">건강</option>
                            </select>
                        </div>
                        <div className="hib-info6">
                            <label className="info-question" htmlFor="health_Time">6. 하루에 운동 시간은 얼마나 되나요?</label>
                            <select
                                onChange={(event) => {setHealth_Time(event.target.value)}}
                                value={health_Time}
                                type="text"
                                className="choose-box" required>
                                <option value="30분 미만">30분 미만</option>
                                <option value="30분 이상 1시간 미만">30분 이상 1시간 미만</option>
                                <option value="1시간 이상 1시간 30분 미만">1시간 이상 1시간 30분 미만</option>
                                <option value="1시간 30분 이상 2시간 미만">1시간 30분 이상 2시간 미만</option>
                                <option value="2시간 이상">2시간 이상</option>

                            </select>
                        </div>
                        <div className="hib-info7">
                            <label className="info-question" htmlFor="health_Num">7. 일주일에 운동을 몇 회 하고 싶으신가요?</label>
                            <select
                                onChange={(event) => {setHealth_Num(event.target.value)}}
                                value={health_Num}
                                type="text"
                                className="choose-box" required>
                                <option value="1회">1회</option>
                                <option value="2회">2회</option>
                                <option value="3회">3회</option>
                                <option value="4회">4회</option>
                                <option value="5회 이상">5회 이상</option>
                                </select>
                        </div>
                        <div className="hib-info8">
                            <label className="info-question" htmlFor="location_Num">8. 선호하는 운동 장소는 어디인가요?</label>
                            <select
                                onChange={(event) => {setLocation_Num(event.target.value)}}
                                value={location_Num}
                                type="text"
                                className="choose-box" required>
                                <option value="실내">실내</option>
                                <option value="실외">실외</option>
                            </select>
                        </div>
                        <div className="hib-info9">
                            <label className="info-question" htmlFor="etc_Hist">9. 기타 건강상태를 적어주세요.</label>
                            <input
                                onChange={(event) => {setEtc_Hist(event.target.value)}}
                                value={etc_Hist}
                                type="text"
                                className="info9-text"
                                placeholder='ex) 고혈압 당뇨'
                                id="etc_Hist"
                                name="etc_Hist"
                                required>
                            </input>
                        </div>

                        <button onClick={handleSave} type="button" className="update-btn">
                            <span id="update-t">저장</span>
                        </button>
                    </form>

            </div>
        </div>
    );
}