import React from "react";
import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";


function Sign() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        id : "", pw : "", pw2:"", child : "", classroom : "",
    })
    // input 내용반영

    // 회원가입 조건 관리
    // 학부모일 경우 : 내 아이 이름 입력
    const [childMessage, setchildMessage] = useState('');
    const [ischild, setIschild] = useState(false);
    const handlechildChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name] : value,
        });
        if (e.target.value.length < 2 ) {
            setchildMessage('아이 이름을 입력해주세요')
            setIschild(false)
          } else {
            setchildMessage('올바른 이름 형식입니다 :)')
            setIschild(true)
          }
    }

    

    // const onSubmit = () => {
    //     console.log("학부모임")
    //     fetch("http://13.125.226.114:8080/auth/join/parent",{
    //                 method : "POST",
    //                     body : JSON.stringify({
    //                         name : "ㅁ",
    //                         id : "ㅁ",
    //                         password : "ㅁ",
    //                         classroom : "ㅁ"
    //                     })
    //             }).then(res => res.json())
    //             .then(res => console.log(res))
    // }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("학부모임");
        
        // form에서 받은 id와 pw를 출력
        console.log("ID:", values.id);
        console.log("Password:", values.pw);
    
        try {
            // const res = await fetch("http://13.125.226.114:8080/auth/join/parent",{
            //     method : "POST",
            //     body : JSON.stringify({
            //         name: values.child,
            //         id: values.id,
            //         password: values.pw,
            //         classroom: values.classroom
            //     })
            // });
            const res = await fetch("http://13.125.226.114:8080/auth/join/parent",{
                method : "POST",
                body: {
                    id: "asdf",
                    password: "asdf",
                    name: "asdf",
                    classroom: "asfd"
                }
            });

            const data = await res.json();
    
            // 서버로부터의 응답 내용을 출력
            console.log("서버 응답:", data);
    
            if (res.ok) {
                // 성공적으로 회원가입되었을 때의 처리
                console.log("성공");
            } else {
                // 오류 처리
                console.log("실패")
            }
        } catch (error) {
            console.error("서버 요청 오류:", error);
        }
    }
    

        
    
    
                
    
        
   
    

    // id = name
    const [nameMessage, setNameMessage] = useState('');
    const [isName, setIsName] = useState(false);
    const handleIdChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name] : value,
        });
        if (e.target.value.length < 5 ) {
            setNameMessage('최소 5글자 이상으로 입력해주세요.')
            setIsName(false)
          } else {
            setNameMessage('올바른 이름 형식입니다 :)')
            setIsName(true)
          }
        }


    // 반학년
    const handleclassroomChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name] : value,
        });
    }
    // pw
    const [pwMessage, setpwMessage] = useState('');
    const [ispw, setIspw] = useState(false);
    const handlePwChange = (e) => {
        const {name,value} = e.target;
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{5,25}$/
        setValues({
            ...values,
            [name] : value,
        });
        if (!passwordRegex.test(e.target.value)) {
            setpwMessage('영문자+숫자 조합으로 5자리 이상 입력해주세요!')
            setIspw(false)
          } else {
            setpwMessage('안전한 비밀번호입니다 :)')
            setIspw(true)
          }
        }

    //pw 재확인
    const [pw2Message, setpw2Message] = useState('');
    const [ispw2, setIspw2] = useState(false);
    const handlePw2Change = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name] : value,
        });
        if (e.target.value === values.pw) {
            setpw2Message('비밀번호가 확인되었습니다 :) ')
            setIspw2(true)
          } else {
            setpw2Message('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ')
            setIspw2(false)
          }

    }

  

    // 학부모인지 아닌지에 따라 구분
    const [view, setView] = useState('');
    const [par, setPar] = useState(false)
    const viewHandler = (e)=>{
        if ((e.target.value) === '2'){
            setView('block')
        }else if((e.target.value) === '1'){
            setView('')
            setPar(true);
        }
    }

    
    
    

    return(
        <div className="signdiv">
            <h2 className="signtitle">회원가입</h2>
            
            <select className="selectbox" onChange={viewHandler}>
                    <option value="0">유형선택</option>
                    <option value="1">학부모</option>
                    <option value="2">교사</option>
            </select>

            <hr></hr>
            <div className="signbox">
            
                
                <form className="signform" >
                    <div className={view}>
                        <div>
                            <h3>내 아이 이름</h3>
                            <input className="signinput" type="text" name="child"  onChange={handlechildChange} placeholder="아이 이름을 입력해주세요" value={values.child}/>
                        </div>
                        <div className="error">
                            {values.child.length > 0 && <span className={`message ${ischild ? 'success' : 'error'}`}>{childMessage}</span>}
                        </div>

                    </div>
                    
                    <div>
                        <h3>학년 반</h3>
                        <input className="signinput" type="text" name="classroom"  onChange={handleclassroomChange} placeholder="학년 반을 입력해주세요" value={values.classroom}/>
                    </div>
                

                    
                    <div>
                        <h3>아이디</h3>
                        <input className="signinput" type="text" name="id"  onChange={handleIdChange} placeholder="id를 입력해주세요" value={values.id}/>
                    </div>
                    <div className="error">
                        {values.id.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
                    </div>

                    <div>
                        <h3>비밀번호</h3>
                        <input className="signinput" type="text" name="pw"  onChange={handlePwChange} placeholder="비밀번호를 입력해주세요" value={values.pw}/>
                    </div>
                    <div className="error">
                        {values.pw.length > 0 && (<span className={`message ${ispw ? 'success' : 'error'}`}>{pwMessage}</span>)}
                    </div>

                    <div>
                        <h3>비밀번호 재확인</h3>
                        <input className="signinput" type="text" name="pw2"  onChange={handlePw2Change} placeholder="비밀번호를 확인해주세요" value={values.pw2}/>
                    </div>
                    <div className="error">
                        {values.pw2.length > 0 && (<span className={`message ${ispw2 ? 'success' : 'error'}`}>{pw2Message}</span>)}
                    </div>
                    
                    <button className="signbtn" onClick={onSubmit} >
                        회원가입
                    </button>
                </form>

            </div>
        </div>
        
    );
}

export default Sign;