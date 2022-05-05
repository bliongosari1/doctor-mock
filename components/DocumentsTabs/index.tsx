import React, { useRef, useEffect } from 'react';
// import Image from 'next/image';
import { Box } from '@mui/material';
import { useTheme } from 'styled-components';
import { Container } from '../../styles/globalStyles';
import { styles, AppointmentsTabs, AppointmentsTab, AppointmentsTabInactive, TabDiv } from './styles';
import NotesIconActive from '../../public/assets/icons/Tabs/notes_white.svg';
import NotesIconInactive from '../../public/assets/icons/Tabs/notes_grey.svg';
import PrescriptionIconActive from '../../public/assets/icons/Tabs/prescriptions_white.svg';
import PrescriptionIconInactive from '../../public/assets/icons/Tabs/prescriptions_grey.svg';
import TestsIconActive from '../../public/assets/icons/Tabs/pathology_white.svg';
import TestsIconInactive from '../../public/assets/icons/Tabs/pathology_grey.svg';
import DocumentsIconActive from '../../public/assets/icons/Tabs/documents_white.svg';
import DocumentsIconInactive from '../../public/assets/icons/Tabs/documents_grey.svg';

import DocumentEditor from './DocumentEditor';
import { Documents } from './Documents';
import { Tests } from './Tests';
// import { EditorState } from 'draft-js';

interface Props {
    progress: string;
    minimized: boolean;
    setMinimized: (arg: boolean) => void;
    appointmentsMinimized: boolean;
    setAppointmentsMinimized: (arg: boolean) => void;
}

const tabs = [
    {
        name: 'Notes',
        icon: NotesIconActive,
        inactiveIcon: NotesIconInactive,
    },
    {
        name: 'Prescription',
        icon: PrescriptionIconActive,
        inactiveIcon: PrescriptionIconInactive,
    },
    {
        name: 'Medical Certificate',
        icon: TestsIconActive,
        inactiveIcon: TestsIconInactive,
    },
    {
        name: 'Referral',
        icon: DocumentsIconActive,
        inactiveIcon: DocumentsIconInactive,
    },
];

const TabPanel = (props: { children: React.ReactElement; value: number; index: number }) => {
    const { children, value, index, ...other } = props;
    return (
        <TabDiv
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box
                    sx={{
                        padding: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    {children}
                </Box>
            )}
        </TabDiv>
    );
};

export const DocumentsTabs: React.FC<Props> = (props) => {
    const theme = useTheme();
    const { progress, minimized, setMinimized, appointmentsMinimized } = props;
    const [value, setValue] = React.useState(0);
    // const [selected, setSelected] = React.useState(-1);
    const [contentWidth, setContentWidth] = React.useState(150);
    const [contentHeight, setContentHeight] = React.useState(200);

    const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
        setMinimized(false);
        setValue(newValue);
    };

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef?.current?.offsetWidth) {
            setContentWidth(containerRef?.current?.offsetWidth);
            setContentHeight(containerRef?.current?.offsetHeight);
        }
        setTimeout(() => {
            if (containerRef?.current?.offsetWidth) {
                setContentWidth(containerRef?.current?.offsetWidth);
                setContentHeight(containerRef?.current?.offsetHeight);
            }
        }, 1);
    }, [containerRef, progress, minimized, appointmentsMinimized]);

    // useEffect(() => {
    //     setContentWidth(100);
    //     setContentHeight(100);

    // }, [progress, minimized, appointmentsMinimized]);

    const handleResize = () => {
        if (containerRef?.current?.offsetWidth) {
            setContentWidth(containerRef?.current?.offsetWidth);
            setContentHeight(containerRef?.current?.offsetHeight);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container ref={containerRef} sx={styles.Appointments__Container}>
            <Box sx={{ margin: '0 7.5px' }}>
                <AppointmentsTabs value={value} onChange={handleChange} aria-label="appointments-tabs">
                    {tabs.map((tab, index) =>
                        value === index ? (
                            <AppointmentsTab
                                key={index}
                                icon={
                                    <img
                                        src={tab.icon}
                                        style={{
                                            height: '22px',
                                            width: '22px',
                                            margin: '0 10px 0 0',
                                        }}
                                    />
                                }
                                label={(contentWidth > 500 || value === index) && tab.name}
                                iconPosition="start"
                                style={{
                                    justifyContent: 'center',
                                    background: theme.palette.primary.main,
                                    color: 'white',
                                }}
                            />
                        ) : (
                            <AppointmentsTabInactive
                                key={index}
                                icon={
                                    <img
                                        src={tab.inactiveIcon}
                                        style={{
                                            height: '22px',
                                            width: '22px',
                                            margin: '0 10px 0 0',
                                        }}
                                    />
                                }
                                iconPosition="start"
                                style={{ justifyContent: 'center', flex: 1 }}
                            />
                        ),
                    )}
                </AppointmentsTabs>
            </Box>
            {!minimized ? (
                <Box sx={{ overflow: 'scroll', height: '100%', width: '100%' }}>
                    <TabPanel value={value} index={0}>
                        <DocumentEditor height={contentHeight} width={contentWidth} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <DocumentEditor height={contentHeight} width={contentWidth} />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Tests height={contentHeight} width={contentWidth} />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Documents height={contentHeight} width={contentWidth} />
                    </TabPanel>
                </Box>
            ) : (
                <div style={{ height: '20px' }}> </div>
            )}
        </Container>
    );
};

export default DocumentsTabs;
