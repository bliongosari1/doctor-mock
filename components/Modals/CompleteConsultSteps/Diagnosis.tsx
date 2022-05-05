import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    ContentWrapper,
    SmallTitle,
    GreySubtitle,
    NoDiagnosisPlaceholder,
    DNDWrapper,
    HeidiSuggestedDiagnosisWrapper,
    HeidiSuggestions,
    HeidiSuggestionsText,
    ButtonsWrapper,
} from './styles';
import BlueCrossIcon from '../../../public/assets/icons/dark_cross.svg';
import RedPlusIcon from '../../../public/assets/icons/red_plus.svg';
import DragAndDrop from '../../DragAndDrop/ConditionDnD';
import { FlexDivider, MainButton, SecondaryButton } from '../../../styles/globalStyles';
import NextIcon from '../../../public/assets/icons/next_white.svg';
import BackIcon from '../../../public/assets/icons/back_lg.svg';
import DangerIcon from '../../../public/assets/icons/danger.svg';
import ConditionAutocomplete from '../../Custom/Autocomplete/ConditionAutocomplete';

interface Props {
    goNext?: () => void;
    goPrev?: () => void;
}
interface Diagnosis {
    label: string;
    id?: number;
}

const defaultSuggestions = [
    { label: 'Acute Coronary Syndrome', selected: true },
    { label: 'Acute Limb Ischaemia', selected: true },
    { label: 'Acute Lumbosacral Radiculopathy', selected: true },
    { label: 'Becker Muscular Dystrophy', selected: true },
    { label: 'Acute Coronary Syndrome', selected: true },
    { label: 'Acute Limb Ischaemia', selected: true },
    { label: 'Acute Lumbosacral Radiculopathy', selected: true },
    { label: 'Becker Muscular Dystrophy', selected: true },
];

export const Diagnosis: React.FC<Props> = (props) => {
    const { goNext = () => {}, goPrev = () => {} } = props;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedList, setSelectedList] = useState<Diagnosis[]>([]);
    const [suggestions, setSuggestions] = useState([...defaultSuggestions]);
    const [showWarnings, setShowWarnings] = useState(true);

    const editSuggestion = (suggestion: { label: string; selected: boolean }, index: number) => {
        if (suggestion.selected) {
            suggestions.splice(index, 1);
            suggestion.selected = !suggestion.selected;
            setSuggestions([...suggestions, suggestion]);
        } else {
            suggestions.splice(index, 1);
            suggestion.selected = !suggestion.selected;
            setSuggestions([suggestion, ...suggestions]);
        }
    };

    useEffect(() => {
        setShowWarnings(false);
    }, [selectedList]);

    return (
        <ContentWrapper style={{ padding: '34px 0 5px', minWidth: '50vw' }}>
            <SmallTitle>Your Diagnosis</SmallTitle>
            <GreySubtitle style={{ marginBottom: '15px' }}>
                Help us improve Heidi by letting us know what your likely diagnosis is from this consult.
            </GreySubtitle>
            <ConditionAutocomplete
                options={conditonList}
                selectedList={selectedList}
                setSelectedList={setSelectedList}
                addToList={(arg) => setSelectedList([...selectedList, { label: arg }])}
            ></ConditionAutocomplete>
            {selectedList.length === 0 ? (
                <>
                    <NoDiagnosisPlaceholder>
                        <GreySubtitle warning={showWarnings}>
                            Add 1 or more condition using the search bar above
                        </GreySubtitle>
                    </NoDiagnosisPlaceholder>
                </>
            ) : (
                <DNDWrapper>
                    <DragAndDrop selectedList={selectedList} setSelectedList={setSelectedList} />
                </DNDWrapper>
            )}
            <SmallTitle style={{ marginTop: '20px' }}>Heidi's Suggested Diagnosis</SmallTitle>
            <GreySubtitle style={{ marginBottom: '15px' }}>Remove any conditions you think are irrelevant</GreySubtitle>
            <HeidiSuggestedDiagnosisWrapper>
                {suggestions.map((suggestion, index) => (
                    <HeidiSuggestions
                        onClick={() => {
                            editSuggestion(suggestion, index);
                        }}
                        key={index}
                        selected={suggestion.selected}
                    >
                        <HeidiSuggestionsText>{suggestion.label}</HeidiSuggestionsText>
                        <Image
                            src={suggestion.selected ? BlueCrossIcon : RedPlusIcon}
                            height={19}
                            width={19}
                            alt="deleteIcon"
                        />
                    </HeidiSuggestions>
                ))}
            </HeidiSuggestedDiagnosisWrapper>
            <FlexDivider style={{ justifyContent: 'space-between' }}>
                <FlexDivider style={{ gap: '10px' }}>
                    {showWarnings && (
                        <>
                            <Image src={DangerIcon} height={20} width={20} alt="danger" />
                            <GreySubtitle warning>Please add a diagnosis to continue</GreySubtitle>
                        </>
                    )}
                </FlexDivider>
                <ButtonsWrapper>
                    <SecondaryButton
                        style={{ marginRight: '7.5px' }}
                        onClick={() => {
                            goPrev();
                        }}
                        startIcon={<Image src={BackIcon} height={20} width={20} alt="" />}
                    >
                        Back
                    </SecondaryButton>
                    <MainButton
                        disabledMock={selectedList.length < 1}
                        onClick={() => {
                            selectedList.length < 1 ? setShowWarnings(true) : goNext();
                        }}
                        disableRipple={selectedList.length < 1}
                        endIcon={<Image src={NextIcon} height={20} width={20} alt="" />}
                    >
                        Next
                    </MainButton>
                </ButtonsWrapper>
            </FlexDivider>
        </ContentWrapper>
    );
};

