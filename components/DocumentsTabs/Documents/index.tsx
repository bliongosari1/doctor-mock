import React, { useState } from 'react';
import { Select } from '../../Custom/Select';
import Details from '../Details';
import { AllInputWrapper, FormTitle, FormWrapper, ColumnWrapper, RowWrapper } from './styles';
import MedicalCertificate from './MedicaleCertificate';
import CarerCertificate from './CarerCertificate';
import ReferralLetter from './ReferralLetter';

interface Props {
    height: number;
    width: number;
}

const documentTypeOptions = [
    {
        label: 'Medical certificate',
    },
    {
        label: 'Carer’s certificate',
    },
    {
        label: 'Referral letter',
    },
];

export const Documents: React.FC<Props> = (props) => {
    const { height, width } = props;
    const [documentType, setDocumentType] = useState('');

    const getDocumentType = () => {
        switch (documentType) {
            case 'Medical certificate':
                return (
                    <MedicalCertificate
                        documentType={documentType}
                        setDocumentType={setDocumentType}
                        height={height}
                        width={width}
                    />
                );
            case 'Referral letter':
                return (
                    <ReferralLetter
                        documentType={documentType}
                        setDocumentType={setDocumentType}
                        height={height}
                        width={width}
                    />
                );
            case 'Carer’s certificate':
                return (
                    <CarerCertificate
                        documentType={documentType}
                        setDocumentType={setDocumentType}
                        height={height}
                        width={width}
                    />
                );
            default:
                return;
        }
    };

    return (
        <FormWrapper style={{ maxHeight: height - 50 }}>
            <Details />
            {!documentType ? (
                <AllInputWrapper>
                    <RowWrapper>
                        <ColumnWrapper style={{ flex: 1 }}>
                            <FormTitle>Document type</FormTitle>
                            <Select
                                style={{
                                    border: '1px solid #C5CEE0',
                                    background: 'white',
                                    padding: '4px 0px 4px 15px',
                                }}
                                options={documentTypeOptions}
                                placeholder="Please select"
                                value={documentType}
                                setValue={setDocumentType}
                                iconSize={25}
                                menuStyle={{}}
                                menuItemStyle={{ padding: '11px 0' }}
                            ></Select>
                        </ColumnWrapper>
                    </RowWrapper>
                </AllInputWrapper>
            ) : (
                getDocumentType()
            )}
        </FormWrapper>
    );
};
