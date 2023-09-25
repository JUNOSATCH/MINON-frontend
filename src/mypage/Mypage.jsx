import React from "react";
import Manner from "./Manner";
import "./manner.css";
import Nav from "../Nav";
import Myposting from "../Myposting";
function Mypage() {
    return(
        <div>
            <div className="navdiv">
                <Nav/>
            </div>
            <div className="mypage-div">
                    <div className="mypage-top">
                        <div className="mypage-info">
                            <img className="mypage-profileimg"src="https://i2.ruliweb.com/cmt/20/11/11/175b5b73ab24e7fd1.jpg" />
                            <h1 className="mypage-name">명륜이 엄마</h1>
                            
                        </div>
                        <div >
                            
                            <Manner />
                            <h6 className="alertmsg">매너온도가 10도 이하로 내려가면 민원 등록이 불가합니다. </h6>
                        </div>
                    </div>
                    <div className="mypage-bottom">
                        <div className="mypage-posting">
                            <h1 className="comments-h1">내 민원 기록</h1>
                            <Myposting />
                        </div>
                    </div>
                    
            </div>
            
            
        </div>
    );
}

export default Mypage;