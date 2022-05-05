import React from 'react';
import { MenuItemStyled, StyledMenu, MenuItemStyledWrapper, MenuItemText } from './styles';
import AppointmentImage from '../../Images/AppointmentImage';
import theme from '../../../theme';

interface Props {
    anchorEl: Element | null;
    open: boolean;
    setOpen: (arg: boolean) => void;
}

export const AppointmentOptions: React.FC<Props> = (props) => {
    const { anchorEl, open, setOpen } = props;
    // const handleClick = (event: ) => {
    //   setAnchorEl(event.currentTarget);
    // };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        // <MenuStyled
        //     id="basic-menu"
        //     anchorEl={anchorEl}
        //     open={open}
        //     anchorOrigin={{
        //         vertical: 'bottom',
        //         horizontal: 'right',
        //     }}
        //     transformOrigin={{
        //         vertical: 'top',
        //         horizontal: 'right',
        //     }}
        //     onClose={handleClose}
        //     MenuListProps={{
        //         'aria-labelledby': 'basic-button',
        //     }}
        // >
        //     <MenuItemStyled onClick={handleClose}>
        //         <AppointmentImage height={20} width={20} type="Chat" />
        //         <MenuItemText>Chat</MenuItemText>
        //     </MenuItemStyled>
        //     <MenuItemStyled onClick={handleClose}>
        //         <AppointmentImage height={20} width={20} type="Phone Call" />
        //         <MenuItemText>Phone Call</MenuItemText>
        //     </MenuItemStyled>
        //     <MenuItemStyled onClick={handleClose}>
        //         <AppointmentImage height={20} width={20} type="Video Call" />
        //         <MenuItemText>Video Call</MenuItemText>
        //     </MenuItemStyled>
        // </MenuStyled>
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
                    <AppointmentImage height={20} width={20} type="Chat" />
                    <MenuItemText>Chat</MenuItemText>
                </MenuItemStyledWrapper>
            </MenuItemStyled>
            <MenuItemStyled onClick={() => {}}>
                <MenuItemStyledWrapper
                    style={{
                        borderBottom: `1px solid ${theme.palette.divider}`,
                    }}
                >
                    <AppointmentImage height={20} width={20} type="Phone Call" />
                    <MenuItemText>Phone Call</MenuItemText>
                </MenuItemStyledWrapper>
            </MenuItemStyled>
            <MenuItemStyled onClick={() => {}}>
                <MenuItemStyledWrapper
                    style={{
                        borderBottom: `1px solid ${theme.palette.divider}`,
                    }}
                >
                    <AppointmentImage height={20} width={20} type="Video Call" />
                    <MenuItemText>Video Call</MenuItemText>
                </MenuItemStyledWrapper>
            </MenuItemStyled>
        </StyledMenu>
    );
};
