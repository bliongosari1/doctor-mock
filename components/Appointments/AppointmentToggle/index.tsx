import React, { useState } from 'react';
import Image from 'next/image';
import CancelIcon from '../../../public/assets/icons/cancel.svg';
import ReschedIcon from '../../../public/assets/icons/reschedule.svg';
import { StyledMenu, MenuItemStyled, MenuItemStyledWrapper, MenuItemText } from './styles';
import CancelModal from '../../Modals/Appointment/CancelAppointment';
import theme from '../../../theme';

interface Props {
    anchorEl: HTMLDivElement | null;
    open: boolean;
    handleClose: () => void;
}

export const AppoinmentCancel: React.FC<Props> = (props) => {
    const { anchorEl, open, handleClose } = props;
    const [cancelModalOpen, setCancelModalOpen] = useState(false);
    return (
        <StyledMenu
            id="styled-menu"
            MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            <MenuItemStyled onClick={() => {}}>
                <MenuItemStyledWrapper
                    style={{
                        borderBottom: `1px solid ${theme.palette.divider}`,
                    }}
                >
                    <Image src={ReschedIcon} height={22} width={22} alt="Resched" />
                    <MenuItemText>Reschedule</MenuItemText>
                </MenuItemStyledWrapper>
            </MenuItemStyled>
            <MenuItemStyled
                onClick={() => {
                    setCancelModalOpen(true);
                }}
            >
                <MenuItemStyledWrapper
                    style={{
                        borderBottom: `1px solid ${theme.palette.divider}`,
                    }}
                >
                    <Image src={CancelIcon} height={22} width={22} alt="Resched" />
                    <MenuItemText>Cancel Appt</MenuItemText>
                </MenuItemStyledWrapper>
            </MenuItemStyled>
            <CancelModal isToggle={cancelModalOpen} toggle={setCancelModalOpen} />
        </StyledMenu>
    );
};

export default AppoinmentCancel;
