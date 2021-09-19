import styled from 'styled-components';
import BadgeComponent from './Badge';

const Badge = styled(BadgeComponent)`
    position: absolute;
    top: 20%;
    right: 2px;
    z-index: 10;

    & .badge-icon-container {
        position: relative;

        & .badge-text {
            position: absolute;
            top: 1px;
            right: 0px;
            z-index: 11;
            font-size: 14px;
            font-weight: 600;
        }
        & svg {
            font-size: 18px;
            color: ${(props) => props.badgeColor};
        }
    }
`;

export default Badge;
