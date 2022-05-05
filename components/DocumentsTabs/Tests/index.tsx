import React, { useState } from 'react';
import { Select } from '../../Custom/Select';
import Details from '../Details';
import { AllInputWrapper, FormTitle, FormWrapper, ColumnWrapper, RowWrapper } from './styles';
import Pathology from './Pathology';
import Radiology from './Radiology';

interface Props {
    height: number;
    width: number;
}

const documentTypeOptions = [
    {
        label: 'Pathology',
    },
    {
        label: 'Radiology',
    },
];

export const Tests: React.FC<Props> = (props) => {
    const { height } = props;
    const [testType, setTestType] = useState('');

    const getTestType = () => {
        switch (testType) {
            case 'Pathology':
                return <Pathology testType={testType} setTestType={setTestType} />;
            case 'Radiology':
                return <Radiology testType={testType} setTestType={setTestType} />;
            default:
                return;
        }
    };

    return (
        <FormWrapper style={{ maxHeight: height - 50 }}>
            <Details />
            {!testType ? (
                <AllInputWrapper>
                    <RowWrapper>
                        <ColumnWrapper style={{ flex: 1 }}>
                            <FormTitle>Test type</FormTitle>
                            <Select
                                style={{
                                    border: '1px solid #C5CEE0',
                                    background: 'white',
                                    padding: '4px 0px 4px 15px',
                                }}
                                options={documentTypeOptions}
                                defaultValue={testType}
                                value={testType}
                                setValue={setTestType}
                                placeholder="Please select"
                                iconSize={25}
                                menuStyle={{}}
                                menuItemStyle={{ padding: '11px 0' }}
                            ></Select>
                        </ColumnWrapper>
                    </RowWrapper>
                </AllInputWrapper>
            ) : (
                getTestType()
            )}
        </FormWrapper>
    );
};
