import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import { useTheme } from 'styled-components';
// import ArrowRight from '../../public/assets/icons/arrow_right.svg';
import CalendarIcon from '../../public/assets/icons/calendar.svg';
import UserIcon from '../../public/assets/icons/user.svg';
import { ImageWrapper, HorizontalContainer, Circle, PatientTags, VerticalContainer } from '../../styles/globalStyles';
import {
    styles,
    PatientDetailsWrapper,
    PatientInfoWrapper,
    PatientInfoRow,
    PatientInfoTitle,
    DetailsIconWrapper,
    TagsWrapper,
    Line,
    HeidiDdxBtn,
} from './styles';
import { Skeleton } from '@mui/material';
import type { Patient } from '../../types/api';
import Tabs from './Tabs';
import AvatarStatus from './AvatarStatus';

interface Props {
    patient: Patient;
    minimized?: boolean;
    setMinimized?: (arg: boolean) => void;
    style?: React.CSSProperties;
    ddxButton?: boolean;
    defaultTab?: number;
}

export const PatientDetails: React.FC<Props> = (props) => {
    const { patient, minimized = false, setMinimized = () => {}, style, ddxButton = true, defaultTab = 0 } = props;
    const [loading, setLoading] = useState(true);
    const [ddxActive, setDdxActive] = useState(false);
    const [tab, setTab] = useState(defaultTab);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <PatientDetailsWrapper style={style} onClick={() => setMinimized(false)}>
            <PatientInfoWrapper>
                <HorizontalContainer style={{ alignItems: 'start', height: 'unset' }}>
                    <HorizontalContainer style={{ width: 'auto' }}>
                        <AvatarStatus />
                        <VerticalContainer style={{ width: 'auto' }}>
                            <PatientInfoRow style={styles.TitlePrimary}>
                                {loading ? <Skeleton width={150} height={35} /> : patient.patient_name}
                            </PatientInfoRow>
                            <PatientInfoRow style={styles.TitleSecondary}>
                                {loading ? (
                                    <Skeleton width={180} height={30} />
                                ) : (
                                    <>
                                        <DetailsIconWrapper>
                                            <ImageWrapper>
                                                <Image src={CalendarIcon} height={18} width={18} />
                                            </ImageWrapper>
                                            {patient.age} Years
                                        </DetailsIconWrapper>
                                        <DetailsIconWrapper>
                                            <ImageWrapper>
                                                <Image src={UserIcon} height={18} width={18} />
                                            </ImageWrapper>
                                            {patient.gender}
                                        </DetailsIconWrapper>
                                        <DetailsIconWrapper>
                                            <ImageWrapper>
                                                <Image src={UserIcon} height={18} width={18} />
                                            </ImageWrapper>
                                            AUS
                                        </DetailsIconWrapper>
                                    </>
                                )}
                            </PatientInfoRow>
                        </VerticalContainer>
                    </HorizontalContainer>
                    {ddxButton && (
                        <HeidiDdxBtn
                            onClick={() => {
                                setDdxActive(true);
                            }}
                        >
                            <Circle />
                            <span>Heidi DDX</span>
                        </HeidiDdxBtn>
                    )}
                </HorizontalContainer>
                {loading ? (
                    <Skeleton width={300} height={20} />
                ) : (
                    <>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                            }}
                        >
                            <TagsWrapper>
                                <PatientInfoTitle>Allergies</PatientInfoTitle>
                                <PatientInfoRow style={styles.TitleSecondary}>
                                    {patient.tags?.map((tag, index) =>
                                        index < 1 ? (
                                            <PatientTags key={index} style={styles.TagWarning}>
                                                {tag}
                                            </PatientTags>
                                        ) : (
                                            index === 1 && (
                                                <PatientTags
                                                    onClick={() => setTab(1)}
                                                    style={styles.TagWarning}
                                                    key="more"
                                                >{`+${patient.tags && patient.tags?.length - 2}`}</PatientTags>
                                            )
                                        ),
                                    )}
                                </PatientInfoRow>
                            </TagsWrapper>
                            <TagsWrapper>
                                <PatientInfoTitle>Medications</PatientInfoTitle>
                                <PatientInfoRow style={styles.TitleSecondary}>
                                    {patient.tags?.map((tag, index) =>
                                        index < 1 ? (
                                            <PatientTags key={index}>{tag}</PatientTags>
                                        ) : (
                                            index === 1 && (
                                                <PatientTags onClick={() => setTab(2)} key="more">{`+${
                                                    patient.tags && patient.tags?.length - 2
                                                }`}</PatientTags>
                                            )
                                        ),
                                    )}
                                </PatientInfoRow>
                            </TagsWrapper>
                            <TagsWrapper>
                                <PatientInfoTitle>Conditions</PatientInfoTitle>
                                <PatientInfoRow style={styles.TitleSecondary}>
                                    {patient.tags?.map((tag, index) =>
                                        index < 1 ? (
                                            <PatientTags key={index}>{tag}</PatientTags>
                                        ) : (
                                            index === 1 && (
                                                <PatientTags onClick={() => setTab(1)} key="more">{`+${
                                                    patient.tags && patient.tags?.length - 2
                                                }`}</PatientTags>
                                            )
                                        ),
                                    )}
                                </PatientInfoRow>
                            </TagsWrapper>
                        </div>
                    </>
                )}
            </PatientInfoWrapper>
            <Line style={{ marginBottom: minimized ? '2.5px' : '0px' }} />
            {!minimized && (
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                    }}
                >
                    <Tabs tab={tab} setTab={setTab} ddxActive={ddxActive} setDdxActive={setDdxActive}></Tabs>
                </div>
            )}
        </PatientDetailsWrapper>
    );
};

export default PatientDetails;
