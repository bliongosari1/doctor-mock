import React, { useState, useEffect } from 'react';
import { DashboardContainer, HorizontalContainer, VerticalContainer } from '../../styles/globalStyles';
import PatientDetails from '../PatientDetails';
import DashboardDetails from '../DashboardDetails';
import Chatbox from '../Chatbox';
import DocumentTabs from '../DocumentsTabs';
import { Patient } from '../../types/api';

interface Props {
    patient: Patient;
    minimized: boolean;
    setMinimized: (arg: boolean) => void;
    detailsMinimized: boolean;
    setDetailsMinimized: (arg: boolean) => void;
    documentsMinimized: boolean;
    setDocumentsMinimized: (arg: boolean) => void;
}

export const ChatDashboard: React.FC<Props> = (props) => {
    const {
        patient,
        minimized,
        setMinimized,
        detailsMinimized,
        setDetailsMinimized,
        documentsMinimized,
        setDocumentsMinimized,
    } = props;
    const [chatProgress, setChatProgress] = useState('not started');

    const setProgress = (progress: string) => {
        setChatProgress(progress);
    };

    useEffect(() => {
        if (chatProgress === 'started') {
            setMinimized(true);
            setDetailsMinimized(true);
            setDocumentsMinimized(false);
        } else {
            setDetailsMinimized(false);
            setDocumentsMinimized(false);
        }
    }, [chatProgress]);

    const handleMinimizeDocuments = (arg: boolean) => {
        if (chatProgress === 'started') {
            setDocumentsMinimized(arg);
            setDetailsMinimized(!arg);
        }
    };

    const handleMinimizeDetails = (arg: boolean) => {
        if (chatProgress === 'started') {
            setDetailsMinimized(arg);
            setDocumentsMinimized(!arg);
        }
    };

    return (
        <>
            <HorizontalContainer>
                <VerticalContainer style={{ marginRight: '15px', minWidth: '450px' }}>
                    {chatProgress === 'started' && (
                        <DashboardContainer
                            style={{
                                marginBottom: '10px',
                                display: 'flex',
                                flex: documentsMinimized ? 0 : 3,
                            }}
                        >
                            <DashboardContainer>
                                <VerticalContainer>
                                    <DashboardDetails
                                        type={patient.type}
                                        status={patient.status}
                                        progress={chatProgress}
                                        setProgress={setProgress}
                                    ></DashboardDetails>
                                    <DocumentTabs
                                        progress={chatProgress}
                                        minimized={documentsMinimized}
                                        setMinimized={handleMinimizeDocuments}
                                        appointmentsMinimized={minimized}
                                        setAppointmentsMinimized={setMinimized}
                                    />
                                </VerticalContainer>
                            </DashboardContainer>
                        </DashboardContainer>
                    )}
                    <DashboardContainer
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                            overflow: 'hidden',
                        }}
                    >
                        <PatientDetails
                            minimized={detailsMinimized}
                            setMinimized={handleMinimizeDetails}
                            patient={patient}
                        />
                    </DashboardContainer>
                </VerticalContainer>
                <DashboardContainer style={{ display: 'flex', flexDirection: 'column', minWidth: '420px' }}>
                    {chatProgress === 'started' ? (
                        <Chatbox patient={patient} />
                    ) : (
                        <>
                            <DashboardDetails
                                type={patient.type}
                                status={patient.status}
                                progress={chatProgress}
                                setProgress={setProgress}
                            ></DashboardDetails>
                            <DocumentTabs
                                progress={chatProgress}
                                minimized={documentsMinimized}
                                setMinimized={handleMinimizeDocuments}
                                appointmentsMinimized={minimized}
                                setAppointmentsMinimized={setMinimized}
                            />
                        </>
                    )}
                </DashboardContainer>
            </HorizontalContainer>
        </>
    );
};

export default ChatDashboard;
