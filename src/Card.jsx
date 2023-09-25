import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({name, subject, classroom, img }) { 
    const navigate = useNavigate();
    const goteacher = () => {
        navigate("/teacher");
    }
    return (
        <div className="carddiv">
            <article class="card">
                <img
                    class="card__background"
                    src={img}
                    alt="Photo"
                    width="1920"
                    height="2193"
                />
                <div class="card__content | flow">
                    <div class="card__content--container | flow">
                        <h2 class="card__title">{name}</h2>
                        <p class="card__description">
                        이름 : {name}
                        <br></br>
                         담당 과목 : {subject}
                        <br></br>
                        담임 : {classroom}
                        </p>
                    </div>
                    <button onClick={goteacher}class="card__button">연결하기</button>
                </div>
            </article>
        </div>
    );
}

export default Card;