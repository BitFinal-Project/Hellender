// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./LoginPage";
import KakaoRedirectPage from "./KakaoRedirectPage";
import GoogleRedirectPage from "./GoogleRedirectPage";
import MyPage from "./myPage";
import MainPage from "./mainPage";
import MyPageone from "./myPageone";
import MyPagetwo from "./myPagetwo";
import MyPagethree from "./myPagethree";
import CalendarPage from "./calendarPage";

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/oauth/redirected/kakao" element={<KakaoRedirectPage />}></Route>
                    //<Route path="/oauth/redirected/google" element={<GoogleRedirectPage />}></Route>
                    <Route path="/main/:id"  element={<MainPage/>} />
                    <Route path="/myPage/:id"  element={<MyPage/>} />  //프로필 작성
                    <Route path="/edit/:id"  element={<MyPageone/>} />  //건강데이터 작성
                    <Route path="/view/:id"  element={<MyPagetwo/>} />   //마이페이지 작성
                    <Route path="/cal/:id"  element={<MyPagethree/>} />  //캘린더 작성
                    <Route path="/calendar"  element={<CalendarPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;