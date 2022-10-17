import styled from "styled-components";
// ===========================
export const Button = styled.button`  
  margin-right: 15px; 
  min-width: 100px;
  height: 40px;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  color: #ffffff;
  background-color:  #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-color: transparent;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus{   
    scale: 1.1;
  }
  &:active{
    border-color: #2a2a2a;
  }
`