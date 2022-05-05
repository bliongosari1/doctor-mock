import React, { useState } from 'react';
import Appointments from '../Appointments';
import { PageContainer } from '../../styles/globalStyles';
import AppointmentDetails from '../AppointmentDetails';
import { DashboardContainer } from './styles';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { Patient } from '../../types/api';

interface Props {
    patient?: Patient | null;
}

const Dashboard: React.FC<Props> = () => {
    const [appointmentsMinimized, setAppointmentsMinimized] = useState(false);
    const [detailsMinimized, setDetailsMinimized] = useState(false);
    const [documentsMinimized, setDocumentsMinimized] = useState(false);

    return (
        <PageContainer>
            <DashboardContainer>
                <Appointments minimized={appointmentsMinimized} setMinimized={setAppointmentsMinimized} minimizeBtn />
                <AppointmentDetails
                    minimized={appointmentsMinimized}
                    setMinimized={setAppointmentsMinimized}
                    detailsMinimized={detailsMinimized}
                    setDetailsMinimized={setDetailsMinimized}
                    documentsMinimized={documentsMinimized}
                    setDocumentsMinimized={setDocumentsMinimized}
                />
            </DashboardContainer>
        </PageContainer>
    );
};

const mapState = (state: RootState) => ({
    patient: state.patient.currentPatient,
});

// const mapDispatch = (dispatch: Dispatch) => ({});

export default connect(mapState)(Dashboard);
