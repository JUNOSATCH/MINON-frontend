import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
    const navigate = useNavigate();
    const goLogin = () => {
        navigate("/login");
    }
    const gomain = () => {
        navigate("/")
    }

    const mypage = () => {
        navigate("/mypage")
    }
    const gochat=() => {
        navigate("/chat");
    }
    return(

        <div>
            <nav class="menu" tabindex="0">
                <div class="smartphone-menu-trigger"></div>
                    <header class="avatar">
                        <img className="profileimg" src="https://i2.ruliweb.com/cmt/20/11/11/175b5b73ab24e7fd1.jpg" />
                        <h5 className="momname">명륜이 엄마</h5>
                    </header>
                <ul>
                    <li tabIndex="0" class="icon-dashboard" onClick={gomain}><span>😀  내 선생님 찾기</span></li>
                    
                    
                    <li tabIndex="0" class="icon-settings" onClick={gochat}><span>💬  내 채팅</span></li>
                    <li tabIndex="0" class="icon-settings" onClick={mypage}><span>💛  마이페이지</span></li>
                    <li tabIndex="0" class="icon-settings" ><span>📣  알림</span></li>
                    <li tabIndex="0" class="icon-logout" onClick={goLogin}><span>🚪  LOGOUT</span></li>

                </ul>
            </nav>

  
        </div>
    );
}

export default Nav;