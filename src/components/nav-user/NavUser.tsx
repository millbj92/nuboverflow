import React from 'react';
import { GravatarContainer } from '../containers/Gravatar.style';

const NavUser: React.FC = () => {
    return (
        <div style={{ marginRight: '.5rem' }}>
            <GravatarContainer email="test@gmail.com" />
        </div>
    );
};

export default NavUser;
