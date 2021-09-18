import styled from 'styled-components';

const Searchbar = styled.input`
    width: 35%;
    height: 2rem;
    border: solid 1px ${(props) => props.theme.colors.colorGray};
    padding-left: 26px;
    border-radius: 3px;
    vertical-align: middle;
    width: 100%;
    &:focus {
        outline: none;
    }
`;

export default Searchbar;
