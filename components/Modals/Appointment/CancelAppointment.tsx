import React, { useState } from 'react';
import theme from '../../../theme';
import TrashRed from '../../../public/assets/icons/trash_red.svg';
import Image from 'next/image';
import Modal from '../Modal';
import { ModalTitle, GreySubtitle, ContentWrapper, TextArea, ButtonsWrapper } from './styles';
import { SecondaryButton } from '../../../styles/globalStyles';

interface Props {
    isToggle: boolean;
    toggle: (arg: boolean) => void;
}

export const CancelAppointment: React.FC<Props> = (props) => {
    const { isToggle = false, toggle = () => {} } = props;
    const [value, setValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return (
        <Modal isToggle={isToggle} toggle={toggle}>
            <ContentWrapper>
                <ModalTitle>Are you sure you want to cancel this appointment</ModalTitle>
                <GreySubtitle> The patient will not be charged for this appointment </GreySubtitle>
                <TextArea
                    rows={4}
                    cols={30}
                    value={value}
                    onChange={handleInputChange}
                    placeholder="Add a note to your patient"
                />

                <ButtonsWrapper>
                    <SecondaryButton style={{ width: '50%', marginRight: '10px', padding: '0', height: '48px' }}>
                        No, go back
                    </SecondaryButton>
                    <SecondaryButton
                        style={{ width: '50%', color: theme.palette.text.red, padding: '0', height: '48px' }}
                    >
                        <Image src={TrashRed} height={22} width={22} alt="deleteIcon" style={{ marginRight: '5px' }} />
                        <span style={{ marginLeft: '5px' }}>Cancel Appointment</span>
                    </SecondaryButton>
                </ButtonsWrapper>
            </ContentWrapper>
        </Modal>
    );
};

export default CancelAppointment;
