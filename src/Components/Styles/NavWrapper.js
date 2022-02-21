import styled from "styled-components";

const NavWrapper = styled.nav`
    background : var(--mainBlue);
    .nav-link {
        color : var(--mainWhite) !important;
        font-size : 1.2rem;
        text-transform : capitalize;
        transition : all 0.5s ease-in-out;
        padding-top: 0.5rem;
    }
    .navbar-brand {
        text-transform : capitalize;
        transition : all 0.5s ease-in-out;
    }
    // .nav-link:hover {
    //     font-size : 1.3rem;
    // }
    // .navbar-brand:hover {
    //     font-size : 1.3rem;
    // }
`;

export default NavWrapper;