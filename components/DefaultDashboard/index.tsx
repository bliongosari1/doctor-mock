import React, { useState } from 'react';
import Appointments from '../Appointments';
import { PageContainer } from '../../styles/globalStyles';
import { DashboardContainer, DefaultDashboardContainer } from './styles';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import DefaultDashboardContents from './DefaultDashboardContents';
import { Patient } from '../../types/api';

interface Props {
    patient?: Patient | null;
}

const Dashboard: React.FC<Props> = () => {
    // const { patient } = props;
    const [appointmentsMinimized, setAppointmentsMinimized] = useState(false);

    return (
        <PageContainer>
            <DashboardContainer>
                <Appointments minimized={appointmentsMinimized} setMinimized={setAppointmentsMinimized} />
                <DefaultDashboardContainer>
                    <DefaultDashboardContents />
                </DefaultDashboardContainer>
            </DashboardContainer>
        </PageContainer>
    );
};

const mapState = (state: RootState) => ({
    patient: state.patient.currentPatient,
});

// const mapDispatch = (dispatch: Dispatch) => ({});

export default connect(mapState)(Dashboard);
