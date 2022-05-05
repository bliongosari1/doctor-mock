import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../theme';

export const styles = {
    Appointments__Container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1.2,
        height: '100%',
        background: theme.palette.background.white,
        marginRight: 2,
        margin: 0,
    },
};

export const AppointmentsTabs = styled(Tabs)({
    '&.MuiTabs-root': {
        backgroundColor: '#F9F9F9',
        borderRadius: '32px',
        minHeight: '40px',
        margin: '0px 10px',
        justifyContent: 'space-between',
        display: 'flex',
        maxWidth: '100%',
    },
    '& .MuiTabs-scroller': {
        // background: 'blue'
    },
    '& .MuiTabs-flexContainer': {
        justifyContent: 'center',
    },
    '& .MuiTab-root': {
        justifyContent: 'center',
    },
    '& .MuiTab-iconWrapper': {
        marginBottom: 0,
        marginRight: '10px',
    },
    '& .MuiTabs-indicator': {
        height: '0px',
        background: 'red',
    },
});

export const AppointmentsTab = styled(Tab)({
    '&.MuiTab-root': {
        textTransform: 'none',
        paddingBottom: 0,
        justifyContent: 'space-between',
        margin: '0px',
        height: '40px',
        minHeight: '35px',
        borderRadius: '32px',
        fontSize: 14,
        fontWeight: 700,
        fontFamily: 'Lato',
        paddingTop: 0,
        color: theme.palette.primary.main,
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

export const AppointmentsTabInactive = styled(Tab)({
    '&.MuiTab-root': {
        textTransform: 'none',
        paddingBottom: 0,
        justifyContent: 'space-between',
        height: '40px',
        minHeight: '35px',
        fontSize: 14,
        fontWeight: 700,
        fontFamily: 'Lato',
        paddingTop: 0,
        color: theme.palette.text.tertiary,
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
        height: '4px',
        borderRadius: '34px',
    },
});

export const TabDiv = styled('div')({
    height: '100%',
    width: '100%',
});
