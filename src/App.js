import React from "react";
import Sign from "./Sign";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import Mypage from "./mypage/Mypage";
import Teacher from "./teacherpage/Teacher";
import Record from "./record/Record";
import Record2 from "./record/Record2";
import Chat from "./chat/Chat";
function App() {
  return (
      <Routes>
        <Route path="/sign" element={<Sign/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Main/>} />
        <Route path="/teacher" element={<Teacher/>} />
        <Route path="/record" element={<Record/>} />
        <Route path="/record2" element={<Record2/>} />

        <Route path="/chat" element={<Chat/>} />
        <Route path="/mypage" element={<Mypage/>} />
      </Routes>
  );
}

export default App;
