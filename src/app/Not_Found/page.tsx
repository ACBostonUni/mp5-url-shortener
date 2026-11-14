import {StyledPageTitle, StyledSubText, TitleContainer} from "@/app/Styled";
import styled from "styled-components";
const StyledMainDiffPage = styled.div`

  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom, #fafafa 20%, #c5ffdd 100%);
  height: 100vh;
  width: 100%;

`
export default function Coming_Soon(){

    return(

        <StyledMainDiffPage>


            <TitleContainer>

                <StyledPageTitle

                >Uh Oh.. That Page Can't Be Found

                </StyledPageTitle>

                <StyledSubText>
                    Check that your URL is correct
                </StyledSubText>
            </TitleContainer>


        </StyledMainDiffPage>

    );


}