import { styled } from '@mui/system';
import theme from '../../../theme';

export const styles = {
    TitlePrimary: {
        fontSize: '20px',
        marginTop: '2px',
        fontWeight: '700',
        color: theme.palette.text.main,
        lineHeight: '24px',
        marginBottom: '2px',
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

export const MenuItemStyled = styled('div')({
    background: 'white',
    borderRadius: '16px',
    padding: '16px',
    border: '1px solid #EDF1F7',
    width: 'calc(50% - 5px)',
    '&:hover': {
        cursor: 'pointer',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    },
});

export const PatientDetailsWrapper = styled(`div`)({
    padding: '10px 0px 0px',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

export const PatientInfoWrapper = styled(`div`)({
    padding: '0px',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 'auto',
    // minHeight: '154px',
});

export const PatientInfoRow = styled(`div`)({
    padding: '0px 0 5px',
    width: '100%',
    // maxHeight: '30px',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
});

export const PatientInfoLinks = styled('div')({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',
    fontSize: '16px',
    fontWeight: '400',
    borderTop: `1px solid ${theme.palette.divider};`,
    '&:hover': {
        cursor: 'pointer',
    },
});

export const PatientInfoLinkWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
});

export const PatientInfoTitle = styled('div')({
    fontSize: '13px',
    fontWeight: '500',
    margin: '7px 0px',
    color: theme.palette.text.secondary,
});

export const PatientSidePanels = styled(`div`)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '-5px 0 10px 0',
    fontSize: '14px',
    color: theme.palette.text.primary,
});

export const DetailsIconWrapper = styled(`div`)({
    display: 'flex',
    flexDirection: 'row',
    fontSize: '14px',
    marginRight: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
});

export const TagsWrapper = styled(`div`)({
    display: 'flex',
    flexDirection: 'column',
});

export const LastSeenText = styled(`span`)({
    color: theme.palette.text.secondary,
    fontSize: '14px',
});

export const AvatarWrapper = styled(`div`)({
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '3px',
    marginRight: '7.5px',
    position: 'relative',
    justifyContent: 'center',
});

export const AvatarBackground = styled(`div`)({
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'grey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});
