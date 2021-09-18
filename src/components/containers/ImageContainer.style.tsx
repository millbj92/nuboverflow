/* eslint-disable */
import styled from 'styled-components';
import { rgba } from 'polished';

export const ImageContainer = styled.a`
    box-sizing: content-box;
    padding: 12px;
    display: flex;
    align-items: center;
    background-color: transparent;
    object-fit: contain;
    transition: all 0.1s ease-out;
    &:hover {
        cursor: pointer;
        background-color: ${(props) => rgba(props.theme.colors.colorAccent, 0.6)};
    }
`;
