import React, { useState, useEffect } from 'react';
import { Select } from '../../Custom/Select';
import {
    AllInputWrapper,
    FormTitle,
    ColumnWrapper,
    RowWrapper,
    TextArea,
    CheckboxStyled,
    ConfirmationText,
} from './styles';
import Image from 'next/image';
import CheckedIcon from '../../../public/assets/icons/checkedIcon.svg';
import UncheckedIcon from '../../../public/assets/icons/unchecked.svg';
import UncheckedIconWarning from '../../../public/assets/icons/checkbox_warning.svg';
import { MainButton } from '../../../styles/globalStyles';
import { SingleLineInput } from '../Tests/styles';
import Alert from '../../Alert';

interface Props {
    height: number;
    width: number;
    documentType: string;
    setDocumentType: (arg: string) => void;
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

export const ReferralLetter: React.FC<Props> = (props) => {
    const { documentType, setDocumentType } = props;

    // Confirmation states
    const [successOpen, setSuccessOpen] = useState(false);
    const [dangerOpen, setDangerOpen] = useState(false);
    const [inputConfirmed, setInputConfirmed] = useState(false);
    const [warning, setWarning] = useState(false);

    // Inputs
    const [doctorName, setDoctorName] = useState('');
    const [doctorAddress, setDoctorAddress] = useState('');
    const [referralValue, setReferralValue] = useState('');

    const handleReferralChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReferralValue(e.target.value);
    };

    const valid = inputConfirmed && doctorName && doctorAddress && referralValue;

    const handleCreate = () => {
        if (valid) {
            // make pdf
            setDangerOpen(false);
            setSuccessOpen(true);
        } else {
            setWarning(true);
            setDangerOpen(true);
        }
    };

    useEffect(() => {
        setWarning(false);
    }, [inputConfirmed, doctorName, doctorAddress, referralValue]);

    return (
        <AllInputWrapper>
            <Alert
                type={'success'}
                open={successOpen}
                setOpen={setSuccessOpen}
                primaryMessage="Referral letter created successfully"
                secondaryMessage="Added to attachments in notes tab"
            />
            <Alert
                type={'danger'}
                open={dangerOpen}
                setOpen={setDangerOpen}
                primaryMessage="Please complete the required fields to continue"
                secondaryMessage="Required fields are highlighted in red"
            />
            <RowWrapper>
                <ColumnWrapper style={{ flex: 1 }}>
                    <FormTitle>Document type</FormTitle>
                    <Select
                        style={{ border: '1px solid #C5CEE0', background: 'white', padding: '4px 0px 4px 15px' }}
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
            <RowWrapper>
                <ColumnWrapper style={{ flex: 1 }}>
                    <FormTitle warning={warning && !doctorName}>Accepting doctor’s name</FormTitle>
                    <SingleLineInput
                        warning={warning && !doctorName}
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                    />
                </ColumnWrapper>
                <ColumnWrapper style={{ flex: 1 }}>
                    <FormTitle warning={warning && !doctorAddress}>Accepting doctor’s address</FormTitle>
                    <SingleLineInput
                        warning={warning && !doctorAddress}
                        value={doctorAddress}
                        onChange={(e) => setDoctorAddress(e.target.value)}
                    />
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper>
                <ColumnWrapper style={{ width: '100%' }}>
                    <FormTitle warning={warning && !referralValue}>Referral Letter</FormTitle>
                    <TextArea
                        warning={warning && !referralValue}
                        rows={4}
                        cols={30}
                        value={referralValue}
                        onChange={handleReferralChange}
                        placeholder="Enter your message"
                    />
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper style={{ width: '100%', alignItems: 'center', gap: '0px', marginLeft: '5px' }}>
                <CheckboxStyled
                    icon={<Image src={warning ? UncheckedIconWarning : UncheckedIcon} height={18} width={18} alt="" />}
                    checkedIcon={<Image src={CheckedIcon} height={18} width={18} alt="" />}
                    disableRipple
                    checked={inputConfirmed}
                    onChange={(e) => {
                        setInputConfirmed(e.target.checked);
                    }}
                />
                <ConfirmationText warning={warning && !inputConfirmed}>
                    I confirm I have reviewed the contents of the prescription and agree all relevant details are
                    correct
                </ConfirmationText>
            </RowWrapper>
            <MainButton
                disabledMock={!valid}
                onClick={() => handleCreate()}
                style={{ width: '100%', marginTop: '10px' }}
            >
                Create Referral
            </MainButton>
        </AllInputWrapper>
    );
};

export default ReferralLetter;
