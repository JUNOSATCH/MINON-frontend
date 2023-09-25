import React from "react";
import "./record.css";
import { useNavigate } from "react-router-dom";
function Record({text}) {
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

                <h3 className="detect">높음</h3>
            </div>
                <hr></hr>
                <p className="ring">선생님 : 여보세요.
                    <br></br>
학부모 : 선생님 우리의 성적이 왜 이래요 선생님의 능력 부족인 거 아닌가요
<br></br>
선생님 : 안녕하세요. 어머님 학생들의 성적은 다양한 요소에 영향을 받을 수 습니다. 제가 최선을 다해 가르치고 있으며<br></br>...... 학생들의 학업 성과 향상을 위해 노력하고 있습니다.
<br></br>
학부모 : 애들은 잘만 하는데 우리 애만 왜 이래요
<br></br>
선생님 : 다른 학생들과의 비교는 학생들에게 부담을 주기도 합니다. 각 학생은 고요한 능력과 학습 속도를 가지고 있으며....
<br></br>
학부모 : 그건 변명이죠. 우리 애가 원래는 이렇게 후달리지 않았는데 선생님이 차별하시는 거 아니에요.
<br></br>
선생님 : 오해입니다. 어머님 저는 모든 학생들에게 최선을 다해 가르치려 노력하고 있습니다.
<br></br>
학부모 : 말만 하면 다인가요 결과가 이 모양인데</p>
                
            </div>
            <div className="recordbottom">
            <button className="backrecord" onClick={onClick}>뒤로가기</button>
            <div>
                <h4 className="star">리폿평가 : ⭐ / 5</h4>
                <h6 className="pot">>> 저의 말을 끊임없이 끊으며 저의 노력을 무시하는 말을 하였습니다.</h6>

            </div>
            

            </div>
            
        </div>
    );
}

export default Record;