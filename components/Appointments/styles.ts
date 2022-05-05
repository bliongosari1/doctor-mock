import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../theme';

export const styles = {
    Appointments__Container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1.2,
        height: '83vh',
        minWidth: '380px',
        background: theme.palette.background.white,
        marginRight: 2,
    },
    Appointments__Container__Minimized: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        color: '#C5CEE0',
        flex: 0.2,
        minWidth: '75px',
        height: '83vh',
        background: 'F9F9F9',
        marginRight: 2,
        '&:hover': {
            cursor: 'pointer',
        },
    },
    Appointments__HeaderTitle: {
        fontSize: '22px',
        fontWeight: '700',
    },
    AppointmentsHeaderSubtitle: {
        margin: '0 20px',
    },
    AppointmentsHeaderSubtitleDiv: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export const AppointmentsTabs = styled(Tabs)({
    '&.MuiTabs-root': {
        margin: '0 15px',
        marginBottom: '15px',
        borderRadius: '32px',
        backgroundColor: '#F9F9F9',
        minHeight: 'unset',
    },
    '& .MuiTabs-scroller': {
        // background: 'blue'
    },
    '& .MuiTabs-flexContainer': {
        justifyContent: 'center',
    },
});

export const AppointmentsTab = styled(Tab)({
    '&.MuiTab-root': {
        textTransform: 'none',
        padding: '0',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        fontSize: 15,
        minHeight: '42px',
        borderRadius: '32px',
        fontWeight: 700,
        fontFamily: 'Lato',
        color: theme.palette.text.secondary,
    },
    '& .MuiTab-iconWrapper': {
        marginBottom: '5px',
    },
    '& .MuiTabs-scroller': {
        // background: 'blue'
    },
    '& .MuiTabs-flexContainer': {
        justifyContent: 'center',
    },
    '&.MuiTabs-indicator': {
        height: '0px',
        borderRadius: '34px',
    },
});

export const AppointmentsHeader = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    margin: '20px 15px',
});

export const AppointmentsHeaderDate = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});

export const ImageButton = styled('div')({
    '&:hover': {
        cursor: 'pointer',
        opacity: '0.92',
    },
});
