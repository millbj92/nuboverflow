import * as React from 'react';
import StyledSearchbar from './StyledSearchbar';

const Searchbar: React.FC = () => {
    return (
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <StyledSearchbar></StyledSearchbar>
        </div>
    );
};

export default Searchbar;
