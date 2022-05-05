import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import CalendarLightGrey from '../../public/assets/icons/calendar_light_grey.svg';
import FilterIcon from '../../public/assets/icons/slider.svg';
import MinimizeIcon from '../../public/assets/icons/minimize.svg';
import ArrowLeftIcon from '../../public/assets/icons/arrow_left.svg';
import ArrowRightIcon from '../../public/assets/icons/arrow_right.svg';
import { useTheme } from 'styled-components';
import { Container } from '../../styles/globalStyles';
import AppoinmentPatientSummary from './AppointmentPatientSummary';
import AppoinmentFilter from './AppointmentFilter';
import {
    styles,
    AppointmentsTabs,
    AppointmentsTab,
    AppointmentsHeader,
    AppointmentsHeaderDate,
    ImageButton,
} from './styles';
import { connect } from 'react-redux';
import { RootState, Dispatch } from '../../store';
import type { Patient } from '../../types/api';
import { useRouter } from 'next/router';
import CancelledAppointment from './CancelledAppointment';

interface Props {
    patient?: Patient | null;
    setPatient: (arg: Patient) => void;
    minimized?: boolean;
    setMinimized: (arg: boolean) => void;
    minimizeBtn?: boolean;
}

interface TabPanelProps {
    children: React.ReactElement | Element | Element[] | JSX.Element[];
    value: number;
    index: number;
}

const patients = [
    {
        patient_name: 'Lebron James',
        age: 25,
        pronouns: 'He/him',
        gender: 'Male',
        tags: ['Nausea', 'Script', 'Tiredness'],
        new: true,
        type: 'Voice Call',
        length: '30 mins',
        id: 1,
        status: 'Incomplete',
        // start_time: new Date(),
        // end_time: new Date((new Date().getTime()) + 15*60000);
    },
    {
        patient_name: 'Lebron James',
        age: 25,
        pronouns: 'He/him',
        gender: 'Male',
        tags: ['Nausea', 'Script', 'Tiredness'],
        new: true,
        type: 'Voice Call',
        length: '30 mins',
        id: 139,
        status: 'Cancelled',
        // start_time: new Date(),
        // end_time: new Date((new Date().getTime()) + 15*60000);
    },
    {
        patient_name: 'James Bond',
        age: 34,
        pronouns: 'He/him',
        gender: 'Male',
        tags: ['Nausea', 'Script', 'Tiredness'],
        new: false,
        status: 'Not started',
        type: 'Video Call',
        length: '15 mins',
        id: 2,
    },
    {
        patient_name: 'Rihanna',
        age: 25,
        pronouns: 'He/him',
        gender: 'Male',
        tags: ['Nausea', 'Script', 'Tiredness'],
        new: false,
        type: 'Chat',
        status: 'Unread',
        length: '15 mins',
        id: 3,
    },
    {
        patient_name: 'Jay-Z',
        age: 25,
        pronouns: 'He/him',
        gender: 'Male',
        tags: ['Nausea', 'Script', 'Tiredness'],
        new: true,
        type: 'Video Call',
        length: '1 hour',
        id: 4,
    },
    {
        patient_name: 'Josh Smith',
        age: 25,
        pronouns: 'He/him',
        gender: 'Male',
        tags: ['Nausea', 'Script', 'Tiredness'],
        new: false,
        type: 'Voice Call',
        status: 'In progress',
        length: '1 hour',
        id: 5,
    },
    {
        patient_name: 'Justin Hue',
        age: 25,
        pronouns: 'He/him',
        gender: 'Male',
        tags: ['Nausea', 'Script', 'Tiredness'],
        new: false,
        type: 'Chat',
        status: 'Anytime',
        length: '1 hour',
        id: 23,
    },
    {
        patient_name: 'Kevin Durant',
        age: 35,
        pronouns: 'He/him',
        gender: 'Male',
        tags: ['Nausea', 'Script', 'Tiredness'],
        new: false,
        type: 'Chat',
        status: 'Starts soon',
        length: '1 hour',
        id: 24,
    },
    {
        patient_name: 'Kevin Tracy',
        age: 35,
        pronouns: 'He/him',
        gender: 'Male',
        tags: ['Nausea', 'Script', 'Tiredness'],
        new: false,
        type: 'Chat',
        status: 'In progress',
        length: '1 hour',
        id: 28,
    },
];

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

