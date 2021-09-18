import * as React from 'react';
import { StyledNavbar } from './StyledNavbar';
import logo_name from '../../assets/images/logo_name.png';
import Searchbar from '../searchbar/Searchbar';
import { ImageContainer } from '../containers/ImageContainer';

const Navbar: React.FC = () => {
    return (
        <StyledNavbar>
            <ImageContainer>
                <img style={{ objectFit: 'contain', height: '100%' }} src={logo_name} />
            </ImageContainer>
            <Searchbar></Searchbar>
        </StyledNavbar>
    );
};

export default Navbar;
