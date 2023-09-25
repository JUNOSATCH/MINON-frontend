import React from 'react';
import './chat.css';

import $ from 'jquery'; // jQuery를 먼저 로드합니다.
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



class Chat extends React.Component {
  componentDidMount(){
  $('#action_menu_btn').on("click",function(){
    $('.action_menu').toggle();
  });
  }

 
  render() {

    
   
    return (
     
        <div className="chat-maincontainer">
            
         
          <div>
            <div class="row justify-content-center h-100">
              <div class="col-md-4 col-xl-3 chat"><div class="card mb-sm-3 mb-md-0 contacts_card">
                
                <div class="chat-card-body chat-contacts_body">
                  <ul class="chat-contacts">
                  <li class="active">
                    <div class="d-flex bd-highlight">
                      <div class="chat-img_cont">
                        <img src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/11/urbanbrush-20181120014923573867.png" 
                        alt = ""
                        class="rounded-circle chat-user_img" />
                        <span class="chat-online_icon"></span>
                      </div>
                      <div class="chat-user_info">
                        <span>김선생</span>
                        <p>정보 | 채팅 가능</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex bd-highlight">
                      <div class="chat-img_cont">
                        <img src="https://cdn-icons-png.flaticon.com/512/4832/4832469.png" 
                        alt = ""
                        class="rounded-circle chat-user_img" />
                        <span class="online_icon offline"></span>
                      </div>
                      <div class="chat-user_info">
                        <span>박선생</span>
                        <p>과학 | 7분 전 온라인</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex bd-highlight">
                      <div class="chat-img_cont">
                        <img src="data:image/png;base64,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"
                        alt = ""
                         class="rounded-circle chat-user_img" />
                        <span class="chat-online_icon"></span>
                      </div>
                      <div class="chat-user_info">
                        <span>이선생</span>
                        <p>수학 | 채팅 가능</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex bd-highlight">
                      <div class="chat-img_cont">
                        <img src="https://i.namu.wiki/i/C1PcUXV5GNBBucgCkMws2U_ESHs9w7T3T-1qKsLcBBZOWrzBB5DP9dErevlDDAgcWAkA03CUvVwipXAxa_aJyg.webp"
                        alt = ""
                        class="rounded-circle chat-user_img" />
                        <span class="chat-online_icon offline"></span>
                      </div>
                      <div class="chat-user_info">
                        <span>최선생</span>
                        <p>과학 | 30분 전 온라인 </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex bd-highlight">
                      <div class="chat-img_cont">
                        <img src="https://cdn-icons-png.flaticon.com/512/4736/4736827.png"
                        alt = ""
                        class="rounded-circle chat-user_img" />
                        <span class="chat-online_icon offline"></span>
                      </div>
                      <div class="chat-user_info">
                        <span>유선생</span>
                        <p>도덕 | 55분 전 온라인</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex bd-highlight">
                      <div class="chat-img_cont">
                        <img src="https://i.namu.wiki/i/C1PcUXV5GNBBucgCkMws2U_ESHs9w7T3T-1qKsLcBBZOWrzBB5DP9dErevlDDAgcWAkA03CUvVwipXAxa_aJyg.webp"
                        alt = ""
                        class="rounded-circle chat-user_img" />
                        <span class="chat-online_icon offline"></span>
                      </div>
                      <div class="chat-user_info">
                        <span>백선생</span>
                        <p>과학 | 30분 전 온라인 </p>
                      </div>
                    </div>
                  </li>
                </ul>
                </div>
                <div class="chat-card-footer"></div>
              </div></div>
              <div class="col-md-8 col-xl-6 chat">
                <div class="chat-card">
                  <div class="chat-card-header chat-msg_head">
                    <div class="d-flex bd-highlight">
                      <div class="chat-img_cont">
                        <img src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/11/urbanbrush-20181120014923573867.png"
                        alt = ""
                        class="rounded-circle chat-user_img" />
                        <span class="chat-online_icon"></span>
                      </div>
                      <div class="chat-user_info">
                        <span>담임 | 김선생 </span>
                        <p>20 메시지</p>
                      </div>
                      <div class="chat-video_cam">
                        <span><i class="fas fa-video"></i></span>
                        <span><i class="fas fa-phone"></i></span>
                      </div>
                    </div>
                    <span id="chat-action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
                    <div class="chat-action_menu">
                      <ul>
                        <li><i class="fas fa-user-circle"></i> 프로필 보기</li>
                        <li><i class="fas fa-users"></i> 즐겨찾기 추가</li>
                        <li><i class="fas fa-plus"></i> 그룹 추가</li>
                        <li><i class="fas fa-ban"></i> 차단</li>
                      </ul>
                    </div>
                  </div>
                  <div class="chat-card-body msg_card_body">
                    <div class="d-flex justify-content-end mb-4">
                      <div class="chat-msg_cotainer_send">
                        안녕하세요. 명륜이 엄마입니다.
                        <span class="chat-msg_time_send">8:55 AM, 오늘</span>
                      </div>
                      <div class="chat-img_cont_msg">
                    <img src="https://img.lovepik.com/free-png/20210918/lovepik-granny-png-image_400257904_wh1200.png"
                        alt = ""
                        class="rounded-circle chat-user_img_msg" />
                      </div>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                      <div class="chat-img_cont_msg">
                        <img src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/11/urbanbrush-20181120014923573867.png" 
                        alt = ""
                        class="rounded-circle chat-user_img_msg" />
                      </div>
                      <div class="chat-msg_cotainer">
                        네 연락해줘서 감사합니다. 잘 지내셨어요?
                        <span class="chat-msg_time">9:00 AM, 오늘</span>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end mb-4">
                      <div class="chat-msg_cotainer_send">
                        명륜이가 오늘 학교에서 문제가 있었나봐요. 친구들과 다툼이 있었던 것 같네요.
                        <span class="chat-msg_time_send">9:05 AM, 오늘</span>
                      </div>
                      <div class="chat-img_cont_msg">
                    <img src="https://img.lovepik.com/free-png/20210918/lovepik-granny-png-image_400257904_wh1200.png" 
                    alt = ""
                    class="rounded-circle chat-user_img_msg" />
                      </div>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                      <div class="chat-img_cont_msg">
                        <img src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/11/urbanbrush-20181120014923573867.png" 
                        alt = ""
                        class="rounded-circle chat-user_img_msg" />
                      </div>
                      <div class="chat-msg_cotainer">
                        네 맞아요. 안그래도 연락드릴려고 했어요. 전화로 연결할까요?
                        <span class="chat-msg_time">9:07 AM, 오늘</span>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end mb-4">
                      <div class="chat-msg_cotainer_send">
                        네 편하실때 연락주세요. 감사합니다.
                        <span class="chat-msg_time_send">9:10 AM, 오늘</span>
                      </div>
                      <div class="chat-img_cont_msg">
                  <img src="https://img.lovepik.com/free-png/20210918/lovepik-granny-png-image_400257904_wh1200.png" 
                  alt = ""
                  class="rounded-circle chat-user_img_msg" />
                      </div>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                      <div class="chat-img_cont_msg">
                        <img src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/11/urbanbrush-20181120014923573867.png" alt = ""
                        class="rounded-circle chat-user_img_msg" />
                      </div>
                      <div class="chat-msg_cotainer">
                        좋은 하루 되세요.
                        <span class="chat-msg_time">9:12 AM, 오늘</span>
                      </div>
                    </div>
                  </div>
                  <div class="chat-card-footer">
                    <div class="chat-input-group">
                      <div class="chat-input-group-append">
                        <span class="chat-input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
                      </div>
                      <textarea name="" class="chat-form-control chat-type_msg" placeholder="메시지를 입력하세요."></textarea>
                      <div class="chat-input-group-append">
                        <span class="chat-input-group-text chat-send_btn"><i class="fas fa-location-arrow"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
          <button className='goout'>❌</button>
        
        </div>
     
      
)
};
}
export default Chat;