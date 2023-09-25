import React from "react";
import {  useNavigate } from "react-router-dom";

function Postframe({subject,name,about,subject2,name2,about2}) {
    const navigate = useNavigate();
    const onClick = () =>{
        navigate("/record");
    }
    const onClick2 = () =>{
        navigate("/record2");
    }
    return(
        <div>
            <div class="comment mt-4 text-justify float-left">
                    <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" class="rounded-circle" />
                    <h4 className="record-man">{subject} | {name}</h4>
                    <span>   10/20, 2023</span>
                    <br></br>
                    <p className="know">{about}</p>
                    <h5 className="knowmore" onClick={onClick} > >> 자세히 보기</h5>
            </div>
            <div class="comment mt-4 text-justify float-left">
                    <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" class="rounded-circle" />
                    <h4 className="record-man">{subject2} | {name2}</h4>
                    <span>   10/20, 2023</span>
                    <br></br>
                    <p className="know">{about2}</p>
                    <h5 className="knowmore" onClick={onClick2} > >> 자세히 보기</h5>
            </div>

        </div>
    );
}

export default Postframe;