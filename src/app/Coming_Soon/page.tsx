import {StyledPageTitle, StyledSubText, TitleContainer} from "@/app/Styled";
import styled from "styled-components";
const StyledMainDiffPage = styled.div`

  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom, #fafafa 20%, #c5ffdd 100%);
    padding: 2% 0;
  height: 100vh;
    
  width: 100%;

`
export default function Coming_Soon(){

    return(

            <StyledMainDiffPage>


                <TitleContainer>

                    <StyledPageTitle

                    >More Tools Are Coming Soon!

                    </StyledPageTitle>

                    <StyledSubText>
                        Stay tuned...
                    </StyledSubText>
                </TitleContainer>


            </StyledMainDiffPage>

        );


}