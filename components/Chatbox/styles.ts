import { styled } from '@mui/system';
import theme from '../../theme';

export const styles = {
    TitlePrimary: {
        fontSize: '22px',
        fontWeight: '700',
        color: theme.palette.text.main,
    },
    TagWarning: {
        color: theme.palette.warning.main,
        marginBottom: '10px',
    },
    TitleSecondary: {
        fontSize: '12px',
        color: theme.palette.text.secondary,
    },

    AppointmentDetails__EmptyUpperBox: {
        display: 'flex',
    },
};

export const ChatboxWrapper = styled(`div`)({
    width: '100%',
    height: '100%',
    borderRadius: '16px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
});

export const Chatbox = styled(`div`)({});
