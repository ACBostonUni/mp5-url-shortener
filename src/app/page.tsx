"use client"

import {useState} from "react";


import styled from "styled-components";
import {StyledMain, StyledPageTitle, StyledSubText, TitleContainer} from "@/app/Styled";




const StyledShortenerContainer = styled.div`
    margin: auto;
    padding: 1% 2%;
    width: 60%;
    border: rgb(229 231 235 / 0.99) solid 2px;
    background: #fafafa;

    border-radius: 30px;

`




const StyledPromptText = styled.p`
  text-align: left;
  margin: 3% 0 3% 0;
  font: bold calc(4px + 1.1vw) "Lucida Sans Typewriter", sans-serif
  
`

const StyledAliasContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto
`
const StyledSiteURLText = styled.p`
  text-align: left;
  font: calc(6px + 1.1vw) "", sans-serif;
  color: #687666;
  margin: auto 1% auto auto
`

const StyledURLInput = styled.input`
  text-align: center;
  padding: 1% 0;
  width: 100%;
  margin: auto;
  background-color: #fafafa;
  border: rgb(47 143 85 / 0.91) solid 3px;
  border-radius: 15px;
  color: #171717;
  font: calc(4px + 1.2vw) "Lucida Sans Typewriter", sans-serif;




`

const StyledAliasInput = styled.input`
  text-align: center;
  padding: 1.5% 0;
  width: 35%;
  margin: auto auto auto 1%;
  background-color: #fafafa;
  border: rgb(47 143 85 / 0.91) solid 3px;
  border-radius: 15px;
  color: #171717;
  font: calc(4px + 1.1vw) "Lucida Sans Typewriter", sans-serif;
  
  

`


const StyledButton = styled.button`

    width: 70%;
    height: 50%;
    background-color: rgb(48 180 100 / 0.91);
    border: transparent;
    border-radius: 15px;
    color: white;
    font: bold calc(7px + 1.1vw) "Lucida Sans Typewriter", sans-serif;
    margin: 2.5% auto;
    padding: 1.5%;


    transition: background-color 0.2s ease-in-out;

    /* 2. Use the ampersand (&) symbol */
    &:hover {
        background-color: rgb(139 217 171);
    }

`
export default function Home() {
    const [url , setUrl] = useState("");
    const [alias, setAlias] = useState("");
  return (
    <StyledMain>


      <TitleContainer>

        <StyledPageTitle

        >URL Shortener

        </StyledPageTitle>

        <StyledSubText>
        Create a sharable shortened URL
        </StyledSubText>
      </TitleContainer>


      <StyledShortenerContainer>


          <StyledPromptText>
          Enter the URL you wish to shorten:
          </StyledPromptText>

          <StyledURLInput  value ={url} placeholder = {"ex. https://lol.com"} onChange={(event) => setUrl(event.target.value)}/>

          <StyledPromptText>
            Enter Your Custom Alias:
          </StyledPromptText>

        <StyledAliasContainer>

          <StyledSiteURLText>
            https://url-shortener.vercel.app/
          </StyledSiteURLText>

          <StyledAliasInput value ={alias} placeholder={"Your Alias Here"} onChange={(event) => setAlias(event.target.value)}/>


        </StyledAliasContainer>


        <StyledButton type = "button">

            Shorten
        </StyledButton>
      </StyledShortenerContainer>


    </StyledMain>
  );
}
