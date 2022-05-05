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
    padding: '10px 15px 2.5px',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: 'auto',
    // minHeight: '154px',
});

export const PatientInfoRow = styled(`div`)({
    padding: '5px 0',
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
    fontSize: '12px',
    fontWeight: '500',
    margin: '5px 5px',
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

export const Line = styled(`div`)({
    width: '100%',
    height: '1px',
    marginTop: '5px',
    background: '#E4E9F2',
});

export const HeidiDdxBtn = styled(`div`)({
    padding: '15px',
    fontSize: '15px',
    color: theme.palette.primary.main,
    display: 'flex',
    alignSelf: 'start',
    marginLeft: 'auto',
    marginRight: '10px',
    background: theme.palette.background.main,
    borderRadius: '10px',
    fontWeight: '500',
    '&:hover': {
        cursor: 'pointer',
        opacity: 0.92,
    },
});
