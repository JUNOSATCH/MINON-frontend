import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const [values, setValues] = useState({
        id : "", pw : "", pw2:"", child : ""
    })
    const gosignpage = () => {
        navigate("/sign")
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name] : value,
        });
    }

    const login = () => {
        // 사용자가 입력한 아이디와 비밀번호를 가져옵니다.
        const { id, pw } = values;
    
        // 서버로 보낼 데이터를 준비합니다.
        const requestData = {
            id: id,
            password: pw,
        };
    
        // 서버로 POST 요청을 보냅니다.
        fetch("http://13.125.226.114:8080/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // JSON 형태로 데이터 전송
            },
            body: JSON.stringify(requestData), // 데이터를 JSON 문자열로 변환하여 전송
        })
        .then((response) => {
            // 서버로부터의 응답을 처리합니다.
            if (response.ok) {
                // 로그인 성공한 경우
                return response.json(); // JSON 응답 데이터를 파싱하여 반환
            } else {
                // 로그인 실패한 경우
                throw new Error("로그인에 실패했습니다.");
            }
        })
        .then((data) => {
            // 서버로부터의 응답 데이터를 처리합니다.
            console.log("로그인 성공:", data);
            // 로그인 성공 후 필요한 동작을 수행하세요.
        })
        .catch((error) => {
            // 오류 발생 시 처리합니다.
            console.error("로그인 오류:", error.message);
            // 오류 처리를 수행하세요.
        });

        navigate("/");
    }

    

    return(
        <div className="logindiv">
            <h2 className="signtitle">LOGIN</h2>
            <form className="loginbox">
                <div>
                    <h3>아이디</h3>
                    <input className="signinput" type="text" name="id"  onChange={handleChange} placeholder="id를 입력해주세요" value={values.id}/>
                </div>
               

                <div>
                        <h3>비밀번호</h3>
                        <input className="signinput" type="text" name="pw"  onChange={handleChange} placeholder="비밀번호를 입력해주세요" value={values.pw}/>
                </div>

                <button className="loginbtn" onClick={login}>LOGIN</button>
            </form>

            <h5 onClick={gosignpage} className="signup-ment">회원이 아니라면? <br></br>회원가입하기</h5>
                

            
        </div>
    );
}

export default Login;