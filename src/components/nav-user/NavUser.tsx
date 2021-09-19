import { faMedal } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Gravatar from 'react-gravatar';
import { useTheme } from 'styled-components';
import IUser from '../../models/IUser';
import { GravatarContainer } from '../containers/Gravatar.style';
import { UserAwardContainer } from '../containers/UserAwardContainer.style';

interface IUserNavProps {
    user: IUser;
}

const NavUser: React.FunctionComponent<IUserNavProps> = (props) => {
    const { email, userScore, userAwards } = props.user;
    const { colors } = useTheme();
    return (
        <>
            <GravatarContainer>
                <Gravatar size={40} email={email} />
            </GravatarContainer>
            <span style={{ marginRight: '0.5rem' }}>
                <p style={{ letterSpacing: '1px' }}>{userScore}</p>
            </span>
            <UserAwardContainer color={colors.colorGold}>
                <FontAwesomeIcon icon={faMedal} style={{ marginRight: '5px', marginTop: '3px' }} />
                {userAwards.filter((x) => x.awardLevel === 2).length}
            </UserAwardContainer>
            <UserAwardContainer color={colors.colorSilver}>
                <FontAwesomeIcon icon={faMedal} style={{ marginRight: '5px', marginTop: '3px' }} />
                {userAwards.filter((x) => x.awardLevel === 1).length}
            </UserAwardContainer>
            <UserAwardContainer color={colors.colorBronze}>
                <FontAwesomeIcon icon={faMedal} style={{ marginRight: '5px', marginTop: '3px' }} />
                {userAwards.filter((x) => x.awardLevel === 0).length}
            </UserAwardContainer>
        </>
    );
};

export default NavUser;
