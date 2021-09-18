import styled from 'styled-components';

export const MenuButton = styled.div`
    color: ${(props) => props.theme.colors.colorAccent};
    transition: all 0.1s ease-out;
    cursor: pointer !important;

    &:hover {
        color: ${(props) => props.theme.colors.colorDark};
        transform: translateY(-0.1rem);
        & svg {
            transform: scaleX(1.04) scaleY(1.06);
        }
    }

    & svg {
        transition: all 0.2s ease-out;
    }

    &:active,
    &:focus svg {
        transform: translateY(0.2rem);
    }
`;
