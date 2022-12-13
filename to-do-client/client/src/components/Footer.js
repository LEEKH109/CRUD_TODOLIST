import React from "react";
import styled from 'styled-components';

export const Tip =styled.footer`
  margin-bottom: 100px;
  width: 450px;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  background-color: #d9d9d9;
  border: 2px solid black;
  position: relative;
  z-index: 1;
  bottom: 0px;
`
const  Footer= () =>{
    return(
        <Tip>
            완료 한 작업 : CRUD 기능, 더미데이터 연결, 친구목록 버튼 팝업
            진행 할 작업 : 친구목록 페이지 이동, CSS 완성
        </Tip>
    )
}

export default Footer;