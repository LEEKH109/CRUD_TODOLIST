import React, { useState, useRef } from 'react';
import styled from 'styled-components';

export const Sidebar =styled.div`
  width: 50px;
  height: 850px;
  margin-top: 200px;
`;
export const Carrier = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0);
`;

export const AvatarIcon = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: black;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  height: 15rem;
  text-align: end;
  z-index: 2;
  bottom: 10rem;
`;

export const ModalBtn = styled.button`
  background-color: rgba(255,255,255,0);
  border: none;
  padding: 400px 0px 0px 20px;
  border-radius: 30px;
  cursor: pointer;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
    border-radius: 10px;
    border: 2px solid black;
    background-color: rgba(255,255,255,0);
    width: 300px;
    height: 150px;

    > span.close-btn {
      margin-top: 5px;
      cursor: pointer;
    }

    > div.desc {
      margin-top: 25px;
      color: rgba(255,255,255,0);
    }
`;


function Functionbar(){
    const [isOpen, setIsOpen] = useState(false);
    const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
    return(
        <Sidebar>
        <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isOpen === false ? <img className="photosize" src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"/> : <img className="photosize" src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"/>}
        </ModalBtn>
        {isOpen === true ? <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <span onClick={openModalHandler} className='close-btn'>&times;</span>
            <div className='desc'>
                <Carrier>
                    <AvatarIcon/>
                    <AvatarIcon/>
                    <AvatarIcon/>
                    <AvatarIcon/>
                    <AvatarIcon/>
                </Carrier>
            </div>
          </ModalView>
        </ModalBackdrop> : null}
      </ModalContainer>
        </Sidebar>
    )
}

export default Functionbar;