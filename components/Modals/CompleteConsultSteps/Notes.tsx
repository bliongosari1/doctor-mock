import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    ContentWrapper,
    SmallTitle,
    GreySubtitle,
    ButtonsWrapper,
    NotesSection,
    DocumentIconWrapper,
    FileMessageWrapper,
    FileMessageText,
    FilesWrapper,
} from './styles';
import { MainButton, SecondaryButton, FlexDivider } from '../../../styles/globalStyles';
import MedicareAutocomplete from '../../Custom/Autocomplete/MedicareAutocomplete';
import DangerIcon from '../../../public/assets/icons/danger.svg';
import BackIcon from '../../../public/assets/icons/back_lg.svg';
import DocumentIcon from '../../../public/assets/icons/document_filled.svg';

interface Props {
    goNext?: () => void;
    goPrev?: () => void;
}

interface Medicare {
    label: string;
    id: number;
}

// const defaultSuggestions = [
//     { label: 'Acute Coronary Syndrome', selected: true },
//     { label: 'Acute Limb Ischaemia', selected: true },
//     { label: 'Acute Lumbosacral Radiculopathy', selected: true },
//     { label: 'Becker Muscular Dystrophy', selected: true },
//     { label: 'Acute Coronary Syndrome', selected: true },
//     { label: 'Acute Limb Ischaemia', selected: true },
//     { label: 'Acute Lumbosacral Radiculopathy', selected: true },
//     { label: 'Becker Muscular Dystrophy', selected: true },
// ];

const documentsDefault = [
    { label: 'medical_ceritificate', selected: true },
    { label: 'another file', selected: true },
];

export const Notes: React.FC<Props> = (props) => {
    const { goNext = () => {}, goPrev = () => {} } = props;
    const [selected, setSelected] = useState<Medicare>();
    // const [suggestions, setSuggestions] = useState([...defaultSuggestions]);
    const [documents, setDocuments] = useState([...documentsDefault]);
    const [showWarnings, setShowWarnings] = useState(false);

    // const editSuggestion = (suggestion: { label: string; selected: boolean }, index: number) => {
    //     if (suggestion.selected) {
    //         suggestions.splice(index, 1);
    //         suggestion.selected = false;
    //         suggestions.push(suggestion);
    //         setSuggestions([...suggestions]);
    //     }
    // };

    const editDocuments = (index: number) => {
        const clonedArray = JSON.parse(JSON.stringify(documents));
        clonedArray[index].selected = !clonedArray[index].selected;
        console.log(clonedArray);
        setDocuments([...clonedArray]);
    };

    useEffect(() => {
        setShowWarnings(false);
    }, [selected]);

    return (
        <ContentWrapper style={{ padding: '34px 0 5px' }}>
            <SmallTitle>Medicare Code</SmallTitle>
            <GreySubtitle style={{ marginBottom: '15px' }}>
                Help us improve Heidi by letting us know what your likely diagnosis is from this consult.
            </GreySubtitle>
            <MedicareAutocomplete
                options={medicareOptions}
                selected={selected}
                setSelected={setSelected}
                style={{ background: 'white', border: '1px solid #E4E9F2' }}
            ></MedicareAutocomplete>
            {showWarnings && (
                <FlexDivider style={{ gap: '10px', marginBottom: '20px' }}>
                    <Image src={DangerIcon} height={20} width={20} alt="danger" />
                    <GreySubtitle warning>Please add a medicare to continue</GreySubtitle>
                </FlexDivider>
            )}
            <SmallTitle>Next Steps for Patient</SmallTitle>
            <NotesSection placeholder="Enter notes or instructions for the patient." />
            <FilesWrapper>
                {documents.map((document, index) => (
                    <FileMessageWrapper selected={document.selected} key={index} onClick={() => editDocuments(index)}>
                        <DocumentIconWrapper selected={document.selected}>
                            <Image src={DocumentIcon} height={18} width={18} alt="documentIcon" />
                        </DocumentIconWrapper>
                        {/* <a href={'ab'} download="medical.png"> */}
                        <FileMessageText selected={document.selected}>{document.label}</FileMessageText>
                        {/* </a> */}
                    </FileMessageWrapper>
                ))}
            </FilesWrapper>
            <ButtonsWrapper>
                <SecondaryButton
                    onClick={() => {
                        goPrev();
                    }}
                    startIcon={<Image src={BackIcon} height={20} width={20} alt="" />}
                >
                    Back
                </SecondaryButton>
                <MainButton
                    disabledMock={!selected || selected.label.length < 1}
                    onClick={() => {
                        !selected || selected?.label.length < 1 ? setShowWarnings(true) : goNext();
                    }}
                    disableRipple={!selected || selected?.label.length < 1}
                >
                    Complete
                </MainButton>
            </ButtonsWrapper>
        </ContentWrapper>
    );
};

const medicareOptions = [
    {
        label: '91792  >5mins',
        id: 1,
    },
    {
        label: '91792  >20mins',
        id: 2,
    },
    {
        label: '91792  >35mins',
        id: 3,
    },
];
