import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TeacherProfile from './components/TeacherProfile/TeacherProfile';
import HomePage from './components/HomePage/HomePage';
import SignIn from './components/SigninPage/SignIn';
import Search from './components/Search/Search';
import SearchResults from './components/Search/SearchResults';
import StudentRegister from './components/Register/Student/StudentRegister';
import TeacherRegister from './components/Register/Teacher/TeacherRegister';
import Register from './components/Register/Register';





function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teacherprofile" element={<TeacherProfile/>} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/search" element={<Search/>} />
        <Route path="/searchtutor" element={<SearchResults/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/studentRegister" element={<StudentRegister/>} />
        <Route path="/teacherRegister" element={<TeacherRegister/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
