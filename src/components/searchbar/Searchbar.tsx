import { faSearch } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { useTheme } from 'styled-components';
import { IconContainer } from '../containers/IconContainer.style';
import SearchInput from './SearchInput.style';

const Searchbar: React.FunctionComponent = () => {
    const { colors } = useTheme();
    return (
        <div
            style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                width: '40rem',
                flexGrow: 1,
            }}
        >
            <IconContainer color={colors.colorGray} style={{ position: 'absolute', top: '26px', left: '6px' }}>
                <FontAwesomeIcon icon={faSearch} />
            </IconContainer>
            <SearchInput placeholder="Search..."></SearchInput>
        </div>
    );
};

export default Searchbar;
