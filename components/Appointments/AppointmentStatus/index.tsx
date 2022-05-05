/* eslint-disable prettier/prettier */
import React from 'react';
import { AppointmentStatusStyled } from './styles';

interface Props {
    status?: string;
}

type ButtonColors = {
    [key: string]: string;
};

const buttonColors: ButtonColors = {
    'In progress': '#00C880',
    'Starts soon': '#F0B61F',
    Anytime: '#FF8298',
    Unread: '#1693BB',
    Incomplete: '#E95252',
};

export const AppoinmentStatus: React.FC<Props> = (props) => {
    const { status = '' } = props;
    return (
        <AppointmentStatusStyled style={{ backgroundColor: buttonColors[status] ? buttonColors[status] : '#E95252' }}>
            {status}
        </AppointmentStatusStyled>
    );
};

export default AppoinmentStatus;
