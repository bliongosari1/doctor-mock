import { Container } from '@mui/material';
import { styled } from '@mui/system';

export const styles = {};

export const DashboardContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'row',
    height: '90%',
    '&.MuiContainer-root': {
        padding: '31px 0',
        margin: 0,
        maxWidth: '100%',
        overflow: 'scroll',
    },
});

export const DefaultDashboardContainer = styled('div')({
    display: 'flex',
    flex: 1.5,
    height: '83vh',
    flexDirection: 'column',
    background: 'none',
    padding: '0px',
});
