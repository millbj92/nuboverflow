import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    width: 100%;
    height: 4.5rem;
    background-image: linear-gradient(
        to top right,
        ${(props) => props.theme.colors.colorPrimary},
        ${(props) => props.theme.colors.colorPrimaryLight}
    );
    display: flex;
    margin-left: auto;
    margin-right: auto;
`;
