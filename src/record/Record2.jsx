import React from "react";
import "./record.css";
import { useNavigate } from "react-router-dom";
function Record2({text}) {
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/teacher");
    }
    return(
        <div className="recorddiv">
            <div className="record-mentdiv">
            <div>
                <h5 className="record-ment">통화기록</h5>
                <h5 className="record-ment">2023.09.23 11:00 AM</h5>

            </div>
            <div>

                <h3 className="detect-good">낮음</h3>
            </div>
                
                
                <hr></hr>
                <p className="ring">선생님 : 여보세요.
                    <br></br>
학부모 : 안녕하세요. 선생님 우리의 학업에 대해서 걱정이 좀 되어서 이렇게 연락드렸습니다.
<br></br>
선생님 : 학업에 대한 걱정은 자연스러운 일이에요. 유찬 학생이 어떤 어려움을 겪고 있나요.
<br></br>
학부모 : 유찬이가 수학 과목에서 어려움을 겪고 있는 것 같아요. 시험 점수가 좀 낮아지고 있어서 걱정이에요.
<br></br>
선생님 : 이해합니다. 구체적으로 어떤 부분을 어려워하는지 알 수 있을까요.
<br></br>
학부모 : 유찬이가 기본 개념을 이해하는 데 어려움을 겪는 것 같아요. 더 많은 연습이 필요한 것 같습니다.</p>
                
            </div>
            <div className="recordbottom">
            <button className="backrecord" onClick={onClick}>뒤로가기</button>
            <h4 className="star">평가 : ⭐⭐⭐⭐ / 5</h4>

            </div>
            
        </div>
    );
}

export default Record2;