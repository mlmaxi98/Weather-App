import styled from 'styled-components'


const azul = 'rgba(0,155,255,1)'

export const CardDiv = styled.div`  
  position: relative;
  margin: 10px;
  padding:10px;
  width: 18rem;
  background: linear-gradient(45deg, ${azul}  0%, rgba(9,121,118,1) 100%);
  border-radius: 5px;
  box-shadow: 0px 10px 20px rgb(0, 195, 255);
  text-shadow: 2px 2px 2px rgb(51, 50, 50);
  transition: 0.5s;
  .titular{
  font-size: 30px;
  transition: 0.5s;
  padding: 0 50px;
  &:hover{
  text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px rgb(0, 195, 255), 0 0 30px rgb(0, 195, 255), 0 0 40px rgb(0, 195, 255), 0 0 55px rgb(0, 195, 255), 0 0 75px rgb(0, 195, 255), -19px 2px 2px rgba(11,39,206,0), -19px 2px 2px rgba(11,39,206,0);
  }
}


.temperaturas{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  margin: 5px;
  font-size: 20px;
}
.cierre{
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px 10px;
  background-color: red;
  text-align: center;
  color:white;
  border: 2px solid red;
  border-radius: 4px;
  transition: 0.5s;
  &:hover{
    background-color: transparent;
    border: 1px solid black
  }
}
`