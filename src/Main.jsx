import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Card from "./Card";
import Search from "./Search";
import Db from "./db/Db";

function Main() {
    const navigate = useNavigate();


    return (
        <div>
            <div className="navdiv">
                <Nav />
            </div>

            <div className="maindiv">
                <Search />
                <h1 className="myteacherment">내 선생님</h1>
                <div className="card-array">
                            <Card
                             // 고유한 키값을 지정해야 함
                                name={Db[0].name}
                                subject={Db[0].sub}
                                classroom={Db[0].class}
                                img={Db[0].img}
                            />
                            <Card
                             // 고유한 키값을 지정해야 함
                                name={Db[1].name}
                                subject={Db[1].sub}
                                classroom={Db[1].class}
                                img={Db[1].img}
                            />
                            <Card
                             // 고유한 키값을 지정해야 함
                                name={Db[2].name}
                                subject={Db[2].sub}
                                classroom={Db[2].class}
                                img={Db[2].img}
                            />
       
                </div>


                <div className="card-array">
                            <Card
                             // 고유한 키값을 지정해야 함
                                name={Db[3].name}
                                subject={Db[3].sub}
                                classroom={Db[3].class}
                                img={Db[3].img}
                            />
                            <Card
                             // 고유한 키값을 지정해야 함
                                name={Db[4].name}
                                subject={Db[4].sub}
                                classroom={Db[4].class}
                                img={Db[4].img}
                            />
                            <Card
                             // 고유한 키값을 지정해야 함
                                name={Db[5].name}
                                subject={Db[5].sub}
                                classroom={Db[5].class}
                                img={Db[5].img}
                            />
       
                </div>
            </div>
        </div>
    );
}

export default Main;
