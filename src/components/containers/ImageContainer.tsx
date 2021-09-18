import styled from 'styled-components';

export const ImageContainer = styled.a`
    box-sizing: content-box;
    padding: 12px;
    display: flex;
    align-items: center;
    background-color: transparent;
    object-fit: contain;
    &:hover {
        background-color: rgba(186, 191, 195, 0.8);
    }
`;
