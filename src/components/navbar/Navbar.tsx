import * as React from 'react';
<<<<<<< HEAD
import { NavContainer } from '../containers/NavContainer.style';
import logo_name from '../../assets/images/logo_name.png';
import Searchbar from '../searchbar/Searchbar';
import { ImageContainer } from '../containers/ImageContainer.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faComment, faQuestionCircle } from '@fortawesome/pro-light-svg-icons';
import { NavButtonContainer } from '../containers/NavButtons.style';
import { NavButton } from '../buttons/NavButton.style';
import { faTrophyAlt } from '@fortawesome/pro-regular-svg-icons';
import { NavUserContainer } from '../containers/NavUserContainer.style';
import NavUser from '../nav-user/NavUser';
import { faCertificate, faMedal } from '@fortawesome/pro-solid-svg-icons';
import { useTheme } from 'styled-components';

const Navbar: React.FC = () => {
    const { colors } = useTheme();
    return (
        <NavContainer>
            <div style={{ display: 'flex', width: '100%' }}>
                <ImageContainer style={{ marginRight: '2.5rem' }}>
                    <img style={{ objectFit: 'contain', height: '100%' }} src={logo_name} />
                </ImageContainer>
                <Searchbar></Searchbar>
            </div>
            <NavUserContainer>
                <NavUser></NavUser>
                <span style={{ marginRight: '0.5rem' }}>
                    <strong>1,800</strong>
                </span>
                <span style={{ color: 'gold', display: 'inline-flex', marginRight: '.5rem', fontSize: '1.2rem' }}>
                    <FontAwesomeIcon icon={faMedal} /> 1
                </span>
                <span style={{ color: '#B4B8BC', display: 'inline-flex', marginRight: '.5rem', fontSize: '1.2rem' }}>
                    <FontAwesomeIcon icon={faMedal} /> 8
                </span>
                <span style={{ color: '#CD7F32', display: 'inline-flex', marginRight: '.5rem', fontSize: '1.2rem' }}>
                    <FontAwesomeIcon icon={faMedal} /> 32
                </span>
            </NavUserContainer>
            <NavButtonContainer>
                <NavButton style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '20%', right: '2px', zIndex: 10 }}>
                        <div style={{ position: 'relative' }}>
                            <span
                                style={{
                                    position: 'absolute',
                                    top: '1px',
                                    right: '0.5px',
                                    zIndex: 11,
                                    fontSize: '14px',
                                }}
                            >
                                1
                            </span>
                            <FontAwesomeIcon
                                style={{ fontSize: '18px', color: colors.colorAccent }}
                                icon={faCertificate}
                            />
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faComment} />
                </NavButton>
                <NavButton>
                    <FontAwesomeIcon icon={faTrophyAlt} />
                </NavButton>
                <NavButton>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                </NavButton>
                <NavButton>
                    <FontAwesomeIcon icon={faCogs} />
                </NavButton>
            </NavButtonContainer>
        </NavContainer>
=======
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
>>>>>>> develop
    );
};

export default Navbar;
