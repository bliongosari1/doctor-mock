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

export const VoiceDashboard: React.FC<Props> = (props) => {
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
    const [chatToggle, setChatToggle] = useState(false);

    const setProgress = (progress: string) => {
        setChatProgress(progress);
    };

    useEffect(() => {
        if (chatProgress === 'started') {
            setMinimized(true);
        }
        setDetailsMinimized(chatToggle);
        setDocumentsMinimized(false);
    }, [chatToggle, chatProgress]);

    const handleMinimizeDocuments = (arg: boolean) => {
        setDocumentsMinimized(arg);
        if (chatToggle) {
            setDetailsMinimized(!arg);
        }
    };

    const handleMinimizeDetails = (arg: boolean) => {
        setDetailsMinimized(arg);
        if (chatToggle) {
            setDocumentsMinimized(!arg);
        }
    };

    return (
        <>
            <HorizontalContainer>
                <VerticalContainer style={{ marginRight: '15px', minWidth: '450px' }}>
                    {chatToggle && (
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
                                        chatToggle={chatToggle}
                                        setChatToggle={setChatToggle}
                                    />
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
                            maxHeight: detailsMinimized ? '175px' : 'unset',
                        }}
                    >
                        <PatientDetails
                            minimized={detailsMinimized}
                            setMinimized={handleMinimizeDetails}
                            patient={patient}
                        />
                    </DashboardContainer>
                </VerticalContainer>

                {chatToggle ? (
                    <DashboardContainer style={{ minWidth: '420px' }}>
                        <Chatbox patient={patient} />
                    </DashboardContainer>
                ) : (
                    <DashboardContainer style={{ display: 'flex', flexDirection: 'column', minWidth: '420px' }}>
                        <>
                            <DashboardDetails
                                type={patient.type}
                                status={patient.status}
                                chatToggle={chatToggle}
                                setChatToggle={setChatToggle}
                                progress={chatProgress}
                                setProgress={setProgress}
                            />
                            <DocumentTabs
                                progress={chatProgress}
                                minimized={documentsMinimized}
                                setMinimized={handleMinimizeDocuments}
                                appointmentsMinimized={minimized}
                                setAppointmentsMinimized={setMinimized}
                            />
                        </>
                    </DashboardContainer>
                )}
            </HorizontalContainer>
        </>
    );
};

export default VoiceDashboard;