export const Appointments: React.FC<Props> = (props) => {
    const { minimized, setMinimized, minimizeBtn = false, patient } = props;
    const theme = useTheme();
    const router = useRouter();
    const [value, setValue] = React.useState(0);
    const [patientSelected, setPatientSelected] = React.useState<Patient | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selected, setSelected] = React.useState(-1);
    const [date, setDate] = useState(new Date(Date.now()));
    const [typeFilter, setTypeFilter] = useState<string[]>([]);
    const [statusFilter, setStatusFilter] = useState<string[]>([]);
    const [patientTypeFilter, setPatientTypeFilter] = useState<string[]>([]);
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

    const [filteredPatients, setFilteredPatients] = useState(patients);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (_: React.SyntheticEvent<Element, Event>, newValue: number) => {
        setValue(newValue);
    };

    const handleSelected = (patient: Patient, index: number) => {
        if (patient) {
            setPatientSelected(patient);
            setSelected(index);
            router.push(`/appointments/${patient.id}`);
        }
    };

    useEffect(() => {
        if (patientSelected) {
            props.setPatient(patientSelected);
        }
    }, [patientSelected]);

    useEffect(() => {
        if (!patient) {
            setPatientSelected(null);
        }
    }, [patient]);

    useEffect(() => {
        if (!typeFilter.length && !patientTypeFilter.length && !statusFilter.length) {
            setFilteredPatients([...patients]);
        } else {
            let currentPatients = patients;
            currentPatients = currentPatients.filter(
                (patient) =>
                    (typeFilter.length ? typeFilter.some((filter) => patient.type.includes(filter)) : true) &&
                    (patientTypeFilter.length
                        ? patientTypeFilter.some((filter) => patient.new === (filter === 'true'))
                        : true) &&
                    (statusFilter.length
                        ? patient.status
                            ? statusFilter.some((filter) => patient.status.includes(filter))
                            : false
                        : true),
            );
            setFilteredPatients([...currentPatients]);
        }
    }, [typeFilter, patientTypeFilter, statusFilter]);

    const handleDateAdd = () => {
        // setDate(new Date(date.getDate() + 1));
        date.setDate(date.getDate() + 1);
        setDate(new Date(date));
    };

    const handleDateBefore = () => {
        // setDate(new Date(date.getDate() - 1));
        date.setDate(date.getDate() - 1);
        setDate(new Date(date));
    };

    if (minimized) {
        return (
            <Container sx={styles.Appointments__Container__Minimized} onClick={() => setMinimized(false)}>
                <Image src={CalendarLightGrey} height={20} width={20} alt="" />
                <span style={{ fontSize: '14px', marginTop: '5px' }}> View </span>
            </Container>
        );
    }

    return (
        <Container sx={styles.Appointments__Container}>
            <Box sx={{ width: '100%' }}>
                <AppointmentsHeader>
                    <ImageButton onClick={handleClick}>
                        <Image src={FilterIcon} height={25} width={25} alt="" />
                    </ImageButton>
                    <AppoinmentFilter
                        anchorEl={anchorEl}
                        open={open}
                        handleClose={handleClose}
                        typeFilter={typeFilter}
                        statusFilter={statusFilter}
                        patientTypeFilter={patientTypeFilter}
                        setTypeFilter={setTypeFilter}
                        setStatusFilter={setStatusFilter}
                        setPatientTypeFilter={setPatientTypeFilter}
                    />
                    <AppointmentsHeaderDate>
                        <span style={styles.Appointments__HeaderTitle}> Today </span>
                        <div style={styles.AppointmentsHeaderSubtitleDiv}>
                            <ImageButton onClick={() => handleDateBefore()}>
                                <Image src={ArrowLeftIcon} height={23} width={23} alt="" />
                            </ImageButton>
                            <span style={styles.AppointmentsHeaderSubtitle}> {date.toDateString()}</span>
                            <ImageButton onClick={() => handleDateAdd()}>
                                <Image src={ArrowRightIcon} height={23} width={23} alt="" />
                            </ImageButton>
                        </div>
                    </AppointmentsHeaderDate>
                    {minimizeBtn ? (
                        <ImageButton onClick={() => setMinimized(true)}>
                            <Image src={MinimizeIcon} height={20} width={20} alt="" />
                        </ImageButton>
                    ) : (
                        <div style={{ width: '25px' }} />
                    )}
                </AppointmentsHeader>
                <AppointmentsTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="appointments-tabs"
                    TabIndicatorProps={{
                        style: {
                            height: '0px',
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: '34px',
                        },
                    }}
                >
                    <AppointmentsTab
                        // icon={<Image src ={value !== 0 ? CalendarIconGrey : CalendarIcon} height={25} width ={25} alt = 'scheduled' />}
                        label="All Consults"
                        style={{
                            backgroundColor: value === 0 ? theme.palette.primary.main : undefined,
                            color: value === 0 ? 'white' : undefined,
                        }}
                    />
                    <AppointmentsTab
                        // icon={<Image src ={value !== 1 ? OnDemandIconGrey : OnDemandIcon} height={25} width ={25} alt = 'ondemand'/>}
                        label="Chats"
                        iconPosition="start"
                        style={{
                            backgroundColor: value === 1 ? theme.palette.primary.main : undefined,
                            color: value === 1 ? 'white' : undefined,
                        }}
                    />
                </AppointmentsTabs>
            </Box>
            <Box sx={{ overflow: 'scroll' }}>
                <TabPanel value={value} index={0}>
                    {filteredPatients.map((p, index) =>
                        p.status && p.status === 'Cancelled' ? (
                            <CancelledAppointment
                                key={index}
                                setSelected={() => {
                                    handleSelected(p, index);
                                }}
                                index={index}
                                selected={patient?.id == p.id}
                                patient={p}
                            />
                        ) : (
                            <AppoinmentPatientSummary
                                key={index}
                                setSelected={() => {
                                    handleSelected(p, index);
                                }}
                                index={index}
                                selected={patient?.id == p.id}
                                patient={p}
                            />
                        ),
                    )}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {filteredPatients
                        .filter((x) => x.type === 'Chat')
                        .map((p, index) => (
                            <AppoinmentPatientSummary
                                key={index}
                                setSelected={() => {
                                    handleSelected(p, index);
                                }}
                                index={index}
                                selected={patient?.id == p.id}
                                patient={p}
                            />
                        ))}
                </TabPanel>
            </Box>
        </Container>
    );
};

const mapState = (state: RootState) => ({
    patient: state.patient.currentPatient,
});

const mapDispatch = (dispatch: Dispatch) => ({
    setPatient: dispatch.patient.setPatient,
});

export default connect(mapState, mapDispatch)(Appointments);
