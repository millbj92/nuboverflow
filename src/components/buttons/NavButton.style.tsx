import styled from 'styled-components';

export const NavButton = styled.button`
    display: inline-flex;
    height: 100%;
    width: 47px;
    color: ${(props) => props.theme.colors.colorPrimaryDark};
    background-color: transparent;
    justify-content: center;
    border: none;
    transition: all 0.1s ease-out;
    cursor: pointer;
    position: relative;
    & svg,
    span {
        font-size: 2rem;
        height: 100%;
        width: 100%;
        transition: all 0.1s ease-out;
    }

    &:active {
        & svg,
        span {
            transform: translateY(0.2rem) !important;
        }
    }

    &:hover {
        color: ${(props) => props.theme.colors.colorDark};
        transform: translateY(-0.2rem);
        & svg,
        span {
            transform: scaleX(1.1) scaleY(1.1);
        }
    }
`;
