import React from 'react';
import { StyledAlert } from './styles';
import Snackbar from '@mui/material/Snackbar';
import GreenTick from '../../public/assets/icons/green_tick.svg';
import Danger from '../../public/assets/icons/danger.svg';
import Image from 'next/image';

type AlertType = 'success' | 'danger';

interface Props {
    type?: AlertType;
    open: boolean;
    setOpen: (arg: boolean) => void;
    primaryMessage?: string;
    secondaryMessage?: string;
    duration?: number;
}

export const AppointmentDetails: React.FC<Props> = (props) => {
    const {
        type = 'success',
        primaryMessage,
        secondaryMessage,
        duration = 5000,
        open = true,
        setOpen = () => {},
    } = props;

    const handleClose = (reason: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={open}
            autoHideDuration={duration}
            onClose={(e, reason) => handleClose(reason)}
        >
            <StyledAlert
                severity="success"
                icon={<Image src={type === 'danger' ? Danger : GreenTick} height={24} width={25} />}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        minWidth: '400px',
                    }}
                >
                    {primaryMessage && <strong>{primaryMessage}</strong>}
                    {secondaryMessage && secondaryMessage}
                </div>
            </StyledAlert>
        </Snackbar>
    );
};

export default AppointmentDetails;
