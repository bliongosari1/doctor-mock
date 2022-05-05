import React from 'react';
import Modal from '../Modal';
import { ContentWrapper } from './styles';
import PatientDetails from '../../PatientDetails';
import { Patient } from '../../../types/api';

interface Props {
    isToggle: boolean;
    toggle: (arg: boolean) => void;
    patient: Patient;
}

export const CancelAppointment: React.FC<Props> = (props) => {
    const { isToggle = false, toggle = () => {}, patient } = props;

    return (
        <Modal isToggle={isToggle} toggle={toggle} style={{ padding: '0' }} noExitButton>
            <ContentWrapper>
                <PatientDetails
                    style={{ position: 'absolute', padding: '16px 0 0' }}
                    ddxButton={false}
                    patient={patient}
                    defaultTab={4}
                />
            </ContentWrapper>
        </Modal>
    );
};

export default CancelAppointment;
