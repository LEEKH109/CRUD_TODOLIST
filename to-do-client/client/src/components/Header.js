import React from "react";
import styled from 'styled-components';

export const Head =styled.h1`
  margin-top: 100px;
  width: 450px;
  height: 50px;
  background-color: antiquewhite;
  border: 2px solid black;
  border-radius: 25px 25px 0 0;
  text-align:center;
  position: relative;
  z-index: 1;
`
const Header = () =>{
    return(
            <Head/>
    )
}

export default Header;
