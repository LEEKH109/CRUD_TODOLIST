import React from "react";
import mainId from '../static/data.js';
import styled from 'styled-components';

export const Iconarea = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  position: relative;
  z-index: 2;
  left: 160px;
  top: 150px;
`
export const Usericon = styled.img`
  width: 125px;
  height: 125px; 
  border-radius: 75px;
  border: 5px solid black;
`

const IconArea = () =>{
    return(
            <Iconarea>
                <Usericon src={mainId[0].usericon}/> 
            </Iconarea>
    )
}
export default IconArea;