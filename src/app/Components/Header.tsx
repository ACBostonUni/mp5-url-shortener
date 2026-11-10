import Link from "next/link";
import styled from "styled-components";


const HeaderStyling = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background: linear-gradient(to bottom, #fdb9ff 20%, #fafafa 100%);

`;

const StyledH2 = styled.h2`
    font-family: "DEM-MO-Proportional", sans-serif;
    font-size: 225%;
    font-weight: 700;
    padding: 1.5% 1%;
    color: #171717;
    @media screen and (max-width: 800px) {
        
        font-size: 150%;
        
    }
`;

const Nav = styled.nav`
    padding: 0.5%;
    margin: 1%;
    width: 50%;
    text-align: right;
`;

const NavLink = styled(Link)`
    padding: 1%;
    margin: 1%;
    font-size: 125%;
    font-weight: bold;
    font-family: "DEM-MO-Proportional", sans-serif;
    color: #171717;

    @media screen and (max-width: 800px) {

        font-size: 100%;

    }

    &:hover {
        text-decoration: underline;
    }
`;

export default function Header() {
    return (
        <HeaderStyling>
            <StyledH2>WebTools</StyledH2>

            <Nav>
                <NavLink href="/">URL Shortener</NavLink>
                <NavLink href="/Coming_Soon">More Tools</NavLink>
            </Nav>
        </HeaderStyling>
    );
}