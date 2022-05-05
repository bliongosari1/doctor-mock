import React, { useState, useEffect } from 'react';
import {
    styles,
    PatientInfoWrapper,
    PatientInfoRow,
    PatientInfoTitle,
    DetailsIconWrapper,
    TagsWrapper,
    MenuItemStyled,
    LastSeenText,
    AvatarBackground,
    AvatarWrapper,
} from './styles';
import { ImageWrapper, HorizontalContainer, PatientTags, VerticalContainer } from '../../../styles/globalStyles';
import ProfileImg from '../../../public/assets/images/profile.jpg';
import UserIcon from '../../../public/assets/icons/user.svg';
import { Skeleton } from '@mui/material';
import Image from 'next/image';
import PatientDetailsModal from '../../Modals/PatientDetails';
import WorldIcon from '../../../public/assets/icons/world.svg';
import BirthdayIcon from '../../../public/assets/icons/birthday.svg';
import theme from '../../../theme';

interface Props {
    placeholder?: string;
    defaultValue?: string;
}

export const SearchCard: React.FC<Props> = (props) => {
    const {} = props;
    const [loading, setLoading] = useState(true);
    const [detailModalOpened, setDetailModalOpened] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const patient = {
        patient_name: 'Lebron James',
        age: 25,
        pronouns: 'He/him',
        gender: 'Male',
        tags: ['Endometriosis', 'Anxiety', 'Depression', 'Dysmenorrhoea'],
        new: true,
        type: 'Voice Call',
        length: '30 mins',
        id: 1,
        status: 'Incomplete',
    };

    return (
        <MenuItemStyled
            onClick={() => {
                setDetailModalOpened(true);
            }}
        >
            <PatientDetailsModal patient={patient} toggle={setDetailModalOpened} isToggle={detailModalOpened} />
            <PatientInfoWrapper>
                <HorizontalContainer style={{ alignItems: 'start', height: 'unset' }}>
                    <HorizontalContainer style={{ justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex' }}>
                            <AvatarWrapper>
                                <AvatarBackground>
                                    <img src={ProfileImg} height={60} width={60} alt="profile" />
                                </AvatarBackground>
                            </AvatarWrapper>
                            <VerticalContainer style={{ width: 'auto', marginLeft: '10px' }}>
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
                                                    <Image src={UserIcon} height={18} width={18} />
                                                </ImageWrapper>
                                                {patient.gender} ({patient.pronouns})
                                            </DetailsIconWrapper>
                                            <DetailsIconWrapper>
                                                <ImageWrapper>
                                                    <Image src={BirthdayIcon} height={18} width={18} />
                                                </ImageWrapper>
                                                {patient.age}
                                            </DetailsIconWrapper>

                                            <DetailsIconWrapper>
                                                <ImageWrapper>
                                                    <Image src={WorldIcon} height={18} width={18} />
                                                </ImageWrapper>
                                                AUS
                                            </DetailsIconWrapper>
                                        </>
                                    )}
                                </PatientInfoRow>
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
                                                <PatientInfoTitle>Conditions</PatientInfoTitle>
                                                <PatientInfoRow style={styles.TitleSecondary}>
                                                    {patient.tags?.map((tag, index) =>
                                                        index < 3 ? (
                                                            <PatientTags
                                                                style={{
                                                                    height: '25px',
                                                                    padding: '14px 12px',
                                                                    color: theme.palette.text.secondary,
                                                                }}
                                                                key={index}
                                                            >
                                                                {tag}
                                                            </PatientTags>
                                                        ) : (
                                                            index === 3 && (
                                                                <PatientTags
                                                                    style={{
                                                                        height: '25px',
                                                                        padding: '14px 12px',
                                                                        color: theme.palette.text.secondary,
                                                                    }}
                                                                    onClick={() => {}}
                                                                    key="more"
                                                                >{`+${
                                                                    patient.tags && patient.tags?.length - 3
                                                                }`}</PatientTags>
                                                            )
                                                        ),
                                                    )}
                                                </PatientInfoRow>
                                            </TagsWrapper>
                                        </div>
                                    </>
                                )}
                            </VerticalContainer>
                        </div>
                        <LastSeenText>Last seen 1 year ago</LastSeenText>
                    </HorizontalContainer>
                </HorizontalContainer>
            </PatientInfoWrapper>
        </MenuItemStyled>
    );
};

export default SearchCard;
