import React, { useEffect } from 'react';
import { styles, AppointmentsTabs, AppointmentsTab, AppointmentsTabInactive } from './styles';
import { Container, Circle } from '../../../styles/globalStyles';
import { Box } from '@mui/material';
import theme from '../../../theme';
import HeidiSummary from './HeidiSummary';
import PreviousConsults from './PreviousConsults';
import MedHxActive from '../../../public/assets/icons/Tabs/medhx.svg';
import MedHxInactive from '../../../public/assets/icons/Tabs/medhx_grey.svg';
import CircleActive from '../../../public/assets/icons/Tabs/circle.svg';
import CircleInactive from '../../../public/assets/icons/Tabs/circle_grey.svg';
import PrescriptionActive from '../../../public/assets/icons/Tabs/prescriptions.svg';
import PrescriptionInactive from '../../../public/assets/icons/Tabs/prescriptions_grey.svg';
import ConsultsActive from '../../../public/assets/icons/Tabs/consults.svg';
import ConsultsInactive from '../../../public/assets/icons/Tabs/consults_grey.svg';
import DetailsActive from '../../../public/assets/icons/Tabs/details.svg';
import DetailsInactive from '../../../public/assets/icons/Tabs/details_grey.svg';

import PersonalDetails from './PersonalDetails';
import MedicalHistory from './MedicalHistory';
import Medications from './Medications';

interface Props {
    ddxActive: boolean;
    setDdxActive: (arg: boolean) => void;
    tab: number;
    setTab: (arg: number) => void;
}

const TabPanel = (props: { children: React.ReactElement; value: number; index: number }) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{ width: '100%' }}
        >
            {value === index && (
                <Box
                    sx={{
                        padding: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        maxHeight: 'calc(100% - 20px)',
                        overflow: 'scroll',
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    );
};

const tabs = [
    {
        name: 'Summary',
        icon: CircleActive,
        inactiveIcon: CircleInactive,
    },
    {
        name: 'MedHx',
        icon: MedHxActive,
        inactiveIcon: MedHxInactive,
    },
    {
        name: 'Medications',
        icon: PrescriptionActive,
        inactiveIcon: PrescriptionInactive,
    },
    {
        name: 'Consults',
        icon: ConsultsActive,
        inactiveIcon: ConsultsInactive,
    },
    {
        name: 'Personal Details',
        icon: DetailsActive,
        inactiveIcon: DetailsInactive,
    },
];

export const Tabs: React.FC<Props> = (props) => {
    const { tab, setTab, ddxActive, setDdxActive } = props;
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        if (ddxActive) {
            setValue(0);
            setTab(0);
        } else {
            setValue(tab);
        }
    }, [ddxActive, tab]);

    const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
        setDdxActive(false);
        setValue(newValue);
    };

    return (
        <>
            <Container sx={styles.Appointments__Container}>
                <AppointmentsTabs value={value} onChange={handleChange} aria-label="appointments-tabs">
                    {tabs.map((tab, index) =>
                        value === index ? (
                            <AppointmentsTab
                                key={index}
                                icon={
                                    tab.name === 'Summary' ? (
                                        <Circle
                                            style={{
                                                height: '15px',
                                                width: '15px',
                                                margin: '0 15px 0 2.5px',
                                                backgroundColor: theme.palette.primary.main,
                                            }}
                                        ></Circle>
                                    ) : (
                                        <img
                                            src={tab.icon}
                                            style={{
                                                height: '22px',
                                                width: '22px',
                                                margin: '0 10px 0 0',
                                            }}
                                        />
                                    )
                                }
                                label={tab.name}
                                iconPosition="start"
                            />
                        ) : (
                            <AppointmentsTabInactive
                                key={index}
                                icon={
                                    tab.name === 'Summary' ? (
                                        <Circle
                                            style={{
                                                height: '15px',
                                                width: '15px',
                                                margin: '0 15px 0 5px',
                                                backgroundColor: '#C4C4C4',
                                            }}
                                        ></Circle>
                                    ) : (
                                        <img
                                            src={tab.inactiveIcon}
                                            style={{
                                                height: '22px',
                                                width: '22px',
                                                margin: '0 10px 0 0',
                                            }}
                                        />
                                    )
                                }
                                iconPosition="start"
                                label={tab.name}
                            />
                        ),
                    )}
                </AppointmentsTabs>
                <TabPanel value={value} index={0}>
                    <HeidiSummary ddxActive={ddxActive} setDdxActive={setDdxActive} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <MedicalHistory />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Medications />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <PreviousConsults />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <PersonalDetails />
                </TabPanel>
            </Container>
        </>
    );
};

export default Tabs;
