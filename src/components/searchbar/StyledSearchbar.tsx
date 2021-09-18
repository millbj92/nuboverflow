import styled from 'styled-components';

const StyledSearchbar = styled.input`
    width: 35%;
    height: 1.75rem;
    border: solid 1px ${(props) => props.theme.colors.colorGray};
    border-radius: 3px;
`;

export default StyledSearchbar;
