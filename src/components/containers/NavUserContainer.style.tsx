import { rgba } from 'polished';
import styled from 'styled-components';

export const NavUserContainer = styled.div`
    height: 100%;
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    width: 30rem;
    margin-left: 2rem;
    cursor: pointer;
    padding: 12px;
    background-color: transparent;
    transition: all 0.1s ease-out;

    &:hover {
        background-color: ${(props) => rgba(props.theme.colors.colorAccent, 0.6)};
    }
`;
