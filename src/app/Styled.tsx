import styled from "styled-components";

export const StyledMain = styled.div`

  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom, #fafafa 10%, #c5ffdd 100%);
    padding: 2% 0;
  height: 100%;
  width: 100%;
    
    @media screen and (max-width: 1400px){
        height: 100vh;
        padding: 1% 0;
        
    }
`



export const TitleContainer = styled.div`

  text-align: center;
  padding: 2%;
  width: 70%;
  margin: 0.5% auto;
  
  border: transparent;
  border-radius: 30px;

`

export const StyledPageTitle = styled.h2`
  
  font-weight: bold;
  font-family: "DEM-MO-Proportional", sans-serif;
  font-size: calc(11px + 2vw);
  margin: 1% auto 2.5% auto;

    @media screen and (max-width: 1400px){
        font-size: calc(20px + 2vw);
    }
`

export const StyledSubText = styled.p`
  white-space: pre-wrap;
  color: rgb(100 116 139 / 0.98);
  font-size: calc(5px + 1.1vw);
  margin: 2.5% auto 1% auto;

  @media screen and (max-width: 1400px){
        calc(10px + 1.1vw);
}
`