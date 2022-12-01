import styled from 'styled-components';

export const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background-color: magenta;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
`;

export const SiteName = styled.h1`
    font-size: 30px;
`;

export const LinkContainer = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LinkName = styled.a`
    text-decoration: none;
    color: black;
`;
