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
