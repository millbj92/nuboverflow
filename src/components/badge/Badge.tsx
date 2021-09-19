import { faCertificate } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface IBadgeProps {
    notificationCount: number;
    badgeColor: string;
    className?: string;
}

const BadgeComponent: React.FunctionComponent<IBadgeProps> = ({ notificationCount, className }) => {
    return (
        <div className={className}>
            <div className="badge-icon-container">
                <span className="badge-text">{notificationCount}</span>
                <FontAwesomeIcon className="badge-icon" icon={faCertificate} />
            </div>
        </div>
    );
};

export default BadgeComponent;
