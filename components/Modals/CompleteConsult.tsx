import React, { useState } from 'react';
// import { AccordionDetails, Box, Typography } from '@mui/material';
import Modal from './Modal';
import { ModalTitle, ModalGreySubtitle, ModalTitleWrapper, Line } from './styles';
import { AppointmentType } from './CompleteConsultSteps/AppointmentType';
import { Diagnosis } from './CompleteConsultSteps/Diagnosis';
import { Notes } from './CompleteConsultSteps/Notes';

interface Props {
    isToggle: boolean;
    toggle: (arg: boolean) => void;
}

export const CompleteConsult: React.FC<Props> = (props) => {
    const { isToggle = false, toggle = () => {} } = props;
    const [step, setStep] = useState(1);

    const renderPage = () => {
        switch (step) {
            case 1:
                return <AppointmentType goNext={() => setStep(2)} />;
            case 2:
                return <Diagnosis goNext={() => setStep(3)} goPrev={() => setStep(1)} />;
            case 3:
                return <Notes goNext={() => setStep(3)} goPrev={() => setStep(2)} />;
            default:
                return <AppointmentType goNext={() => setStep(2)} />;
        }
    };
    return (
        <Modal style={{ padding: '32px 27px', minWidth: '50vw' }} isToggle={isToggle} toggle={toggle}>
            <>
                <ModalTitleWrapper>
                    <ModalTitle style={{ marginBottom: '5px' }}> Complete Consult </ModalTitle>
                    <ModalGreySubtitle> Patient {step <= 2 ? 'Diagnosis' : 'Outcome'} </ModalGreySubtitle>
                </ModalTitleWrapper>
                <Line />
                {renderPage()}
            </>
        </Modal>
    );
};

export default CompleteConsult;
