import React, { useState, useEffect } from 'react';
import { Select } from '../../Custom/Select';
import {
    AllInputWrapper,
    FormTitle,
    ColumnWrapper,
    RowWrapper,
    CheckboxStyled,
    ConfirmationText,
    SingleLineInput,
    RadioWrapper,
    Text,
    FormTitlePlaceholder,
    OptionsWrapper,
} from './styles';
import Image from 'next/image';
import CheckedIcon from '../../../public/assets/icons/checkedIcon.svg';
import UncheckedIcon from '../../../public/assets/icons/unchecked.svg';
import UncheckedIconWarning from '../../../public/assets/icons/checkbox_warning.svg';
import { MainButton } from '../../../styles/globalStyles';
import RadioButton from '../../Custom/RadioButton';
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

export const Radiology: React.FC<Props> = (props) => {
    const { testType, setTestType } = props;

    const [successOpen, setSuccessOpen] = useState(false);
    const [dangerOpen, setDangerOpen] = useState(false);
    const [inputConfirmed, setInputConfirmed] = useState(false);
    const [warning, setWarning] = useState(false);

    const [testRequestedValue, setTestRequestedValue] = useState('');
    const [contrastAllergy, setContrastAllergy] = useState<boolean>();
    const [renalImpairment, setRenalImpairment] = useState<boolean>();

    useEffect(() => {
        setWarning(false);
    }, [inputConfirmed, testRequestedValue]);

    const valid = inputConfirmed && testRequestedValue;

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
                primaryMessage="Radiology request successfully created"
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
                        placeholder="Please select"
                        iconSize={25}
                        value={testType}
                        setValue={setTestType}
                        menuStyle={{}}
                        menuItemStyle={{ padding: '11px 0' }}
                    ></Select>
                </ColumnWrapper>
                <ColumnWrapper style={{ flex: 1 }}>
                    <FormTitle warning={warning && testRequestedValue === ''}>Test Requested</FormTitle>
                    <SingleLineInput
                        warning={warning && testRequestedValue === ''}
                        value={testRequestedValue}
                        onChange={(e) => setTestRequestedValue(e.target.value)}
                    />
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper>
                <ColumnWrapper style={{ flex: 1 }}>
                    <FormTitle>Clinical notes</FormTitle>
                    <SingleLineInput />
                </ColumnWrapper>
                <ColumnWrapper style={{ flex: 1, alignItems: 'start', justifyContent: 'center' }}>
                    <RadioWrapper style={{ justifyContent: 'space-around', width: '100%', margin: '5px 0' }}>
                        <div style={{ flex: 1, marginRight: '5px' }}>
                            <Text>Contrast allergy</Text>
                        </div>
                        <div style={{ flex: 1, display: 'flex', gap: '5px' }}>
                            <RadioButton selected={contrastAllergy} setSelected={() => setContrastAllergy(true)} />
                            <Text>Yes</Text>
                            <RadioButton
                                selected={contrastAllergy === false}
                                setSelected={() => setContrastAllergy(false)}
                            />
                            <Text>No</Text>
                        </div>
                    </RadioWrapper>
                    <RadioWrapper style={{ justifyContent: 'space-around', width: '100%', margin: '0px 0px 0px' }}>
                        <div style={{ flex: 1, marginRight: '5px' }}>
                            <Text>Renal impairment</Text>
                        </div>
                        <div style={{ flex: 1, display: 'flex', gap: '5px' }}>
                            <RadioButton selected={renalImpairment} setSelected={() => setRenalImpairment(true)} />
                            <Text>Yes</Text>
                            <RadioButton
                                selected={renalImpairment === false}
                                setSelected={() => setRenalImpairment(false)}
                            />
                            <Text>No</Text>
                        </div>
                    </RadioWrapper>
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper>
                <RowWrapper style={{ flex: 1, marginTop: 0 }}>
                    <ColumnWrapper style={{ flex: 1 }}>
                        <FormTitle>EFGR</FormTitle>
                        <SingleLineInput />
                    </ColumnWrapper>
                    <ColumnWrapper style={{ flex: 1 }}>
                        <FormTitle>Creatine</FormTitle>
                        <SingleLineInput />
                    </ColumnWrapper>
                </RowWrapper>

                <ColumnWrapper style={{ flex: 1 }}>
                    {/* <FormTitlePlaceholder/> */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'start',
                            height: '100%',
                            flexWrap: 'wrap',
                            marginLeft: '10px',
                        }}
                    >
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
                        <OptionsWrapper style={{ marginRight: '0px' }}>
                            <CheckboxStyled
                                icon={<Image src={UncheckedIcon} height={18} width={18} alt="" />}
                                checkedIcon={<Image src={CheckedIcon} height={18} width={18} alt="" />}
                                disableRipple
                            />
                            <Text> Metformin </Text>
                        </OptionsWrapper>
                    </div>
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper>
                <ColumnWrapper style={{ flex: 3 }}>
                    <FormTitle>Copy reports to</FormTitle>
                    <SingleLineInput />
                </ColumnWrapper>

                <ColumnWrapper style={{ flex: 1.3 }}>
                    <FormTitlePlaceholder />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CheckboxStyled
                            icon={<Image src={UncheckedIcon} height={18} width={18} alt="" />}
                            checkedIcon={<Image src={CheckedIcon} height={18} width={18} alt="" />}
                            disableRipple
                        />
                        <Text>Copy results to patient</Text>
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
                Create pathology request
            </MainButton>
        </AllInputWrapper>
    );
};

export default Radiology;
