import React from "react";
import Postframe from "../Postframe";
import "./teacher.css";
import { useNavigate } from "react-router-dom";
function Teacher() {
    const navigate = useNavigate();
    const teacher = "김선생";
    const onClick = () => {
        alert("내선 전화로 연결할까요?");
    }
    const exit=()=> {
        navigate("/");
    }
    const onChat=()=> {
        navigate("/chat");
    }
    return (
        <div className="teacherdiv">
            <div className="teacher-top">
                <div className="teacher-info">
                    <h1 className="teacher-name">{teacher}</h1>
                    <h5 className="teacher-info">안녕하세요. 2학년 3반 담임을 맡은 김선생입니다.
                    <br></br> 정보 수업을 담당하고 있고, 학생을 이해하고 공감하고싶은~</h5>
                    
                </div>
                <div >
                    <button onClick={onClick} className="teacher-connect">
                        ☎
                    </button>
                    <button  onClick={onChat} className="teacher-chat">
                        💌
                    </button>
                    <button  onClick={exit} className="teacher-exit">
                        ❌
                    </button>
                </div>

            </div>
            
            <div>
            <hr></hr>
            <h5>{teacher}과의 소통기록</h5>
            <Postframe subject="담임" name="김선생" about = "생활지도 | 학교 생활 관련" subject2="담임" name2="김선생" about2="성적상담 | 1학기 기말고사 및 수업태도 관련"/>
            <Postframe subject="담임" name="김선생" about="학교생활 | 1학기 교우관계" subject2="담임" name2="김선생" about2 ="생활지도 | 방학 계획표 작성" />
            <Postframe subject="담임" name="김선생" about="성적상담 | 2학기 중간고사 및 수업태도 관련"subject2="담임" name2="김선생" about2="학교생활 | 2학기 응급처치 실습" />

            </div>
            

        </div>
    );
}

export default Teacher;