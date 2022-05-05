import React from 'react';
import Image from 'next/image';
import UserIcon from '../../../public/assets/icons/user.svg';
import { ImageWrapper, PatientTags } from '../../../styles/globalStyles';
import {
    styles,
    PatientCancelledContainer,
    AppoinmentPatientSummary__Row,
    AppoinmentPatientSummary__RowPrimary,
    AppoinmentPatientSummary__Secondary,
    AppoinmentPatientSummary__Warning,
    AppoinmentPatientSummary__Primary,
} from './styles';
import AppointmentType from '../../AppointmentType';
import WorldIcon from '../../../public/assets/icons/world.svg';
import BirthdayIcon from '../../../public/assets/icons/birthday.svg';
import type { Patient } from '../../../types/api';

interface Props {
    patient: Patient;
    setSelected: () => void;
    selected: boolean;
    index: number;
}

export const CancelledAppointment: React.FC<Props> = (props) => {
    const { patient } = props;

    return (
        <>
            <PatientCancelledContainer
                selected={props.selected}
                onClick={() => {
                    props.setSelected();
                }}
            >
                <div style={{ display: 'flex', alignItems: 'start' }}>
                    <AppointmentType
                        type={props.patient.type}
                        length={props.patient.length}
                        status="Cancelled"
                        noText
                    />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* Cancelled */}
                        <AppoinmentPatientSummary__Row>
                            <AppoinmentPatientSummary__Secondary style={{ color: '#E95252' }}>
                                Cancelled
                            </AppoinmentPatientSummary__Secondary>
                        </AppoinmentPatientSummary__Row>

                        {/* Name */}
                        <AppoinmentPatientSummary__RowPrimary>
                            <AppoinmentPatientSummary__Primary>
                                {props.patient.patient_name}
                            </AppoinmentPatientSummary__Primary>
                        </AppoinmentPatientSummary__RowPrimary>

                        {/* Required */}
                        {props.patient.onDemand && props.patient.onDemandMessage && (
                            <AppoinmentPatientSummary__Row style={styles.AppoinmentPatientSummary__Required}>
                                <AppoinmentPatientSummary__Warning>
                                    {props.patient.onDemandMessage}
                                </AppoinmentPatientSummary__Warning>
                            </AppoinmentPatientSummary__Row>
                        )}
                    </div>
                </div>
                {/* Gender + Pronouns + Age*/}
                <AppoinmentPatientSummary__Row>
                    <div style={styles.AppoinmentPatientSummary__RowLeft}>
                        <ImageWrapper style={{ opacity: '0.5' }}>
                            <Image src={UserIcon} height={18} width={18} />
                        </ImageWrapper>
                        <AppoinmentPatientSummary__Secondary>
                            {patient?.gender} ({patient?.pronouns})
                        </AppoinmentPatientSummary__Secondary>
                    </div>
                    <div style={styles.AppoinmentPatientSummary__RowLeft}>
                        <ImageWrapper style={{ opacity: '0.5' }}>
                            <Image src={BirthdayIcon} height={18} width={18} />
                        </ImageWrapper>
                        <AppoinmentPatientSummary__Secondary>{patient?.age}</AppoinmentPatientSummary__Secondary>
                    </div>
                    <div style={styles.AppoinmentPatientSummary__RowRight}>
                        <ImageWrapper style={{ opacity: '0.5' }}>
                            <Image src={WorldIcon} height={18} width={18} />
                        </ImageWrapper>
                        <AppoinmentPatientSummary__Secondary>Ethnicity</AppoinmentPatientSummary__Secondary>
                    </div>
                </AppoinmentPatientSummary__Row>

                {/* Tags */}
                <div style={styles.AppoinmentPatientSummary__RowTags}>
                    {patient?.tags?.map((tag) => (
                        <PatientTags key={tag} style={{ background: '#EDF1F7', color: '#B3BDC8' }}>
                            <span> {tag} </span>
                        </PatientTags>
                    ))}
                </div>
            </PatientCancelledContainer>
        </>
    );
};

export default CancelledAppointment;
