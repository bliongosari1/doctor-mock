import React, { useState, useEffect } from 'react';
import { Select } from '../../Custom/Select';
import {
    AllInputWrapper,
    FormTitle,
    TextArea,
    ColumnWrapper,
    RowWrapper,
    CheckboxStyled,
    ConfirmationText,
    SingleLineInput,
    Text,
    FormTitlePlaceholder,
    OptionsWrapper,
} from './styles';
import Image from 'next/image';
import CheckedIcon from '../../../public/assets/icons/checkedIcon.svg';
import UncheckedIcon from '../../../public/assets/icons/unchecked.svg';
import UncheckedIconWarning from '../../../public/assets/icons/checkbox_warning.svg';
import { MainButton } from '../../../styles/globalStyles';
import Alert from '../../Alert';

interface Props {
    testType: string;
    setTestType: (arg: string) => void;
}

const documentTypeOptions = [
    {
        label: 'Pathology',
    },
    {
        label: 'Radiology',
    },
];

export const Pathology: React.FC<Props> = (props) => {
    const { testType, setTestType } = props;
    const [notesValue, setNotesValue] = useState('');
    const [testRequestedValue, setTestRequestedValue] = useState('');

    const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNotesValue(e.target.value);
    };
    const handleInputTestChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTestRequestedValue(e.target.value);
    };

    const [successOpen, setSuccessOpen] = useState(false);
    const [dangerOpen, setDangerOpen] = useState(false);
    const [inputConfirmed, setInputConfirmed] = useState(false);
    const [warning, setWarning] = useState(false);

    useEffect(() => {
        setWarning(false);
    }, [inputConfirmed, notesValue, testRequestedValue]);

    const valid = inputConfirmed && notesValue && testRequestedValue;

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

    return (
        <AllInputWrapper>
            <Alert
                type={'success'}
                open={successOpen}
                setOpen={setSuccessOpen}
                primaryMessage="Pathology request successfully created"
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
                    <FormTitle>Test type</FormTitle>
                    <Select
                        style={{ border: '1px solid #C5CEE0', background: 'white', padding: '4px 0px 4px 15px' }}
                        options={documentTypeOptions}
                        value={testType}
                        setValue={setTestType}
                        placeholder="Please select"
                        iconSize={25}
                        menuStyle={{}}
                        menuItemStyle={{ padding: '11px 0' }}
                    ></Select>
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper>
                <ColumnWrapper style={{ flex: 1 }}>
                    <FormTitle warning={warning && !testRequestedValue}>Test Requested</FormTitle>
                    <TextArea
                        warning={warning && !testRequestedValue}
                        rows={4}
                        cols={30}
                        value={testRequestedValue}
                        onChange={handleInputTestChange}
                        placeholder=""
                    />
                </ColumnWrapper>
                <ColumnWrapper style={{ flex: 1 }}>
                    <FormTitle warning={warning && !notesValue}>Clinical notes</FormTitle>
                    <TextArea
                        rows={4}
                        cols={30}
                        warning={warning && !notesValue}
                        value={notesValue}
                        onChange={handleNotesChange}
                        placeholder=""
                    />
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper>
                <ColumnWrapper style={{ flex: 2 }}>
                    <FormTitle>Copy reports to</FormTitle>
                    <SingleLineInput />
                </ColumnWrapper>

                <ColumnWrapper style={{ flex: 1.3 }}>
                    <FormTitlePlaceholder />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <OptionsWrapper>
                            <CheckboxStyled
                                icon={<Image src={UncheckedIcon} height={18} width={18} alt="" />}
                                checkedIcon={<Image src={CheckedIcon} height={18} width={18} alt="" />}
                                disableRipple
                            />
                            <Text> Urgent </Text>
                        </OptionsWrapper>
                        <OptionsWrapper>
                            <CheckboxStyled
                                icon={<Image src={UncheckedIcon} height={18} width={18} alt="" />}
                                checkedIcon={<Image src={CheckedIcon} height={18} width={18} alt="" />}
                                disableRipple
                            />
                            <Text> Fasting </Text>
                        </OptionsWrapper>
                    </div>
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

export default Pathology;
