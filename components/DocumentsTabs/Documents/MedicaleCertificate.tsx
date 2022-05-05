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
import DatePicker from '../../Custom/DatePicker';
import Image from 'next/image';
import DateRangePicker from '../../Custom/DateRangePicker';
import CheckedIcon from '../../../public/assets/icons/checkedIcon.svg';
import UncheckedIcon from '../../../public/assets/icons/unchecked.svg';
import UncheckedIconWarning from '../../../public/assets/icons/checkbox_warning.svg';
import isValidDate from '../../../helpers/validDate';
import { MainButton } from '../../../styles/globalStyles';
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

export const MedicalCertificate: React.FC<Props> = (props) => {
    const { width, documentType, setDocumentType } = props;
    const [value, setValue] = useState('');

    const [successOpen, setSuccessOpen] = useState(false);
    const [dangerOpen, setDangerOpen] = useState(false);
    const [inputConfirmed, setInputConfirmed] = useState(false);
    const [warning, setWarning] = useState(false);

    // Inputs
    const [validFrom, setValidFrom] = useState<Date | null>(new Date());
    const [validPeriod, setValidPeriod] = useState<[Date | null, Date | null]>([new Date(), null]);

    useEffect(() => {
        setWarning(false);
    }, [inputConfirmed, validFrom, validPeriod]);

    const valid = validFrom && validPeriod[0] && validPeriod[1] && inputConfirmed;

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

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return (
        <AllInputWrapper>
            <Alert
                type={'success'}
                open={successOpen}
                setOpen={setSuccessOpen}
                primaryMessage="Medical certificate created successfully"
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
                <ColumnWrapper>
                    <FormTitle warning={warning && !isValidDate(validFrom)}>Valid from</FormTitle>
                    <DatePicker
                        value={validFrom}
                        setValue={setValidFrom}
                        warning={warning && !isValidDate(validFrom)}
                        width={(width - 206) / 3}
                    ></DatePicker>
                </ColumnWrapper>
                <ColumnWrapper>
                    <FormTitle warning={warning && (!isValidDate(validPeriod[0]) || !isValidDate(validPeriod[1]))}>
                        Cert valid period
                    </FormTitle>
                    <DateRangePicker
                        value={validPeriod}
                        setValue={setValidPeriod}
                        warning={warning && (!isValidDate(validPeriod[0]) || !isValidDate(validPeriod[1]))}
                        width={(width - 206) / 3}
                    ></DateRangePicker>
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper>
                <ColumnWrapper style={{ width: '100%' }}>
                    <FormTitle>Referral Letter</FormTitle>
                    <TextArea
                        rows={4}
                        cols={30}
                        value={value}
                        onChange={handleInputChange}
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

export default MedicalCertificate;
