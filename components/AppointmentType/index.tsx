import React from 'react';
import { APPOINTMENT_BACKGROUND_COLORS, APPOINTMENT_TEXT_COLORS } from '../../constants';
import { AppointmentTypeContainer, AppointmentTypeContainer__NoText } from './styles';
import AppointmentImage from '../Images/AppointmentImage';

interface Props {
    type?: string;
    length?: string;
    status?: string;
    noText?: boolean;
    style?: object;
}

export const AppoinmentType: React.FC<Props> = (props) => {
    const { type = 'Voice Call', length = '15 mins', noText = false, status = '' } = props;
    //   const theme = useTheme();

    return (
        <>
            {noText ? (
                <AppointmentTypeContainer__NoText
                    style={{
                        backgroundColor: APPOINTMENT_BACKGROUND_COLORS[status !== '' ? status : type],
                        color: APPOINTMENT_TEXT_COLORS[type],
                    }}
                >
                    <AppointmentImage height={20} width={20} type={type} status={status} />
                </AppointmentTypeContainer__NoText>
            ) : (
                <AppointmentTypeContainer
                    style={{
                        backgroundColor: APPOINTMENT_BACKGROUND_COLORS[type],
                        color: APPOINTMENT_TEXT_COLORS[type],
                    }}
                >
                    <AppointmentImage type={type} />
                    <span style={{ marginLeft: '3px' }}> {length} </span>
                </AppointmentTypeContainer>
            )}
        </>
    );
};

export default AppoinmentType;
