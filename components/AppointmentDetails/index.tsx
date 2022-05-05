import React, { useEffect } from 'react';
import { Container } from '../../styles/globalStyles';
import { styles } from './styles';
import ChatDashboard from '../ChatDashboard';
import VideoDashboard from '../VideoDashboard';
import VoiceDashboard from '../VoiceDashboard';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch, RootState } from '../../store';
// import { Patient } from '../../types/api';
// import { InitialState } from '../../models/patient';

interface Props extends PropsFromRedux {
    minimized: boolean;
    setMinimized: (arg: boolean) => void;
    detailsMinimized: boolean;
    setDetailsMinimized: (arg: boolean) => void;
    documentsMinimized: boolean;
    setDocumentsMinimized: (arg: boolean) => void;
}

export const AppointmentDetails: React.FC<Props> = (props) => {
    const {
        minimized,
        setMinimized,
        detailsMinimized,
        setDetailsMinimized,
        documentsMinimized,
        setDocumentsMinimized,
    } = props;

    useEffect(() => {
        console.log(props.patient);
    }, [props.patient]);

    if (props.patient && Object.entries(props.patient).length > 0) {
        return (
            <Container sx={styles.AppointmentDetails__Container}>
                {props.patient.type === 'Chat' ? (
                    <ChatDashboard
                        patient={props.patient}
                        minimized={minimized}
                        setMinimized={setMinimized}
                        detailsMinimized={detailsMinimized}
                        setDetailsMinimized={setDetailsMinimized}
                        documentsMinimized={documentsMinimized}
                        setDocumentsMinimized={setDocumentsMinimized}
                    />
                ) : props.patient.type === 'Voice Call' ? (
                    <VoiceDashboard
                        patient={props.patient}
                        minimized={minimized}
                        setMinimized={setMinimized}
                        detailsMinimized={detailsMinimized}
                        setDetailsMinimized={setDetailsMinimized}
                        documentsMinimized={documentsMinimized}
                        setDocumentsMinimized={setDocumentsMinimized}
                    />
                ) : (
                    <VideoDashboard
                        patient={props.patient}
                        minimized={minimized}
                        setMinimized={setMinimized}
                        detailsMinimized={detailsMinimized}
                        setDetailsMinimized={setDetailsMinimized}
                        documentsMinimized={documentsMinimized}
                        setDocumentsMinimized={setDocumentsMinimized}
                    />
                )}
            </Container>
        );
    } else {
        return (
            <Container sx={styles.AppointmentDetails__Container}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    Loading....
                </div>
            </Container>
        );
    }
};

const mapState = (state: RootState) => ({
    patient: state.patient.currentPatient,
});

const mapDispatch = (dispatch: Dispatch) => ({
    setPatient: dispatch.patient.setPatient,
});

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AppointmentDetails);
