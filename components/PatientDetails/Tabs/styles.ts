import { Tabs, Tab, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../theme';

export const styles = {
    Appointments__Container: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        background: '#F7F9FC',
        borderRadius: 0,
        marginRight: 2,
        margin: 0,
    },
};

export const AppointmentsTabs = styled(Tabs)({
    '&.MuiTabs-root': {
        justifyContent: 'start',
        flexDirection: 'column',
        display: 'flex',
        maxWidth: '100%',
        minWidth: '180px',
        background: theme.palette.background.white,
        // borderRight: '1px solid red',
        height: '100%',
    },
    '& .MuiTabs-scroller': {
        display: 'flex',
    },
    '& .MuiTabs-flexContainer': {
        justifyContent: 'start',
        flexDirection: 'column',
        width: '100%',
    },
    '& .MuiTab-root': {
        justifyContent: 'start',
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
        justifyContent: 'start',
        margin: '0px',
        background: theme.palette.background.main,
        height: '50px',
        minHeight: '45px',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Lato',
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
    },
});

export const AppointmentsTabInactive = styled(Tab)({
    '&.MuiTab-root': {
        textTransform: 'none',
        paddingBottom: 10,
        justifyContent: 'start',
        height: '50px',
        minHeight: '35px',
        background: theme.palette.background.white,
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Lato',
        paddingTop: 10,
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

export const TabWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 24px',
    width: '100%',
});

export const TabTitle = styled('span')({
    fontFamily: 'Lato',
    fontSize: '22px',
    lineHeight: '32px',
    marginBottom: '10px',
    fontWeight: '700',
    color: theme.palette.text.main,
});

export const TabSubtitle = styled('span')({
    fontFamily: 'Lato',
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: '600',
    color: theme.palette.text.main,
});

export const TabText = styled('span')({
    fontFamily: 'Lato',
    whiteSpace: 'pre-wrap',
    fontSize: '14px',
    color: theme.palette.text.main,
});

export const LinkWrapper = styled('div')({
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500',
    fontSize: '16px',
    color: theme.palette.primary.main,
    '&:hover': {
        cursor: 'pointer',
        opacity: '0.92',
    },
});

export const AccordionStyled = styled(Accordion)({
    boxShadow: 'none',
    background: 'none',
    '& .MuiAccordionDetails-root': {
        padding: '0px',
    },
    '&.MuiAccordion-root': {
        margin: 0,
        '::before': {
            height: '0px',
        },
    },
});

export const AccordionSummaryStyled = styled(AccordionSummary)({
    padding: '0px',
    '&.MuiAccordionSummary-root': {
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
    },
    '& .Mui-expanded': {
        borderBottom: 'none',
        margin: '5px 0px',
    },
});

export const AccordionSummaryStyledNoBorder = styled(AccordionSummary)({
    '&.MuiAccordionSummary-root': {
        alignItems: 'start',
        padding: '10px 0',
    },
    '& .MuiAccordionSummary-content': {
        margin: '0px',
        width: 'fit-content',
    },
    '&.MuiAccordionSummary-content': {
        margin: '0px',
    },
    '& .Mui-expanded': {
        borderBottom: 'none',
        margin: '5px 0px',
    },
});

export const AccordionDetailsStyled = styled(AccordionDetails)({
    '& .MuiAccordionDetails-root': {
        padding: '16px 16px 16px 0px',
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
    right: 10,
    top: 10,
    padding: 0,
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
    left: -5,
    top: 0,
    paddingBottom: 10,
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
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 'calc(100%-30px)',
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
    marginBottom: '10px',
});

export const ModalDate = styled('span')({
    fontSize: '16px',
    color: theme.palette.text.primary,
    margin: '0px',
});

export const ModalSeenBy = styled('span')({
    fontSize: '14px',
    color: theme.palette.text.secondary,
    margin: '2.5px 0',
});

export const ModalText = styled('span')({
    fontSize: '16px',
    color: theme.palette.text.primary,
    margin: '2.5px 0',
});

export const ModalSubtitle = styled('span')({
    fontSize: '14px',
    color: theme.palette.text.primary,
    margin: '4px 0',
});

export const RowLink = styled('div')({
    width: 'calc(100%-20px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 10px 15px 0px',
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

export const DdxNotFound = styled('div')({
    display: 'flex',
    alignItems: 'start',
    background: '#FFF8F8',
    borderRadius: '4px',
    overflow: 'hidden',
    marginTop: '10px',
    height: '100%',
});

export const DangerLine = styled('div')({
    height: '100%',
    width: '8px',
    background: '#E95252',
});
