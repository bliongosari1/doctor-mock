import React from 'react';
import Image from 'next/image';
import UserIcon from '../../../public/assets/icons/user.svg';
import { ImageWrapper, NewAlertSm, PatientTags } from '../../../styles/globalStyles';
import {
    styles,
    PatientSummaryContainer,
    AppoinmentPatientSummary__Row,
    AppoinmentPatientSummary__RowPrimary,
    AppoinmentPatientSummary__Secondary,
    AppoinmentPatientSummary__Warning,
    AppoinmentPatientSummary__Primary,
    ExtraIcons,
    ImageButton,
} from './styles';
import AppointmentType from '../../AppointmentType';
import AppointmentStatus from '../AppointmentStatus';
import AppointmentToggle from '../AppointmentToggle';
import MoreIcon from '../../../public/assets/icons/more.svg';
import WorldIcon from '../../../public/assets/icons/world.svg';
import BirthdayIcon from '../../../public/assets/icons/birthday.svg';
import type { Patient } from '../../../types/api';

interface Props {
    patient: Patient;
    setSelected: () => void;
    selected: boolean;
    index: number;
}

export const AppoinmentPatientSummary: React.FC<Props> = (props) => {
    const { patient } = props;

    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <PatientSummaryContainer
                selected={props.selected}
                onClick={() => {
                    props.setSelected();
                }}
            >
                <ExtraIcons>
                    {patient.status && <AppointmentStatus status={patient.status} />}
                    <AppointmentToggle open={open} anchorEl={anchorEl} handleClose={handleClose} />
                    {(!patient.status ||
                        (patient.status &&
                            (patient.status === 'Anytime' ||
                                patient.status === 'Starts soon' ||
                                patient.status === 'Not started'))) && (
                        <>
                            <ImageButton onClick={handleClick}>
                                <Image src={MoreIcon} height={25} width={25} alt="" />
                            </ImageButton>
                        </>
                    )}
                </ExtraIcons>
                <div style={{ display: 'flex', alignItems: 'start' }}>
                    <AppointmentType type={props.patient.type} length={props.patient.length} noText />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* Time */}
                        {!props.patient.onDemand && (
                            <AppoinmentPatientSummary__Row>
                                <AppoinmentPatientSummary__Secondary>
                                    {'15 min    3:00pm'}
                                </AppoinmentPatientSummary__Secondary>
                            </AppoinmentPatientSummary__Row>
                        )}

                        {/* Name and New/Old */}
                        <AppoinmentPatientSummary__RowPrimary>
                            <AppoinmentPatientSummary__Primary>
                                {props.patient.patient_name}
                            </AppoinmentPatientSummary__Primary>
                            {props.patient.new && <NewAlertSm> New </NewAlertSm>}
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
                        <ImageWrapper>
                            <Image src={UserIcon} height={18} width={18} />
                        </ImageWrapper>
                        <AppoinmentPatientSummary__Secondary>
                            {patient?.gender} ({patient?.pronouns})
                        </AppoinmentPatientSummary__Secondary>
                    </div>
                    <div style={styles.AppoinmentPatientSummary__RowLeft}>
                        <ImageWrapper>
                            <Image src={BirthdayIcon} height={18} width={18} />
                        </ImageWrapper>
                        <AppoinmentPatientSummary__Secondary>{patient?.age}</AppoinmentPatientSummary__Secondary>
                    </div>
                    <div style={styles.AppoinmentPatientSummary__RowRight}>
                        <ImageWrapper>
                            <Image src={WorldIcon} height={18} width={18} />
                        </ImageWrapper>
                        <AppoinmentPatientSummary__Secondary>Ethnicity</AppoinmentPatientSummary__Secondary>
                    </div>
                </AppoinmentPatientSummary__Row>

                {/* Tags */}
                <div style={styles.AppoinmentPatientSummary__RowTags}>
                    {patient?.tags?.map((tag) => (
                        <PatientTags key={tag}>
                            <span> {tag} </span>
                        </PatientTags>
                    ))}
                </div>
            </PatientSummaryContainer>
        </>
    );
};

export default AppoinmentPatientSummary;
