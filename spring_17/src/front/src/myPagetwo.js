import React, {useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from './header';
import './login.css';
import { deleteBook } from './api';  // delete 공통 함수 : api.js
import photo from'./default_profile.png';
import axios from 'axios';

export default function MemberList() {
    const  [members, setMembers]  = useState([]);
    const  [member, setMember] = useState({profile_image:'', nickname_m: '', birthday:'', gender:''});
//    const  [healths, setHealths]  = useState([]);


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

    useEffect(() => {
                axios.get(url)
                    .then((response) => {
                        setMember(response.data);
                    })
                    .catch((error) => {
                        console.log("Error while geting book:", error);
                    })
            }, []);


    const getMembers = () => {
        axios.get('/members')
            .then((response) => {
                setMembers(response.data);
            })
            .catch((error) => {
                console.log("Error while fetching books:", error);
            });
    }

    const handleDeleteConfirm = (uid) => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            deleteBook(uid)            // delete 공통 함수 호출 : api.js
                .then(() => {
                    console.log("Book deleted successfully.");
                    getMembers();
                })
                .catch((error) => {
                    console.log("Error while deleting book:", error);
                });
        }
    }

    return (
        <div className='myPage'>

            <div className="myPage-top">
                <Header />
                <span className="mp-c">마이페이지</span>
                <div className='profile-change'>
                        <b className="text-muted">프로필 사진</b><br/>
                        <img src={member.profile_image} width={180} height={200} alt="프로필 사진" className="profile-image"/><br/>
                </div>
                <div class="info-line" id="line1" />
                <div class="info-line" id="line2" />
                <div class="info-line" id="line3" />
                <div className="pentagon-graph"><span>그래프</span></div>
                <p className="mp-name"><b>이름:</b> {member.nickname_m}</p>
                <p className="mp-gender"><b>성별:</b> {member.gender}</p>
                <p className="mp-birthday"><b>생년월일:</b> {member.birthday}</p>
            </div>

            <div className="myPage-bottom">
                <h2 className="hib-text">건강 지표</h2>
                    <div className="hib">
                        <form>
                            <div className="hib-info1">
                                <label className="info-question" htmlFor="height">1. 키</label>
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
                                <label className="info-question" htmlFor="weight">2. 몸무게</label>
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
                                <label className="info-question" htmlFor="health_Level">3. 신체 활동 수준</label>
                                <select
                                    onChange={(event) => {setHealth_Level(event.target.value)}}
                                    value={health_Level}
                                    type="text"
                                    className="choose-box"
                                    id="health_Level"
                                    name="health_Level"
                                    required>
                                    <option value="가벼움">가벼움</option>
                                    <option value="보통">보통</option>
                                    <option value="강함">강함</option>
                                </select>
                            </div>

                            <div className="hib-info4">
                                <label className="info-question" htmlFor="flavor">4. 선호하는 운동 종류</label>
                                <select
                                    onChange={(event) => {setFlavor(event.target.value)}}
                                    value={flavor}
                                    type="text"
                                    className="choose-box"
                                    id="flavor"
                                    name="flavor"
                                    required>
                                    <option value="유산소 운동">유산소 운동</option>
                                    <option value="근력 훈련">근력 훈련</option>
                                    <option value="유연성 향상">유연성 향상</option>
                                    <option value="균형 및 안정성 향상">균형 및 안정성 향상</option>
                                    <option value="신체 활동 및 레저 스포츠">신체 활동 및 레저 스포츠</option>
                                </select>
                            </div>

                            <div className="hib-info5">
                                <label className="info-question" htmlFor="purpose">5. 운동하는 목적</label>
                                <select
                                    onChange={(event) => {setPurpose(event.target.value)}}
                                    value={purpose}
                                    type="text"
                                    className="choose-box"
                                    id="purpose"
                                    name="purpose"
                                    required>
                                    <option value="체중 감량">체중 감량</option>
                                    <option value="근력 강화">근력 강화</option>
                                    <option value="스트레스 해소">스트레스 해소</option>
                                    <option value="취미">취미</option>
                                    <option value="건강">건강</option>
                                </select>
                            </div>

                            <div className="hib-info6">
                                <label htmlFor="health_Time">6. 하루 운동 시간</label>
                                <select
                                    onChange={(event) => {setHealth_Time(event.target.value)}}
                                    value={health_Time}
                                    type="text"
                                    className="choose-box"
                                    id="health_Time"
                                    name="health_Time"
                                    required>
                                    <option value="30분 미만">30분 미만</option>
                                    <option value="30분 이상 1시간 미만">30분 이상 1시간 미만</option>
                                    <option value="1시간 이상 1시간 30분 미만">1시간 이상 1시간 30분 미만</option>
                                    <option value="1시간 30분 이상 2시간 미만">1시간 30분 이상 2시간 미만</option>
                                    <option value="2시간 이상">2시간 이상</option>
                                </select>
                            </div>

                            <div className="hib-info7">
                                <label htmlFor="health_Num">7. 일주일 운동 횟수</label>
                                <select
                                    onChange={(event) => {setHealth_Num(event.target.value)}}
                                    value={health_Num}
                                    type="text"
                                    className="choose-box"
                                    id="health_Num"
                                    name="health_Num"
                                    required>
                                    <option value="1회">1회</option>
                                    <option value="2회">2회</option>
                                    <option value="3회">3회</option>
                                    <option value="4회">4회</option>
                                    <option value="5회 이상">5회 이상</option>
                                </select>
                            </div>
                            <div className="hib-info8">
                                <label htmlFor="location_Num">8. 선호하는 운동 장소</label>
                                <select
                                    onChange={(event) => {setLocation_Num(event.target.value)}}
                                    value={location_Num}
                                    type="text"
                                    className="choose-box"
                                    id="location_Num"
                                    name="location_Num"
                                    required>
                                    <option value="실내">실내</option>
                                    <option value="실외">실외</option>
                                </select>
                            </div>

                            <div className="hib-info9">
                                <label htmlFor="etc_Hist">9. 기타 건강 상태</label>
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
                            <button onClick={handleSave} type="button" className="edit-btn">
                                <span id="edit-t">수정완료</span>
                            </button>
                        </form>
                    </div>
                    <div class="m-footer">
                        <div class="footer-line">
                            <span class="footer-title">Withus</span>
                            <span class="footer-info">Contact Us 33 Seocho-daero 74-gilSeocho-gu,Seoul,
                                Korea Phone: +82 10 5589 5488 Email: bit@example.com</span>
                        </div>
                    </div>
            </div>
        </div>
    );
}