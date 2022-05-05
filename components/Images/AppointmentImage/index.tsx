import React from 'react';
import StyledSVG from '../../StyledSVG';
import chatIcon from '../../../public/assets/icons/chat.svg';
import voiceIcon from '../../../public/assets/icons/phone.svg';
import videoIcon from '../../../public/assets/icons/video.svg';
// import { APPOINTMENT_BACKGROUND_COLORS, APPOINTMENT_TEXT_COLORS } from '../../../constants';
import * as constants from '../../../constants';

type AppointmentImage = {
    [key: string]: string;
};

const appointmentImage: AppointmentImage = {
    [constants.CHAT]: chatIcon,
    [constants.VOICE_CALL]: voiceIcon,
    [constants.VIDEO_CALL]: videoIcon,
};

interface Props {
    type?: string;
    status?: string;
    width?: number;
    height?: number;
}

const CANCELLED_FILL = '#C5CEE0';

export const AppoinmentType: React.FC<Props> = (props) => {
    const { type = 'Voice Call', width = 15, height = 15, status = '' } = props;

    return (
        <StyledSVG
            src={appointmentImage[type] ? appointmentImage[type] : appointmentImage['Voice Call']}
            width={width}
            color={status === 'Cancelled' ? CANCELLED_FILL : 'undefined'}
            height={height}
        ></StyledSVG>
    );
};

export default AppoinmentType;
