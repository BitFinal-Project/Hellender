//CSS 전
//import React, {useState} from 'react';
//import { Link, useNavigate } from "react-router-dom";
//import Header from './header';
//import './login.css';
//import { deleteBook } from './api';  // delete 공통 함수 : api.js
//import photo from'./default_profile.png';
//import axios from 'axios';
//
//export default function MemberAdd() {
//    const [gender, setGender] = useState('');
//    const [birthday, setBirthday] = useState('');
//
//    const navigate = useNavigate();
//
//    const handleSave = (event) => {
//        event.preventDefault();
//        const newMember = {
//            gender: gender,
//            birthday: birthday
//        };
////        const member = JSON.parse(localStorage.getItem('data')); // 로그인한 사람의 정보를 가져옴
////        if (!member) {
////          console.log("No user logged in.");
////          return;
////        }
//        const data = JSON.parse(localStorage.getItem('data')); // localStorage에서 data 값을 문자열로 가져와서 객체로 변환
//        const url = `/edit/${data}`; // 객체의 id 속성을 url 경로에 넣음
//        axios.post('/members', newMember)
//            .then((response) => {
//                console.log("Member added successfully.");
//                navigate(url); // url 경로로 이동
//            })
//            .catch((error) => {
//                console.log("Error while adding member:", error);
//            });
//    }
//
//    return (
//        <div className="container">
//            <h2 className="text-center mt-5 mb-3">Member 등록</h2>
//            <div className="card">
//                <div className="card-header">
//                    <Link className="btn btn-outline-primary mx-1" to="/">Home</Link>
//                    <Link className="btn btn-outline-primary mx-1" to="/list">Member 목록</Link>
//                </div>
//                <div className="card-body">
//                    <form>
//                        <div className="form-group">
//                            <label htmlFor="gender">성별</label>
//                            <input
//                                onChange={(event) => {setGender(event.target.value)}}
//                                value={gender}
//                                type="text"
//                                className="form-control"
//                                id="gender"
//                                name="gender"
//                                required>
//                            </input>
//                        </div>
//                        <div className="form-group">
//                            <label htmlFor="birthday">생일</label>
//                            <input
//                                onChange={(event) => {setBirthday(event.target.value)}}
//                                value={birthday}
//                                type="text"
//                                className="form-control"
//                                id="birthday"
//                                name="birthday"
//                                required>
//                            </input>
//                        </div>
//                        <button onClick={handleSave} type="button" className="btn btn-outline-primary mt-3">
//                            저장
//                        </button>
//
//                    </form>
//                </div>
//            </div>
//        </div>
//    );
//}


//CSS 후
import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import './login.css';
// import { deleteBook } from './api';  // delete 공통 함수 : api.js
// import photo from'./default_profile.png';
import axios from 'axios';
export default function MemberAdd() {
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const navigate = useNavigate();
    const handleSave = (event) => {
        event.preventDefault();
        const newMember = {
            gender: gender,
            birthday: birthday
        };
//        const member = JSON.parse(localStorage.getItem('data')); // 로그인한 사람의 정보를 가져옴
//        if (!member) {
//          console.log("No user logged in.");
//          return;
//        }
        const data = JSON.parse(localStorage.getItem('data')); // localStorage에서 data 값을 문자열로 가져와서 객체로 변환
        const url = `/edit/${data}`; // 객체의 id 속성을 url 경로에 넣음
        axios.post('/members', newMember)
            .then((response) => {
                console.log("Member added successfully.");
                navigate(url); // url 경로로 이동
            })
            .catch((error) => {
                console.log("Error while adding member:", error);
            });
    }
    return (
        <div className='regist'>
                    <div className="header">
                        <div className="header-line">
                            <span className="header-title">HELLENDER</span>
                        </div>
                    </div>
                    {/* <Link className="btn btn-outline-primary mx-1" to="/">Home</Link>
                    <Link className="btn btn-outline-primary mx-1" to="/list">Member 목록</Link> */}
                    <span className="regist-title">프로필 작성</span>
                        <div className="regist-box">
                            <div className="gender">
                                <span>성별</span>
                                <label htmlFor="man">
                                    <span>남</span>
                                    <input
                                        onChange={(event) => {setGender(parseInt(event.target.value))}}
                                        // value={gender}
                                        value={0}
                                        checked={gender === 0}
                                        type="radio"
                                        id="man"
                                        name="gender"
                                        required />
                                </label>
                                <label htmlFor="women">
                                <span>여</span>
                                <input
                                    type="radio"
                                    id="women"
                                    name="gender"
                                    value={1}
                                    checked={gender === 1}
                                    onChange={(event) => {setGender(parseInt(event.target.value))}}
                                />
                    </label>
                            </div>
                                <input
                                    onChange={(event) => {setBirthday(event.target.value)}}
                                    value={birthday}
                                    type="text"
                                    placeholder="생년월일  (8자리 숫자로 입력)"
                                    className={'regist-info-box'}
                                    id="birthday"
                                    name="birthday"
                                    required />
                            <button onClick={handleSave} type="button" className="next-btn">
                                <span id="next-t">다음단계</span>
                            </button>
                        </div>
        </div>
    );
}