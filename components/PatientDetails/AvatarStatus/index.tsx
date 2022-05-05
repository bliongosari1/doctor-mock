import React from 'react';
import { AvatarWrapper, AvatarBackground, OnlineStatus } from './styles';
const ProfileImg = require('../../../public/assets/images/profile.jpg');
interface Props {}

export const AvatarStatus: React.FC<Props> = () => {
    return (
        <>
            <AvatarWrapper>
                <AvatarBackground>
                    <img src={ProfileImg} height={60} width={60} alt="profile" />
                </AvatarBackground>
                <OnlineStatus></OnlineStatus>
            </AvatarWrapper>
        </>
    );
};

export default AvatarStatus;
