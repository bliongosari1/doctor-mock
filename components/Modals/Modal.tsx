import React from 'react';
import ExitIcon from '../../public/assets/icons/cancel_lg.svg';
import Image from 'next/image';
import { ModalContentWrapper, ExitButton, CustomModal } from './styles';
import { ClickAwayListener } from '@mui/material';

interface Props {
    isToggle: boolean;
    toggle: (arg: boolean) => void;
    children?: React.FC | [React.FC] | React.ReactFragment;
    noExitButton?: boolean;
    style?: React.CSSProperties;
    disableClickAway?: boolean;
}

export const PreviousConsultModal: React.FC<Props> = (props) => {
    const {
        isToggle = false,
        toggle = () => {},
        children,
        noExitButton = false,
        style = {},
        disableClickAway = false,
    } = props;

    return (
        <CustomModal
            open={isToggle}
            onClose={() => toggle(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ClickAwayListener onClickAway={() => (disableClickAway ? {} : toggle(false))}>
                <ModalContentWrapper style={style}>
                    {!noExitButton && (
                        <ExitButton onClick={() => toggle(false)}>
                            <Image src={ExitIcon} height={30} width={30} alt="" />
                        </ExitButton>
                    )}
                    {children}
                </ModalContentWrapper>
            </ClickAwayListener>
        </CustomModal>
    );
};

export default PreviousConsultModal;