const conditonList = [
    {
        label: 'Influenza',
        id: 0,
    },
    {
        label: 'Acute Coronary Syndrome',
        id: 1,
    },
    {
        label: 'Pneumocystis jirovecii pneumonia',
        id: 2,
    },
    {
        label: 'Aortic Stenosis',
        id: 3,
    },
    {
        label: 'Asthma',
        id: 4,
    },
    {
        label: 'Bronchiectasis',
        id: 5,
    },
    {
        label: 'Endocarditis',
        id: 6,
    },
    {
        label: 'Infective Exacerbation of COPD',
        id: 7,
    },
    {
        label: 'COVID-19 Infection',
        id: 8,
    },
    {
        label: 'Non-small Cell Lung Cancer',
        id: 9,
    },
    {
        label: 'Hiatus Hernia',
        id: 10,
    },
    {
        label: 'Viral Pneumonia',
        id: 11,
    },
    {
        label: 'Oesophagitis',
        id: 12,
    },
    {
        label: 'Small Cell Lung Cancer',
        id: 13,
    },
    {
        label: 'Stable Ischaemic Heart Disease',
        id: 14,
    },
    {
        label: 'Multiple Sclerosis',
        id: 15,
    },
    {
        label: 'Viral Pleuritis',
        id: 16,
    },
    {
        label: 'Community Acquired Pneumonia (typical)',
        id: 17,
    },
    {
        label: 'Chronic Obstructive Pulmonary Disease',
        id: 18,
    },
    {
        label: 'Peptic Ulcer Disease',
        id: 19,
    },
    {
        label: 'Myocarditis',
        id: 20,
    },
    {
        label: 'Pulmonary Tuberculosis',
        id: 21,
    },
    {
        label: 'Atypical Pneumonia',
        id: 22,
    },
    {
        label: 'Mallory-Weiss Tear',
        id: 23,
    },
    {
        label: 'Obstructive Sleep Apnoea',
        id: 24,
    },
    {
        label: 'Gastritis',
        id: 25,
    },
    {
        label: 'Interstitial Lung Disease',
        id: 26,
    },
    {
        label: 'Toxic Shock Syndrome',
        id: 27,
    },
    {
        label: 'Inhaled Foreign Object',
        id: 28,
    },
    {
        label: 'Acute Bronchitis',
        id: 29,
    },
    {
        label: 'Granulomatosis with Polyangitis',
        id: 30,
    },
    {
        label: 'ACEi Induced Cough',
        id: 31,
    },
    {
        label: 'Fibroadenoma',
        id: 32,
    },
    {
        label: 'Pericarditis',
        id: 33,
    },
    {
        label: 'Anaemia of Chronic Disease',
        id: 34,
    },
    {
        label: 'Congestive Heart Failure',
        id: 35,
    },
    {
        label: 'Aortic Dissection',
        id: 36,
    },
    {
        label: 'COVID-19 Pneumonia',
        id: 37,
    },
    {
        label: 'Anaphylaxis',
        id: 38,
    },
    {
        label: 'Hypertrophic Cardiomyopathy',
        id: 39,
    },
    {
        label: 'Pneumothorax',
        id: 40,
    },
    {
        label: 'Oesophageal Cancer',
        id: 41,
    },
    {
        label: 'Cardiac Tamponade',
        id: 42,
    },
    {
        label: 'Anaemia',
        id: 43,
    },
    {
        label: 'Iron Deficiency Anaemia',
        id: 44,
    },
    {
        label: 'Upper Airway Cough Syndrome',
        id: 45,
    },
    {
        label: 'Upper Respiratory Tract Infection',
        id: 46,
    },
    {
        label: 'Pulmonary Embolism',
        id: 47,
    },
    {
        label: 'Acute Mesenteric Ischaemia',
        id: 48,
    },
    {
        label: 'Cholecystitis',
        id: 49,
    },
    {
        label: 'Diverticulitis',
        id: 50,
    },
    {
        label: 'Drug Induced Liver Injury',
        id: 51,
    },
    {
        label: 'Coeliac Disease',
        id: 52,
    },
    {
        label: 'Valvular Disease',
        id: 53,
    },
    {
        label: 'Arrhythmias',
        id: 54,
    },
    {
        label: 'Atrial FIbrillation',
        id: 55,
    },
    {
        label: 'Bordetella Pertussis Infection',
        id: 56,
    },
    {
        label: 'Hypotension',
        id: 57,
    },
    {
        label: 'Post-Infectious Cough',
        id: 58,
    },
    {
        label: 'Ventricular Tachycardia',
        id: 59,
    },
    {
        label: 'Laryngitis',
        id: 60,
    },
    {
        label: 'Epiglottitis',
        id: 61,
    },
    {
        label: 'Appendicitis',
        id: 62,
    },
    {
        label: 'Stomach Cancer',
        id: 63,
    },
    {
        label: 'Abdominal Aortic Aneurysm',
        id: 64,
    },
    {
        label: 'Gastroenteritis',
        id: 65,
    },
    {
        label: 'Cholangiocarcinoma',
        id: 66,
    },
    {
        label: 'Colorectal Cancer',
        id: 67,
    },
    {
        label: 'Irritable Bowel Syndrome',
        id: 68,
    },
    {
        label: 'Pyelonephritis',
        id: 69,
    },
    {
        label: 'Acute Pancreatitis',
        id: 70,
    },
    {
        label: 'Pancreatic Cancer',
        id: 71,
    },
    {
        label: 'Acute Alcoholic Hepatitis',
        id: 72,
    },
    {
        label: 'Hepatocellular Carcinoma',
        id: 73,
    },
    {
        label: 'Cholangitis',
        id: 74,
    },
    {
        label: 'Chronic Infective Hepatitis',
        id: 75,
    },
    {
        label: 'Ulcerative Colitis',
        id: 76,
    },
    {
        label: "Crohn's Disease",
        id: 77,
    },
    {
        label: 'Acute Infective Hepatitis',
        id: 78,
    },
    {
        label: 'Nephrolithiasis',
        id: 79,
    },
    {
        label: 'Cystic Fibrosis',
        id: 80,
    },
    {
        label: 'Benign Oesophageal Stricture',
        id: 81,
    },
    {
        label: 'Gastro-oesophageal Reflux Disease',
        id: 82,
    },
    {
        label: 'Oesophageal Varices',
        id: 83,
    },
    {
        label: 'Ischaemic Colitis',
        id: 84,
    },
    {
        label: 'Chronic Liver Disease',
        id: 85,
    },
    {
        label: 'Small Bowel Obstruction',
        id: 86,
    },
    {
        label: 'Gallstones',
        id: 87,
    },
    {
        label: 'Large Bowel Obstruction',
        id: 88,
    },
    {
        label: 'Infectious Colitis',
        id: 89,
    },
    {
        label: 'Chronic Pancreatitis',
        id: 90,
    },
    {
        label: 'Autoimmune Hepatitis',
        id: 91,
    },
];
