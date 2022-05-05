import React from 'react';
import Modal from '../Modal';
import { signOut } from 'next-auth/react';
import { ModalTitle, ContentWrapper, ButtonsWrapper } from './styles';
import { SecondaryButton, MainButton } from '../../../styles/globalStyles';

interface Props {
    isToggle: boolean;
    toggle: (arg: boolean) => void;
}

export const LogoutConfirmation: React.FC<Props> = (props) => {
    const { isToggle = false, toggle = () => {} } = props;

    return (
        <Modal isToggle={isToggle} toggle={toggle}>
            <ContentWrapper>
                <ModalTitle>Are you sure you want to log out?</ModalTitle>
                <ButtonsWrapper>
                    <SecondaryButton
                        onClick={() => toggle(false)}
                        style={{ width: '50%', marginRight: '15px', padding: '0', height: '48px', fontWeight: '700' }}
                    >
                        Cancel
                    </SecondaryButton>
                    <MainButton
                        onClick={() => signOut()}
                        style={{
                            width: '50%',
                            padding: '0',
                            height: '48px',
                            fontWeight: '700',
                            boxShadow:
                                '0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08)',
                        }}
                    >
                        Log out
                    </MainButton>
                </ButtonsWrapper>
            </ContentWrapper>
        </Modal>
    );
};

export default LogoutConfirmation;
