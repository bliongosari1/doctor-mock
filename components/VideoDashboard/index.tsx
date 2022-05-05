import React, { useState, useEffect } from 'react';
import { DashboardContainer, HorizontalContainer, VerticalContainer } from '../../styles/globalStyles';
import PatientDetails from '../PatientDetails';
import DashboardDetails from '../DashboardDetails';
import Chatbox from '../Chatbox';
import DocumentTabs from '../DocumentsTabs';
import { Patient } from '../../types/api';
const VideoConsult = require('../../public/assets/images/video_consult.png');

interface Props {
    patient: Patient;
    minimized: boolean;
    setMinimized: (arg: boolean) => void;
    detailsMinimized: boolean;
    setDetailsMinimized: (arg: boolean) => void;
    documentsMinimized: boolean;
    setDocumentsMinimized: (arg: boolean) => void;
}

export const VideoDashboard: React.FC<Props> = (props) => {
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
            setDetailsMinimized(true);
        } else {
            setDetailsMinimized(false);
        }
        setDocumentsMinimized(false);
    }, [chatProgress]);

    useEffect(() => {
        if (!chatToggle && chatProgress !== 'started') {
            setDetailsMinimized(false);
            setDocumentsMinimized(false);
        }
    }, [chatToggle]);

    const handleMinimizeDocuments = (arg: boolean) => {
        if (chatProgress === 'started' || chatToggle) {
            setDocumentsMinimized(arg);
            setDetailsMinimized(!arg);
        }
    };

    const handleMinimizeDetails = (arg: boolean) => {
        if (chatProgress === 'started' || chatToggle) {
            setDocumentsMinimized(!arg);
            setDetailsMinimized(arg);
        }
    };

    return (
        <>
            <HorizontalContainer>
                <VerticalContainer style={{ marginRight: '15px', minWidth: '450px' }}>
                    {(chatProgress === 'started' || (chatProgress !== 'started' && chatToggle)) && (
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

                {chatProgress === 'started' ? (
                    <VerticalContainer>
                        <div
                            style={{
                                display: 'flex',
                                height: chatToggle ? '67%' : '100%',
                            }}
                        >
                            <img src={VideoConsult} style={{ height: '100%', width: '100%' }} alt="vid" />
                        </div>
                        {chatToggle && (
                            <div style={{ display: 'flex', maxHeight: '33.3%' }}>
                                <DashboardContainer>
                                    <Chatbox small patient={patient} />
                                </DashboardContainer>
                            </div>
                        )}
                    </VerticalContainer>
                ) : (
                    <DashboardContainer style={{ display: 'flex', flexDirection: 'column', minWidth: '420px' }}>
                        {chatToggle && chatProgress !== 'started' ? (
                            <Chatbox patient={patient} />
                        ) : (
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
                        )}
                    </DashboardContainer>
                )}
            </HorizontalContainer>
        </>
    );
};

export default VideoDashboard;
