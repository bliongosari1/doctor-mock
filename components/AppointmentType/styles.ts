import { styled } from '@mui/system';
import theme from '../../theme';

export const styles = {};

export const AppointmentTypeContainer = styled('div')({
    position: 'absolute',
    right: 10,
    width: '92px',
    height: '30px',
    background: theme.palette.primary.main,
    borderRadius: '16px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const AppointmentTypeContainer__NoText = styled('div')({
    width: '43px',
    height: '43px',
    background: theme.palette.primary.main,
    borderRadius: '8px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
});
