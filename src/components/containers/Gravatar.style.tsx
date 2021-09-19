import styled from 'styled-components';

export const GravatarContainer = styled.div`
    border: 1px solid ${(props) => props.theme.colors.colorAccent};
    border-radius: 50%;
    width: 42px;
    height: 42px;
    vertical-align: middle;
    overflow: hidden;
    object-fit: contain;
    margin-right: 0.5rem;
`;
