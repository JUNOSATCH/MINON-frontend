import React from "react";
import "./mypage/manner.css";
import "./post.css"
import Postframe from "./Postframe";
function Myposting() {
    return(
        <div>
            <div class="col-sm-5 col-md-6 col-12 pb-4">
                                        
                                        <Postframe subject="담임" name="김선생" about = "생활지도 | 1학기 학교 생활 관련" />
                                        <Postframe subject="체육" name="박선생" about="학교생활 | 체육대회 계주 사고 관련" />
                                        <Postframe subject="담임" name="김선생" about="성적상담 | 1학기 기말고사 및 수업태도 관련" />
                                        <Postframe subject="과학" name="최선생" about="학교생활 | 과학 실험 부상" />
                                        <Postframe subject="과학" name="최선생" about="학교생활 | 과학 수행평가 관련" />
                                        
                                        
                                    </div>
        </div>
    );
}

export default Myposting;