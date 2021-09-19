import * as React from 'react';
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
import IUser from '../../models/IUser';
//import Badge from '../badge/Badge';
import Badge from '../badge/Badge.style';
import { useTheme } from 'styled-components';

const mockUser: IUser = {
    userName: 'brandon',
    email: 'test@testemail.com',
    linkedin: 'https://linkedin.com/millbj92',
    github: 'https://github.com/millbj92',
    userScore: 1800,
    bio: `Hi! I'm Brandon. I've been programming now for about 15 years, and love it! Currently I've been focusing a lot on cloud technology: specifically architecture and development. I know mostly AWS but have worked a lot with Azure as well. Feel free to message me if you need any advice!`,
    profession: `Princiapal Consultant`,
    workPlace: 'Technossus',
    interests: [
        'C#',
        'Go',
        'Web Development',
        'Javascript',
        'Typescript',
        'React',
        'Angular',
        'AWS',
        'Cloud Development',
        'Cloud Architecture',
    ],
    userAwards: [
        {
            awardName: 'Getting Started',
            awardDescription: 'Answer one question correctly',
            awardLevel: 0,
            awardScore: 100,
        },
        {
            awardName: 'Test silver Award',
            awardDescription: 'Silver award desc',
            awardLevel: 1,
            awardScore: 300,
        },
        {
            awardName: 'Test Gold award',
            awardDescription: 'gold award desc',
            awardLevel: 2,
            awardScore: 500,
        },
    ],
};

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
                <NavUser user={mockUser}></NavUser>
            </NavUserContainer>
            <NavButtonContainer>
                <NavButton>
                    <Badge notificationCount={1} badgeColor={colors.colorGold} />
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
    );
};

export default Navbar;
