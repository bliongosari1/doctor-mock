import React from 'react';
import { AvatarWrapper, AvatarBackground, OnlineStatus } from './styles';
// import ProfileImg from '../../../../public/assets/images/profile.png';
const ProfileImg = require('../../../../public/assets/images/profile.jpg');
interface Props {}

export const AvatarStatus: React.FC<Props> = () => {
    return (
        <>
            <AvatarWrapper>
                <AvatarBackground>
                    <img src={ProfileImg} height={36} width={36} alt="profile" />
                </AvatarBackground>
                <OnlineStatus></OnlineStatus>
            </AvatarWrapper>
        </>
    );
};

export default AvatarStatus;
