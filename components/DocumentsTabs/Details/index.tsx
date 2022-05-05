import React from 'react';
import GPDetails from './GPDetails';
import PatientDetails from './PatientDetails';
import { DocumentDetails } from './styles';

interface Props {}

export const MedicalCertificate: React.FC<Props> = () => {
    return (
        <DocumentDetails>
            <GPDetails />
            <PatientDetails />
        </DocumentDetails>
    );
};

export default MedicalCertificate;
