import { Box, Accordion, AccordionSummary, AccordionDetails, Modal } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../theme';

export const CustomModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const ModalContentWrapper = styled(Box)({
    position: 'relative',
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: '16px',
    border: 'none',
    maxHeight: '90vh',
    overflow: 'scroll',
    padding: '16px 0px',
    outline: 'none',
});

export const ModalTitleImage = styled('div')({
    height: '53px',
    width: '53px',
    background: '#D0E9F1',
    borderRadius: '50%',
    margin: '0 16px',
});

export const ModalTitleWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
});

export const ModalPaddingWrapper = styled('div')({
    margin: '32px 27px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
});

export const ModalTitle = styled('div')({
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: '26px',
    lineHeight: '32px',
});

export const ModalGreySubtitle = styled('div')({
    color: theme.palette.text.secondary,
    fontWeight: 400,
    fontSize: '16px',
});

export const AccordionStyled = styled(Accordion)({
    boxShadow: 'none',
    width: '400px',
    '&.MuiAccordion-root': {
        margin: 0,
        '::before': {
            height: '0px',
        },
    },
});

export const AccordionSummaryStyled = styled(AccordionSummary)({
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    '&.Mui-expanded': {
        borderBottom: 'none',
        minHeight: 'unset',
    },
});

export const AccordionDetailsStyled = styled(AccordionDetails)({
    '&.MuiAccordionDetails-root': {
        padding: '0px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
    },
});

export const AccordionDetailsStyledDdx = styled(AccordionDetails)({
    '&.MuiAccordionDetails-root': {
        padding: '0px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
});

export const AccordionDetailsStyledQnA = styled(AccordionDetails)({
    '&.MuiAccordionDetails-root': {
        padding: '0px 16px 15px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
    },
});

export const SubtitleSeperated = styled(AccordionDetails)({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    color: theme.palette.text.secondary,
    fontSize: '14px',
});

export const TickSeperated = styled(AccordionDetails)({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    color: theme.palette.text.primary,
    alignItems: 'center',
    marginLeft: '15px',
    fontSize: '14px',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
});

export const ExitButton = styled(`div`)({
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 15,
    top: 15,
    padding: 0,
    zIndex: 999,
    '&:hover': {
        opacity: 0.92,
        cursor: 'pointer',
    },
});

export const BackButton = styled(`div`)({
    display: 'flex',
    position: 'relative',
    justifyContent: 'start',
    alignItems: 'center',
    left: 12.5,
    top: 0,
    padding: 0,
    '&:hover': {
        opacity: 0.92,
        cursor: 'pointer',
    },
});

export const TickWrapper = styled('div')({
    marginRight: '9px',
});

export const PreviousConsultsWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    marginTop: '10px',
});

export const ConsultRow = styled('div')({
    margin: '0 16px 7.5px',
    padding: '0 0 10px',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
        cursor: 'pointer',
    },
});

export const ConsultRowDetails = styled('div')({
    margin: '0 16px 7.5px',
    padding: '0 0 10px',
    display: 'flex',
    flexDirection: 'column',
});

export const TagsWrapper = styled('div')({
    display: 'flex',
});

export const ModalDate = styled('span')({
    fontSize: '14px',
    color: theme.palette.text.secondary,
    margin: '5px 0',
});

export const ModalSeenBy = styled('span')({
    fontSize: '14px',
    color: theme.palette.text.primary,
    margin: '7.5px 0',
});

export const ModalText = styled('span')({
    fontSize: '16px',
    color: theme.palette.text.primary,
    margin: '7.5px 0',
});

export const RowLink = styled('div')({
    width: 'calc(100%-20px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 10px 10px 0px',
    marginLeft: '20px',
    fontSize: '16px',
    fontWeight: '400',
    borderBottom: `1px solid ${theme.palette.divider};`,
    '&:hover': {
        cursor: 'pointer',
    },
});

export const RowLinkContent = styled('div')({
    display: 'flex',
    fontSize: '15px',
    alignItems: 'center',
    justifyContent: 'start',
});

export const Line = styled('div')({
    height: '1px',
    width: '100%',
    background: 'rgba(33, 33, 33, 0.08)',
});

export const styles = {};
