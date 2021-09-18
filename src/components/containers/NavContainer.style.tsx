import styled from 'styled-components';

export const NavContainer = styled.nav`
    width: 100%;
    height: 4.5rem;
    padding: 0 10rem;
    background-image: linear-gradient(
        to top right,
        ${(props) => props.theme.colors.colorPrimary},
        ${(props) => props.theme.colors.colorPrimaryLight}
    );
    display: flex;
`;
